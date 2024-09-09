import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

interface FileUploadProps {
  onDataUpload: (data: any[], columns: string[], append: boolean) => void;
  existingColumns: string[];
}

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes

const FileUpload: React.FC<FileUploadProps> = ({ onDataUpload, existingColumns }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFile(null);
    setError(null);
  }, [existingColumns]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      console.log('File selected:', selectedFile.name, 'Size:', selectedFile.size, 'bytes');
      if (selectedFile.size > MAX_FILE_SIZE) {
        setError(`File size exceeds 4MB limit. Please choose a smaller file.`);
        setFile(null);
      } else {
        setFile(selectedFile);
        setError(null);
      }
    } else {
      setFile(null);
      setError(null);
    }
  };

  const processFile = (append: boolean) => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(`File size exceeds 4MB limit. Please choose a smaller file.`);
      return;
    }

    console.log('Processing file:', file.name, 'Append:', append);

    const parseFile = (fileContent: string) => {
      let data: any[];
      let columns: string[];

    const preprocessCsv = (content: string) => {
    // Split content into lines
    const lines = content.split('\n');
    // Remove quotes around the first line if it's detected as a header
    if (lines[0].startsWith('"') && lines[0].endsWith('"')) {
        lines[0] = lines[0].substring(1, lines[0].length - 1).replace(/","/g, ',');
    }
    return lines.join('\n');
    };

      if (file.name.endsWith('.csv')) {
        console.log('Parsing CSV file');
        const processedContent = preprocessCsv(fileContent);
        const result = Papa.parse(processedContent, { 
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            error: (error) => {
              console.error('CSV parsing error:', error);
              setError(`Error parsing CSV: ${error.message}`);
            },

          complete: (results) => {
            console.log('CSV parsing complete:', results);
            if (results.errors.length > 0) {
              console.error('CSV parsing errors:', results.errors);
              setError(`CSV parsing errors: ${results.errors.map(e => e.message).join(', ')}`);
              return;
            }
            data = results.data as any[];
            columns = results.meta.fields || [];
            if (data.length === 0 || columns.length === 0) {
              setError('The CSV file appears to be empty or improperly formatted.');
              return;
            }
            processData(data, columns, append);
          }
        });
        return; // Early return as Papa.parse is async
      } else if (file.name.endsWith('.json')) {
        console.log('Parsing JSON file');
        try {
          data = JSON.parse(fileContent);
          if (!Array.isArray(data) || data.length === 0) {
            setError('Invalid JSON format. Expected a non-empty array of objects.');
            return;
          }
          columns = Object.keys(data[0]);
        } catch (err) {
          console.error('JSON parsing error:', err);
          setError(`Error parsing JSON: ${(err as Error).message}`);
          return;
        }
      } else {
        setError('Unsupported file type. Please upload a CSV or JSON file.');
        return;
      }

      processData(data, columns, append);
    };

    const processData = (data: any[], columns: string[], append: boolean) => {
      console.log('Processing data:', { rows: data.length, columns });
      if (append && existingColumns.length > 0 && !columnsMatch(columns, existingColumns)) {
        setError('The columns in this file do not match the existing data.');
        return;
      }

      onDataUpload(data, columns, append);
      setFile(null);
      console.log('Data upload complete');
    };

    const reader = new FileReader();
    reader.onload = (e) => parseFile(e.target?.result as string);
    reader.onerror = (e) => {
      console.error('File reading error:', e);
      setError(`Error reading file: ${(e.target as any)?.error}`);
    };
    reader.readAsText(file);
  };

  const columnsMatch = (newColumns: string[], existingColumns: string[]) => {
    return JSON.stringify(newColumns.sort()) === JSON.stringify(existingColumns.sort());
  };

  return (
    <div className="mb-4">
      <input type="file" accept=".csv,.json" onChange={handleFileChange} className="mr-2" />
      <button 
        onClick={() => processFile(false)} 
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        disabled={!file || !!error}
      >
        Upload New
      </button>
      {existingColumns.length > 0 && (
        <button 
          onClick={() => processFile(true)} 
          className="bg-green-500 text-white px-4 py-2 rounded"
          disabled={!file || !!error}
        >
          + Add Data
        </button>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default FileUpload;