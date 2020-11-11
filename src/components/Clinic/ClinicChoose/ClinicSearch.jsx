import React from "react";
import {useParams} from 'react-router-dom'

export default function ClinicSearch(){
    const { search } = useParams()
    
    return(
        <div>
            Clinic {search}
        </div>
    )
}