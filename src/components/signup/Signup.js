import React, { useState } from 'react'
import styles from './signup.module.css'
import InputControl from '../inputControl/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../../firebase'
import { async } from '@firebase/util'

export default function Signup() {

    const navigate = useNavigate(); 

    const [values, setValues] = useState({
        name: "", 
        email: "", 
        pass: "",
    }); 

    const [errorMsg, setErrorMsg] = useState(""); 
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false); 

    const handleSubmission =() => {

        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields"); 
            return; 
        }
        setErrorMsg(""); 
        // console.log(values);

        setSubmitButtonDisable(true);

        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async(res)=> {
                setSubmitButtonDisable(false); 
                const user = res.user; 
                await updateProfile(user, {
                    displayName: values.name, 
                })
                navigate("/")
                console.log(user);
        }); 
        // .catch((err) => {
        //     setSubmitButtonDisabled(false);
        //     setErrorMsg(err.message);
        //   });
    }

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Sign Up</h1>

            <InputControl label="Name" placeholder="Enter your name"
            onChange={(event)=> 
                setValues((prev)=> ({...prev, name: event.target.value}))
            }/>
            <InputControl label="Email" placeholder="Enter email"
            onChange={(event)=> 
                setValues((prev)=> ({...prev, email: event.target.value}))
            }/>
            <InputControl label="Password" placeholder="Enter Password"
            onChange={(event)=> 
                setValues((prev)=> ({...prev, pass: event.target.value}))
            }/>
            <InputControl label="Confirm Password" placeholder="Confirm Password"
            onChange={(event)=> 
                setValues((prev)=> ({...prev, pass: event.target.value}))
            }/>

            <div className={styles.footer}>

                <b className={styles.error}>{errorMsg}</b>

                <button onClick={handleSubmission} disabled={submitButtonDisable}>Sign Up</button>
                <p>
                    Already have an account? {" "}
                    <span>
                        <Link to='/login'>login</Link>
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}
