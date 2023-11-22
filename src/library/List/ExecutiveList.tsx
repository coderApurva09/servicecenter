import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, TextareaAutosize, MenuItem, FormControl, Select, colors } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
function ExecutiveList({ItemList, HeaderArray,TextClick}) {

    return (
        <div>
            <TableContainer component={Card}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow sx={{ backgroundColor: "black",}}>
                            {HeaderArray.map((item, i) => (

                                <TableCell key={i} sx={{ textTransform: "capitalize",color: "white"}} align="center" > <b>{item.Header}</b></TableCell>


                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ItemList.map((item, i) => (
                            <TableRow key={i} >
{/* onClick={() => TextClick(item.Id)} */}
                                <>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" onClick={() => TextClick(item.Id)} >{item.Text1}</TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" > {item.Text2}</TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" > {item.Text3}</TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" > {item.Text4}</TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" > {item.Text5}</TableCell>

                                </>

                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default ExecutiveList