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
                        {props.register ? (<>
                            <p>Email: </p>
                            <input name="email" type="email"
                                value={props.formData.email} onChange={props.handleChange}
                            />

                            <p>Password: </p>
                            <input name="password" type="password"
                                value={props.formData.password} onChange={props.handleChange}
                            />
                        </>)
                            : ""
                        }
                        <p>Name: </p>
                        <input name="name" type="text"
                            value={props.formData.name} onChange={props.handleChange}
                        />

                        <p>Location: </p>
                        <input name="location" type="text"
                            value={props.formData.location} onChange={props.handleChange}
                        />

                    </div>
                    <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">{props.register ? "Register" : "Submit Edit"}</button>
                </form>
                
            </div>

        </div>
    )
}
