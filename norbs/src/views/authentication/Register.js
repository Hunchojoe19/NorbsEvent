import Input from "../../components/reusables/Input"
import { FaExpeditedssl, FaEnvelope } from 'react-icons/fa';
import "./authentication.css"
import { useState } from "react"
import StepContainer from "../../components/authentication/register/StepContainer"
import { useNavigate } from "react-router-dom"
import axios from "axios";



// const handleClick = (e) => {
//   console.log(e)
// }
const Register = () => {
  const [userInput, setUserInput] = useState({})
  const [step, setStep] = useState(1)
  const [fieldError, setFieldError] = useState(
    {
      firstName: {message: "", error: false},
      lastName: {message: "", error: false},
      email: {message: "", error: false},     
      phone: {message: "", error: false},
      password: {message: "", error: false},
      confirm: {message: "", error: false}

    }
  )

  const handleChange = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value})
    checkIfFieldIsEmpty(e)
  }

  const handleClick = () => {
    console.log(userInput)
    axios.post("http://localhost:5000/accounts", userInput).
    then((data) => console.log(data)).
    catch((error) => console.log(error))
  }
  const navigate = useNavigate();

  const checkIfFieldIsEmpty = (e) => {
    switch(e.target.name){
      case "email":
        if(e.target.value === ""){
          setFieldError({...fieldError, [e.target.name]: {
            message: "Please enter a valid email",
          error: true
        }
      })
        } else{
          setFieldError({
            ...fieldError, [e.target.name]: {
              message: "",
              error: false
            }
          })
        }
        break;
      case "password":
      if(e.target.value === ""){
        setFieldError({...fieldError, [e.target.name]: {
          message: "Please enter a valid password",
        error: true
      }
    })
      } else{
        setFieldError({
          ...fieldError, [e.target.name]: {
            message: "",
            error: false
          }
        })
      }
        break;
      default:
        break;
    }
    if (e.target.value === '') return true
  }

  const checkIfItIsEmail = () => {
    
  }
  return (
    <div className="authenticationContainer">
        <div className="leftSide">
          <div className="leftSide-container">
              
              <a onClick={() => navigate('/login')}>
                  Already Have An Account?
                  <span style={{
                    color: 'var(--primary_green)',
                    marginLeft: '4px'
                  }}>
                      Log in
                  </span>
              </a>
          <div className="welcome-text">
            <h1>Welcome To Norbs</h1>
            <p>We are an event management platform,
              aimed at helping you facilitate and run a smooth event</p>
          </div>
            {step === 1 && <StepContainer step={1} headerTitle="Let's know you">
                <Input text="text" handleChange={handleChange} icon={<FaEnvelope/>} label="firstName" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={<FaEnvelope/>} label="lastName" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={<FaEnvelope/>} label="email" fieldError={fieldError}/>
            </StepContainer>}

            {step === 2 && <StepContainer step={2} headerTitle="Let's secure you">
                <Input text="text" handleChange={handleChange} icon={<FaEnvelope/>} label="phone" fieldError={fieldError}/>
                <Input text="password" handleChange={handleChange} icon={<FaExpeditedssl/>} label="password" type= "password" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={<FaExpeditedssl/>} label="confirm" fieldError={fieldError}/>
            </StepContainer>}

            {step === 1 && <button onClick={() => setStep(2)} style={{width: '65%'}} className="authentication-button">Next step</button>}

           {step === 2 &&
            <div style={{display: "flex", justifyContent: "space-between", width: "65%"}}>
            <button onClick={() => setStep(1)} style={{width: '40%'}} className="authentication-button-alternate">Go Back</button>
            <button style={{width: '40%'}} className="authentication-button" onClick={handleClick}>Register</button>
            </div>}
            <div className="social-media">
                <a>
                  <div className="social-media-icon"></div>
                </a>
            </div>
          </div>
      </div>
      <div className="rightSide">

      </div>
    </div>
  )
}

export default Register