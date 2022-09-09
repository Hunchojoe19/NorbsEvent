import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateEventDetails from '../../../../components/dashboard/events/CreateEventDetails';
import Preview from './Preview';
import './createEvents.css';


const CreateEvents = () => {
    const[eventDetails, setEventDetails] = useState({});
    const navigate = useNavigate();
    
  return (
   <>
    <div className='createEventContainer'>

        <div className='createEventSteps'>
        <a onClick={() => navigate("/dashboard")} style={{ cursor: 'pointer', color: 'var(--primary_green)'}}>Events</a>
            <h5>Create Events Seamlessly</h5>
            <CreateEventDetails setEventDetails={setEventDetails} eventDetails={eventDetails}/>
        </div>
        <Preview eventDetails={eventDetails} />
    </div>
   </>
  )
}

export default CreateEvents