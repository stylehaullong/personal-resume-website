import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material';

interface DataTableProps {
  data: any[];
  columns: string[];
  onSort: (column: string) => void;
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, onSort, sortColumn, sortDirection }) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col}
                sortDirection={sortColumn === col ? sortDirection : false}
              >
                <TableSortLabel
                  active={sortColumn === col}
                  direction={sortColumn === col ? sortDirection : 'asc'}
                  onClick={() => onSort(col)}
                >
                  {col}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={col}>{row[col] !== undefined ? row[col] : ''}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;