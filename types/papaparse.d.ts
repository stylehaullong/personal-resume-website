declare module 'papaparse' {
    export interface ParseResult<T> {
      data: T[];
      errors: any[];
      meta: {
        delimiter: string;
        linebreak: string;
        aborted: boolean;
        truncated: boolean;
        cursor: number;
        fields?: string[];  // Add this line
      };
    }
  
    export interface ParseConfig {
      delimiter?: string;
      newline?: string;
      quoteChar?: string;
      escapeChar?: string;
      header?: boolean;
      transformHeader?: (header: string) => string;
      dynamicTyping?: boolean;
      preview?: number;
      encoding?: string;
      worker?: boolean;
      comments?: boolean | string;
      step?: (results: ParseResult<any>, parser: any) => void;
      complete?: (results: ParseResult<any>, file: File) => void;
      error?: (error: any, file: File) => void;
      download?: boolean;
      downloadRequestHeaders?: { [key: string]: string };
      skipEmptyLines?: boolean | 'greedy';
      chunk?: (results: ParseResult<any>, parser: any) => void;
      fastMode?: boolean;
      beforeFirstChunk?: (chunk: string) => string | void;
      withCredentials?: boolean;
      transform?: (value: string, field: string | number) => any;
      delimitersToGuess?: string[];
    }
  
    export interface UnparseConfig {
      quotes?: boolean | boolean[];
      quoteChar?: string;
      escapeChar?: string;
      delimiter?: string;
      header?: boolean;
      newline?: string;
      skipEmptyLines?: boolean | 'greedy';
      columns?: string[];
    }
  
    export function parse(input: string | File | NodeJS.ReadableStream, config?: ParseConfig): ParseResult<any>;
    export function unparse(data: any[][], config?: UnparseConfig): string;
  
    const Papa: {
      parse: typeof parse;
      unparse: typeof unparse;
    };
  
    export default Papa;
  }