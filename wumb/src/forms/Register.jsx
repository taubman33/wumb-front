import React from 'react';


export default function Register (props) {
    return (
        <div>
            <div className="register-form-container">
                <form
                    className="register-form"
                    onSubmit={(e) =>
                    {
                        e.preventDefault()
                        props.handleSubmit()
                    }} >
                    <div>
                        <h1> Create a New Account</h1>
                        {props.register ? (<>
                            <p>Email: </p>
                            <input name="email" type="email"
                                // value={props.formData.email} 
                                value="" 
                                onChange={props.handleChange}
                            />

                            <p>Password: </p>
                            <input name="password" type="password"
                                value=""
                                onChange={props.handleChange}
                            />
                        </>)
                            : ""
                        }
                        <p>Name: </p>
                        <input name="name" type="text"
                            value=""
                            onChange={props.handleChange}
                        />

                        <p>Location: </p>
                        <input name="location" type="text"
                            // value={props.formData.location}
                            value="" 
                            onChange={props.handleChange}
                        />

                    </div>
                    <button className="button">{props.register ? "Register" : "Submit Edit"}</button>
                </form>
                
            </div>

        </div>
    )
}
