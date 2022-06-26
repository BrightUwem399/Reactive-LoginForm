import React from "react";
import './LoginForm.css'

function LoginForm() {
    return (
        <div className="tc form-card">
            <form className="bg-washed-blue dib br3 pa3 ma2 bw2 shadow-4 sigh">
                <div className="mb-4 mt-4">
                    <input placeholder="Username" type="text" className="input" required=""></input>
                </div>
                <div className="mb-4 mt-4">
                    <input placeholder="Password" type="text" className="input" required=""></input>
                </div>
                <div className="mb-4 mt-4">
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;