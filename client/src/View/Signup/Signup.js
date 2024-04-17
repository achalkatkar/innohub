
import { useState } from 'react'
import'./Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubimt = (e) => {
       e.preventDefault()
       axios.post('http://localhost:3001/signup',{name, email, password})
       .then(result => console.log(result))
       .catch(err => console.log(err))
    }


  return (
    <>
    <div>
      <h1>Signup</h1>
      <div className="signup">
        <form className="form" onSubmit={handleSubimt}>
            <h1>Sign Up</h1>

            <label>Username</label>
            <input 
            type="text" 
            placeholder="Enter your username" 
            onChange={(e) => setName(e.target.value)}          
             />

             <br/> <br/>

            <label>email</label>
            <input 
            type="email" 
            placeholder="Enter your email" 
            onChange={(e) => setEmail(e.target.value)} 
            />

            <br/> <br/>

           <label>Password</label>
           <input 
           type='password'
           placeholder='Enter Password'
           onChange={(e) => setPassword(e.target.value)} >
           </input>

            <br/> <br/>

             <p><a href='#'>Forget password</a></p>
            </form>
            <button className='signup-btn'>Signup</button>
            <p>Don,t have an account?<a href='#'>Register</a></p>
            <Link to='/login'> <button className='sign-btn-s'>Login</button></Link>
        
      </div>

    </div>

  </>
  )
}

export default Signup
