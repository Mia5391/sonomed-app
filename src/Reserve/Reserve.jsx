import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@rmwc/button';
import '@rmwc/grid/styles'
import { Grid, GridCell } from 'rmwc';
import './Reserve.css';
// import logo from '../logo.svg';
import moment from 'moment';
import ReactTimeslotCalendar from '../timeslots/js/react-timeslot-calendar.jsx';

const goToStep = (step, state) => {
    return {
        pathname: `/calendar/${step}`,
        state
    }
}

const stateGenerator = (changeState, currState) => {
    return Object.assign({}, currState, changeState);
}

const Reserve1 = (nextProps) => (
    <div>
        <p>Hello World 1</p>

        <Grid>
            <GridCell span={12}> <Link to={goToStep(2, stateGenerator({apptType: 15}, nextProps.location.state))}>15min appt</Link></GridCell>
            <GridCell span={12}> <Link to={goToStep(2, stateGenerator({apptType: 20}, nextProps.location.state))}>20min appt</Link></GridCell>
            {/* <GridCell span={12}> <Link to={goToStep(2, {apptType: 45})}>45min appt</Link></GridCell>
            <GridCell span={12}> <Link to={goToStep(2, {apptType: 45})}>45min appt</Link></GridCell> */}
        </Grid>

        <Link to='/'>
            <Button outlined >Back</Button>
        </Link>
    </div>

)

const timeslotProps = { format: 'h:mm', showFormat: 'h:mm A'}

const timeSlotGen = (slotSize, startTime, maxSlots) => {
    const startMoment = moment(startTime, timeslotProps.format);
    const timeslots = [...Array(maxSlots)].map((slot, i)=>{
        return [moment(startMoment).add(slotSize*i, 'minutes').format(timeslotProps.format), moment(startMoment).add(slotSize*(i+1), 'minutes').format(timeslotProps.format)];
    });
    return timeslots;
}


class Reserve2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.location.state;
    }

    render() {
        
        this.onSelectTimeslot = (allTimeslots, lastSelectedTimeslot) => {
            this.setState({selectedTimeslot: {
                startDate: lastSelectedTimeslot.startDate.format(),
                endDate: lastSelectedTimeslot.endDate.format()
            }});
        }

        return (
        <div>
            <p>Hello World 2</p>
            <p>{this.state.apptType}</p>

            <ReactTimeslotCalendar
                initialDate={moment().format()}
                timeslotProps = {timeslotProps}
                timeslots = {timeSlotGen(this.state.apptType, '12', 8*(60/this.state.apptType))}
                onSelectTimeslot = {this.onSelectTimeslot}
            />

            <Link to={goToStep(1, this.state)}>
                <Button outlined >Back</Button></Link>
            <Link to={goToStep(3, this.state)}>
                <Button raised>Next</Button></Link>
        </div>
        )
    }
}

// const Reserve2 = (nextProps) =>

//     <div>
//         <p>Hello World 2</p>
//         <p>{nextProps.location.state.apptType}</p>

//         <ReactTimeslotCalendar
//             initialDate={moment().format()}
//             timeslotProps = {timeslotProps}
//             timeslots = {timeSlotGen(nextProps.location.state.apptType, '12', 8*(60/nextProps.location.state.apptType))}
//             onSelectTimeslot = {onSelectTimeslot}
//         />

//         <Link to={goToStep(1, stateGenerator({}, nextProps.location.state))}>
//             <Button outlined >Back</Button></Link>
//         <Link to={goToStep(3, stateGenerator({}, nextProps.location.state))}>
//             <Button raised>Next</Button></Link>


//     </div>

const Reserve3 = (nextProps) =>
    <div>
        <p>Hello World 3</p>
        <p>{JSON.stringify(nextProps.location.state)}</p>
        <Link to={goToStep(2, nextProps.location.state)}>
            <Button outlined >Back</Button></Link>
        <Link to={goToStep(4, nextProps.location.state)}>
            <Button raised>Next</Button></Link>


    </div>

const Reserve4 = (nextProps) =>
    <div>
        <p>Hello World 4</p>
        <p>{JSON.stringify(nextProps.location.state)}</p>
        <Link to={goToStep(3, nextProps.location.state)}>
            <Button outlined >Back</Button></Link>
        <Link to={goToStep(5, nextProps.location.state)}>
            <Button raised>Next</Button></Link>


    </div>

const Reserve5 = (nextProps) =>
    <div>
        <p>Hello World 5</p>
        <p>{JSON.stringify(nextProps.location.state)}</p>
        <Link to={goToStep(4, nextProps.location.state)}>
            <Button outlined >Back</Button></Link>
        <Link to='/'><Button raised>Next</Button></Link>


    </div>



export {
    Reserve1,
    Reserve2,
    Reserve3,
    Reserve4,
    Reserve5
};