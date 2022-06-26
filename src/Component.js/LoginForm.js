import React, { useState } from "react";
import ReactDOM from "react-dom";
import './LoginForm.css'

function LoginForm() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "bright uwem",
            password: "password1"
        },
        {
            username: "precious uwem",
            password: "password2"
        }
    ];
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (

        <div className="tc form-card">
            <form onSubmit={handleSubmit} className="bg-washed-blue dib br3 pa3 ma2 bw2 shadow-4 sigh">
                <div className="mb-4 mt-4">
                    <input placeholder="Username" type="text" name="uname" className="input" required=""></input>
                    {renderErrorMessage("uname")}
                </div>
                <div className="mb-4 mt-4">
                    <input placeholder="Password" type="text" name="pass" className="input" required=""></input>
                    {renderErrorMessage("uname")}
                </div>
                <div className="mb-4 mt-4">
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    )
}

export default LoginForm;