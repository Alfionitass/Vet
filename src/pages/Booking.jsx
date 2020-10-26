import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom" ;
import BookingContent from "../components/BookingDetail/BookingContent";
import BookingResume from "../components/BookingDetail/BookingResume/BookingResume";

export default function Booking() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={BookingContent} />
                <Route path="/detail/resume" component={BookingResume} />
            </Switch>
        </Router>
    )
}
