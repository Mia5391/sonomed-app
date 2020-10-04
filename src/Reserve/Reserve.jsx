import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@rmwc/button';
import '@rmwc/grid/styles'
import { Grid, GridCell } from 'rmwc';
import './Reserve.css';
// import logo from '../logo.svg';

const Reserve1 = () => (
    <div>
        <p>Hello World 1</p>
        <Link to='/calendar/2'>
            <Grid>
                <GridCell span={12}> 15min appt</GridCell>
                <GridCell span={12}> 20min appt</GridCell>
                <GridCell span={12}> 45min appt</GridCell>
                <GridCell span={12}> 45min appt</GridCell>
            </Grid>
        </Link>
        <Link to='/'>
            <Button outlined >Back</Button>
        </Link>



    </div>

)


const Reserve2 = () =>

    <div>
        <p>Hello World 2</p>
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