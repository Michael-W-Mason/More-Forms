import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [matchError, setMatchError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(newUser.confirmPassword);
        if(newUser.password != newUser.confirmPassword){
            handleMatch(true);
        }
        else{
            handleMatch(false);
        }
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length <= 2){
            setFirstNameError("First name must be longer than 2 characters");
        }
        else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length <= 2){
            setLastNameError("Last name must be longer than 2 characters");
        }
        else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length <= 2){
            setEmailError("Email must be longer than 2 characters");
        }
        else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length <= 2){
            setPasswordError("Password must be longer than 8 characters");
        }
        else{
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleMatch = (bool) => {
        if(bool){
            setMatchError("Passwords Do Not Match");
        }
        else{
            setEmailError("");
        }
    }



    return (
        <div className="h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <form className="mt-8 space-y-6" onSubmit={ createUser }>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <input id="firstname" name="firstname" type="text" required className="appearance-none rounded-none relative block w-full px-3 my-1 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name" onBlur={handleFirstName} />
                    </div>
                    <h5>{ firstNameError }</h5>
                    <div>
                        <input id="lastname" name="lastname" type="text" required className="appearance-none rounded-none relative block w-full px-3 my-1 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" onBlur={handleLastName} />
                    </div>
                    <h5>{ lastNameError }</h5>
                    <div>
                        <input id="email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 my-1 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" onBlur={handleEmail}/>
                    </div>
                    <h5>{ emailError }</h5>
                    <div>
                        <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 my-1 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onBlur={handlePassword} />
                    </div>
                    <h5>{passwordError}</h5>
                    <h5>{matchError}</h5>
                    <div>
                        <input id="confirmpassword" name="confirmpassword" type="password" required className="appearance-none rounded-none relative block w-full px-3 my-1 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" onBlur={handleConfirmPassword} />
                    </div>
                </div>
                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};



export default UserForm;