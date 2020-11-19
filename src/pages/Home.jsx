import React from 'react'
import Top from '../components/Home/Top';
import Service from '../components/Home/Service';
import Overview from '../components/Home/Overview';
import ClinicSec from '../components/Home/ClinicSection';

export default function Home() {
    return (
        <div>
            <Top/>
            <Service/>
            <Overview/>
            <ClinicSec/>
        </div>
    )
}