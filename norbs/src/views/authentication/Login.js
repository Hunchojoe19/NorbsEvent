import Input from "../../components/reusables/Input"
import { FaExpeditedssl, FaEnvelope } from 'react-icons/fa';
import "./authentication.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


// const handleClick = (e) => {
//   console.log(e)
// }
const Login = () => {
  const [userInput, setUserInput] = useState({})
  const [fieldError, setFieldError] = useState(
    {
      email: {message: "", error: false},
      password: {message: "", error: false}
    }
  )

  const handleChange = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value})
    checkIfFieldIsEmpty(e)
  }

  const handleClick = () => {
    axios.get(`http://localhost:5000/accounts/?email=${userInput["email"]}`).
    then((result) => {
      result.data[0].password === userInput["password"] && navigate ("/dashboard")
    }).
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
              
              <a onClick={() => navigate('/register')}>
                  Don't Have An Account?
                  <span style={{
                    color: 'var(--primary_green)',
                    marginLeft: '4px'
                  }}>
                      sign up
                  </span>
              </a>
          <div className="welcome-text">
            <h1>Welcome To Norbs</h1>
            <p>We are an event management platform,
              aimed at helping you facilitate and run a smooth event</p>
          </div>
            <div className="input-button-fields">
            <Input text="text" handleChange={handleChange} icon={<FaEnvelope/>} label="email" fieldError={fieldError}/>
            <Input text="password" handleChange={handleChange} icon={<FaExpeditedssl/>} label="password" type= "password" fieldError={fieldError}/>
              <button className="authentication-button" onClick={handleClick}>Get Into Norbs</button>
            </div>
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

export default Login