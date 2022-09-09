import React from 'react'
import { useState } from 'react'
import Input from '../../reusables/Input';
import { BsFillSlashSquareFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { addItemToEvents } from '../../redux/reducers/actions/events';


const CreateEventDetails = (props) => {
    const dispatch = useDispatch();
    const { setEventDetails, eventDetails } = props
   
    const [fieldError, setFieldError] = useState(
        {
        title: {message: "", error: false},
        location: {message: "", error: false},
        description: {message: "", error: false},
    }
    );
    const handleChange = (e) => {
        setEventDetails({...eventDetails, [e.target.name]: e.target.value})
    }
    const handleClick = () => {
        dispatch(addItemToEvents(eventDetails))
    }
  return (
    <>
        <Input 
        text="title" 
        handleChange ={handleChange}
        icon={<BsFillSlashSquareFill defaultColor="white"/>} 
        label="title" 
        fieldError={fieldError}
        />

        <Input 
        text="description" 
        handleChange ={handleChange}
        icon={<BsFillSlashSquareFill defaultColor="white"/>} 
        label="description" 
        fieldError={fieldError}
        />

        <Input 
        text="location" 
        handleChange ={handleChange}
        icon={<BsFillSlashSquareFill defaultColor="white"/>} 
        label="location" 
        fieldError={fieldError}
        />

        <button onClick={handleClick}>
            Create Event
        </button>
    </>
  )
}

export default CreateEventDetails