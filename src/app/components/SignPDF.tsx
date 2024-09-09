'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFDocument, rgb } from 'pdf-lib';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfSigner: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfData, setPdfData] = useState<ArrayBuffer | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [signaturePosition, setSignaturePosition] = useState<{ x: number; y: number } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (pdfFile) {
      const reader = new FileReader();
      reader.onload = async (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          setPdfData(event.target.result as ArrayBuffer); // Set the ArrayBuffer data
        }
      };
      reader.readAsArrayBuffer(pdfFile); // Read the file as an ArrayBuffer
    }
  }, [pdfFile]);

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSaveSignedPdf = async () => {
    if (!pdfData || !canvasRef.current || !signaturePosition) return;

    const canvas = canvasRef.current;
    const signatureDataUrl = canvas.toDataURL('image/png');

    const pdfDoc = await PDFDocument.load(pdfData);

    const signatureImageBytes = await fetch(signatureDataUrl).then((res) => res.arrayBuffer());
    const signatureImage = await pdfDoc.embedPng(signatureImageBytes);

    const pages = pdfDoc.getPages();
    const page = pages[pageNumber - 1]; // Use the current page
    const { width, height } = page.getSize();

    page.drawImage(signatureImage, {
      x: signaturePosition.x, // Use dynamic position
      y: height - signaturePosition.y - 50, // Adjust Y based on height
      width: 100, // Adjust the size of the signature
      height: 50, // Adjust the size of the signature
    });

    const signedPdfBytes = await pdfDoc.save();
    const blob = new Blob([signedPdfBytes], { type: 'application/pdf' });
    const signedPdfUrl = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = signedPdfUrl;
    downloadLink.download = 'signed-document.pdf';
    downloadLink.click();
  };

  const handleClearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      context?.clearRect(0, 0, canvas.width, canvas.height);
    }
    setSignaturePosition(null);
  };

  const handleSignatureStart = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setSignaturePosition({ x, y });
  };

  const drawSignature = (event: React.MouseEvent) => {
    if (!signaturePosition || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      context.beginPath();
      context.arc(signaturePosition.x, signaturePosition.y, 2, 0, Math.PI * 2);
      context.fillStyle = 'black';
      context.fill();
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div>
      <h2>PDF Signer</h2>
      <input type="file" accept="application/pdf" onChange={handlePdfUpload} />
      {pdfData && (
        <div>
          <Document file={{ data: pdfData }} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              width={500}
              onClick={handleSignatureStart}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
          <div>
            <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
              Previous
            </button>
            <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
              Next
            </button>
          </div>
        </div>
      )}
      {signaturePosition && (
        <canvas
          ref={canvasRef}
          width={500}
          height={200}
          className="sigCanvas"
          style={{ position: 'absolute', left: signaturePosition.x, top: signaturePosition.y }}
          onMouseMove={drawSignature}
        />
      )}
      <button onClick={handleClearSignature}>Clear Signature</button>
      <button onClick={handleSaveSignedPdf}>Save Signed PDF</button>
    </div>
  );
};

export default PdfSigner;
