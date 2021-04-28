import * as React from 'react';
import { DataGrid, GridColDef, GridSortCellParams, GridCellParams } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';



function getFullName(params: GridSortCellParams) {
  return `${params.getValue('firstName') || ''} ${
    params.getValue('lastName') || ''
  }`;
}

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 500,
    valueGetter: getFullName,
    sortComparator: (v1, v2, cellParams1, cellParams2) =>
      getFullName(cellParams1).localeCompare(getFullName(cellParams2)),
  },
  { field: 'Check', headerName: 'Check Data', width: 150,
  renderCell: (params: GridCellParams) => (
    <strong>
      {(params.value as GridColDef)}
      <Button
      variant="contained"
      color="primary"
      size="small"
      style={{ marginLeft: 0 }}
      target="_self"
      href="https://reactjs.org/"
      >
       Credentials
      </Button>
    </strong>
  ),
  }
];

const rows = [
  { id: 1, lastName: 'Rossi', firstName: 'Mario' },
  { id: 2, lastName: 'Avano ', firstName: 'Federico' },
  { id: 3, lastName: 'Pippo', firstName: 'Valore' },
  { id: 4, lastName: 'Moog', firstName: 'Robert' },
  { id: 5, lastName: 'Eastwood', firstName: 'Clint' },
];

export default function ValueGetterGrid() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}