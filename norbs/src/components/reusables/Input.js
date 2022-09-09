import "./reusables.css"

const Input = ({ text, handleChange, icon, label, fieldError }) => {
  return (
    <div>
      <div className="input-container" style={{ color: "white"}}>
          <div className="label-container">
              <label>{label}</label>
          </div>
          <input
                type={text} 
                name={label} 
                onChange={handleChange} />
          {icon}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      </div>
      <div className="input-error-container">
        <p className={fieldError[label].error ? "fieldError" : "noFieldError"}>
            {fieldError[label].message}
        </p>  
      </div>
    </div>
  )
}

export default Input