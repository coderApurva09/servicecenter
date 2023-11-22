import { Card, Container, Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import SelectedCard from '../Card/SelectedCard';


const SelectedDateCalendar = ({ DefaultDate,itemList, clickDate, clickPrevNext}) => {
    const dispatch = useDispatch();
    const [startDate, setStartdate] = useState("");
    const [endDate, setEnddate] = useState("");
   
    

   
    const asSchoolId = localStorage.getItem('localSchoolId');
    const asAcademicYearId = sessionStorage.getItem('AcademicYearId');
    const asStandardDivision = (sessionStorage.getItem('StandardDivisionId'));
    const [errDates, setErrDates] = useState('')
    const [prevNext, setPrevNext] = useState(0)
    const [index, setIndex] = useState(0);

    return (
        <div>
            <Container>
                
                   
                    <Grid container spacing={1} alignItems={"center"}>
                        <Grid item xs={2} sx={{ textAlign: "center" }}>
                            <IconButton >
                                <Card><ArrowLeft onClick={() => clickPrevNext(-1)} /></Card>
                            </IconButton>
                        </Grid>
                        <Grid item xs={8}>
                            <SelectedCard ItemList={itemList} clickItem={clickDate} />
                        </Grid>
                        <Grid item xs={2} sx={{ textAlign: "center" }}>
                            <IconButton>
                                <Card><ArrowRight onClick={() => clickPrevNext(1)} /></Card                                                 >
                            </IconButton>
                        </Grid>
                    </Grid>
                
            </Container>
        </div>
    )
}

export default SelectedDateCalendar