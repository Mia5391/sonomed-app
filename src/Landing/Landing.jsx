import React from 'react';
import { Typography } from '@rmwc/typography';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button } from 'rmwc';
import './Landing.css';
// import logo from '../logo.svg';

const Landing = () => (
    <div className="Landing">
        <header className="Landing-header">
            {/* <img src={logo} className="Landing-logo" alt="logo" /> */}
            <p>
                Te damos la bienvenida a Sonomed!
</p>
        </header>
        <Link to='/calendar/1'><Button raised> Reservar Hora </Button> </Link>

    </div>
    )




export default Landing;