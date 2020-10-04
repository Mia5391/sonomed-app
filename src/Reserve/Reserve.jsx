import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@rmwc/button';
import '@rmwc/grid/styles'
import { Grid, GridCell } from 'rmwc';
import './Reserve.css';
// import logo from '../logo.svg';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';

const cal = (apptType) => {
    return {
        pathname: '/calendar/2',
        state: {
            apptType
        }
    }
}

const Reserve1 = () => (
    <div>
        <p>Hello World 1</p>

        <Grid>
            <GridCell span={12}> <Link to={cal(15)}>15min appt</Link></GridCell>
            <GridCell span={12}> <Link to={cal(20)}>20min appt</Link></GridCell>
            <GridCell span={12}> <Link to={cal(45)}>45min appt</Link></GridCell>
            <GridCell span={12}> <Link to={cal(45)}>45min appt</Link></GridCell>
        </Grid>

        <Link to='/'>
            <Button outlined >Back</Button>
        </Link>



    </div>

)

const timeslotProps = { format: 'h:mm A', showFormat: 'h:mm A'}

const timeSlotGen = (slotSize, startTime, maxSlots) => {
    const startMoment = moment(startTime, timeslotProps.format);
    const timeslots = [...Array(maxSlots)].map((slot, i)=>{
        console.log(slotSize*i);
        return [moment(startMoment).add(slotSize*i, 'minutes'), moment(startMoment).add(slotSize*(i+1), 'minutes')];
    });
    console.log(timeslots);
    return timeslots;
}

const Reserve2 = (nextProps) =>

    <div>
        <p>Hello World 2</p>
        <p>{nextProps.location.state.apptType}</p>

        <ReactTimeslotCalendar
            initialDate={moment().format()}
            timeslotProps = {timeslotProps}
            timeslots = {timeSlotGen(nextProps.location.state.apptType, '12:00 P', 8*(60/nextProps.location.state.apptType))}
        />

        <Link to='/calendar/1'>
            <Button outlined >Back</Button></Link>
        <Link to='/calendar/3'>
            <Button raised>Next</Button></Link>


    </div>

const Reserve3 = () =>
    <div>
        <p>Hello World 3</p>
        <Link to='/calendar/2'>
            <Button outlined >Back</Button></Link>
        <Link to='/calendar/4'><Button raised>Next</Button></Link>


    </div>

const Reserve4 = () =>
    <div>
        <p>Hello World 4</p>
        <Link to='/calendar/3'>
            <Button outlined >Back</Button></Link>
        <Link to='/calendar/5'><Button raised>Next</Button></Link>


    </div>

const Reserve5 = () =>
    <div>
        <p>Hello World 5</p>
        <Link to='/calendar/4'><Button outlined >Back</Button></Link>
        <Link to='/'><Button raised>Next</Button></Link>


    </div>



export {
    Reserve1,
    Reserve2,
    Reserve3,
    Reserve4,
    Reserve5
};