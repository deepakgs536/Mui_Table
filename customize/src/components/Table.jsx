// MyTable.jsx
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TablePagination, Box } from '@mui/material';
import React, { useState } from 'react';
import Styles from './Styles'
import Profile from './Content.jsx/Profile';
import Signals from './Content.jsx/Signals';
import OverallPerformance from './Content.jsx/OverallPerformance';
import ReportingTo from './Content.jsx/Reportingto';
import Status from './Content.jsx/Status';
import Designation from './Content.jsx/Designation';
import Department from './Content.jsx/Department';
import Role from './Content.jsx/Role';
import Email from './Content.jsx/Email';
import Experience from './Content.jsx/Experience';
import Active from './Active';

function MyTable({data}) {
  const headValue = [
    'Name','Designation', 'Department', 'Signals', 'Overall performance', 'Reporting to' , 'Role' , 'Email' , 'Experience', 'Status'
  ]

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };



  return (
    <Paper>
      <Box sx={{display:'flex' , flexDirection:'row'}}>
        <Box sx={{overflow:'auto' , width:'83vw' , height:'600px' , scrollbarWidth:'none' , scrollBehavior:'smooth'}}>
        <Table disableBorder sx={{ whiteSpace: 'nowrap' }}>
        <TableHead>
          <TableRow >
            {headValue.map((value) => (
              <TableCell  sx={{...Styles.HeaderStyle , width:'100%'}} key={value} >{value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id} sx={{borderBottom:'none'}}>
              <TableCell sx={Styles.BodyStyle}> 
                <Profile name = {row.Name}/> 
              </TableCell>
              <TableCell sx={{...Styles.BodyStyle , width:'150px'}}> 
                <Designation designation = {row.Designation} />
              </TableCell>
              <TableCell sx={Styles.BodyStyle}> 
                <Department department = {row.Department} /> 
              </TableCell>
              <TableCell sx={Styles.BodyStyle}> 
                <Signals /> 
              </TableCell>
              <TableCell sx={Styles.PerformanceStyle}> 
                <OverallPerformance/> 
              </TableCell>
              <TableCell sx={Styles.BodyStyle}> 
                <ReportingTo name = {row.Reportingto.name} more = {row.Reportingto.more} />
              </TableCell>
              <TableCell sx={Styles.BodyStyle}> 
                <Role role={row.Role} /> 
              </TableCell>
              <TableCell sx={Styles.BodyStyle}> 
                <Email email = {row.Email} /> 
              </TableCell>
              <TableCell sx={Styles.BodyStyle}> 
                <Experience years = {row.Experience.years} months = {row.Experience.months} /> 
              </TableCell>
              <TableCell sx={Styles.BodyStyle}> 
                <Status status = {row.Status} /> 
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Box>
        <Active/>
      </Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default MyTable;
