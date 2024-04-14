import '../stylesheets/output.css'
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    try{
      const response = await axios.post('http://localhost:3000/login',{
        username,
        password
      })
      console.log(response);
    } catch (error){
      console.log(error);
    }
  }

  return(
    <div className="flex flex-col justify-center items-center">
      <h3>Review Topik Skripsi</h3>
      <form action="/login" method="post" className='space-y-8' onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}/><br/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/><br/>
        <input type="submit" value="Sign in"/>
      </form>
    </div>
  )
}

export default Form;