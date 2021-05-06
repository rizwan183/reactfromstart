import React ,{useState,useEffect} from 'react'
import './form.css'
function Form(){
    const [email ,setEmail]=useState('');
    const [password ,setPassword]=useState('');
    const [repassword ,setRepassword]=useState('');
    const [check ,setCheck]=useState('');
    const printValues = e => {
        e.preventDefault();
        console.log(email, password,repassword,check);
      };
    useEffect (()=>{
        fetch('https://api.publicapis.org/entries').then(response=>response.json()
        ).then(responseData=>{
            console.log(responseData)
        }

        )
    })
   
    return(
        <div>
            <form onSubmit={printValues}>
                <div class="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" 
                    value={email} name="email" id="email" 
                    onChange={
                        event=>{
                            setEmail(event.target.value)
                        }
                    }
                    required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" 
                    value={password} name="psw" id="psw" 
                    onChange={
                        event=>{
                            setPassword(event.target.value)
                        }
                    }
                    required/>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password"
                    value={repassword} name="psw-repeat" id="psw-repeat" 
                    onChange={
                        event=>{
                            setRepassword(event.target.value)
                        }
                    }
                    required/>
                    <hr/>
                    <label class="container">One
                        <input type="checkbox" checked={check} 
                         onChange={event=>{
                            setCheck(event.target.checked)
                         }}
                        />
                        <span class="checkmark"></span>
                    </label>
                    <hr/>
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" class="registerbtn">Register</button>
                </div>
                <div class="container signin">
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </div>
            </form>
        </div>
    )
}

export default Form;