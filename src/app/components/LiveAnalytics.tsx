'use client'

import React, { useState, useMemo } from 'react';
import {
  Typography,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import FileUpload from './FileUpload';
import DataVisualization from './DataVisualization';
import DataTable from './DataTable';

const LiveAnalytics: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [visualizationType, setVisualizationType] = useState<'bar' | 'stackedBar'>('bar');
  const [xAxis, setXAxis] = useState<string>('');
  const [yAxis, setYAxis] = useState<string>('');
  const [stackBy, setStackBy] = useState<string>('');
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [filterColumn, setFilterColumn] = useState<string>('');

  const handleDataUpload = (newData: any[], newColumns: string[], append: boolean) => {
    if (append) {
      // Merge columns
      const mergedColumns = Array.from(new Set([...columns, ...newColumns]));
      
      // Merge data
      const mergedData = [...data, ...newData].map(row => {
        const newRow: any = {};
        mergedColumns.forEach(col => {
          newRow[col] = row[col] !== undefined ? row[col] : null;
        });
        return newRow;
      });

      setData(mergedData.slice(0, 500));
      setColumns(mergedColumns);
    } else {
      setData(newData.slice(0, 500));
      setColumns(newColumns);
      setXAxis('');
      setYAxis('');
      setStackBy('');
      setSortColumn('');
      setSortDirection('asc');
      setFilters({});
    }
  };

  const isNumeric = (value: any) => !isNaN(parseFloat(value)) && isFinite(value);

  const getMeasures = () => columns.filter(col => data.every(row => isNumeric(row[col])));
  const getDimensions = () => columns.filter(col => !getMeasures().includes(col));

  const sortedAndFilteredData = useMemo(() => {
    let processedData = [...data];
    
    // Apply all filters
    Object.entries(filters).forEach(([column, values]) => {
      if (values.length > 0) {
        processedData = processedData.filter(row => values.includes(row[column]?.toString() ?? ''));
      }
    });
    
    if (sortColumn) {
      processedData.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    
    return processedData;
  }, [data, sortColumn, sortDirection, filters]);

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleFilterColumnChange = (column: string) => {
    if (column && !filters[column]) {
      const uniqueValues = Array.from(new Set(data.map(row => row[column]?.toString() ?? ''))).filter(Boolean);
      setFilters(prev => ({ ...prev, [column]: uniqueValues }));
    }
  };

  const toggleFilterValue = (column: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [column]: prev[column].includes(value)
        ? prev[column].filter(v => v !== value)
        : [...prev[column], value]
    }));
  };

  return (
    <Paper elevation={3} className="p-6">
      <Typography variant="h4" component="h1" gutterBottom>
        Live Analytics
      </Typography>
      <FileUpload onDataUpload={handleDataUpload} existingColumns={columns} />
      {data.length > 0 && columns.length > 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="x-axis-label">X-Axis (Dimension)</InputLabel>
              <Select
                labelId="x-axis-label"
                value={xAxis}
                onChange={(e) => setXAxis(e.target.value)}
                label="X-Axis (Dimension)"
              >
                <MenuItem value="">Select X-Axis</MenuItem>
                {getDimensions().map((col) => (
                  <MenuItem key={col} value={col}>
                    {col}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="y-axis-label">Y-Axis (Measure)</InputLabel>
              <Select
                labelId="y-axis-label"
                value={yAxis}
                onChange={(e) => setYAxis(e.target.value)}
                label="Y-Axis (Measure)"
              >
                <MenuItem value="">Select Y-Axis</MenuItem>
                {getMeasures().map((col) => (
                  <MenuItem key={col} value={col}>
                    {col}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="visualization-type-label">Visualization Type</InputLabel>
              <Select
                labelId="visualization-type-label"
                value={visualizationType}
                onChange={(e) => setVisualizationType(e.target.value as 'bar' | 'stackedBar')}
                label="Visualization Type"
              >
                <MenuItem value="bar">Bar Chart</MenuItem>
                <MenuItem value="stackedBar">Stacked Bar Chart</MenuItem>
              </Select>
            </FormControl>
            {visualizationType === 'stackedBar' && (
              <FormControl fullWidth margin="normal">
                <InputLabel id="stack-by-label">Stack By (Dimension)</InputLabel>
                <Select
                  labelId="stack-by-label"
                  value={stackBy}
                  onChange={(e) => setStackBy(e.target.value)}
                  label="Stack By (Dimension)"
                >
                  <MenuItem value="">Select Stack-By</MenuItem>
                  {getDimensions()
                    .filter((col) => col !== xAxis)
                    .map((col) => (
                      <MenuItem key={col} value={col}>
                        {col}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
            <FormControl fullWidth margin="normal">
              <InputLabel id="filter-column-label">Filter (Dimension)</InputLabel>
              <Select
                labelId="filter-column-label"
                value={filterColumn}
                onChange={(e) => handleFilterColumnChange(e.target.value)}
                label="Filter (Dimension)"
              >
                <MenuItem value="">Select Filter Column</MenuItem>
                {getDimensions().map((col) => (
                  <MenuItem key={col} value={col}>
                    {col}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {Object.entries(filters).map(([column, values]) => (
              <FormControl key={column} fullWidth margin="normal">
                <Typography variant="subtitle1">{column} filters:</Typography>
                <div className="max-h-40 overflow-y-auto">
                  {values.map((value) => (
                    <FormControlLabel
                      key={value}
                      control={
                        <Checkbox
                          checked={filters[column].includes(value)}
                          onChange={() => toggleFilterValue(column, value)}
                        />
                      }
                      label={value}
                    />
                  ))}
                </div>
              </FormControl>
            ))}
          </Grid>
          {xAxis && yAxis && (
            <Grid item xs={12}>
              <DataVisualization
                data={sortedAndFilteredData}
                xAxis={xAxis}
                yAxis={yAxis}
                stackBy={visualizationType === 'stackedBar' ? stackBy : undefined}
                type={visualizationType}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <DataTable
              data={sortedAndFilteredData}
              columns={columns}
              onSort={handleSort}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
            />
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}
export default LiveAnalytics;