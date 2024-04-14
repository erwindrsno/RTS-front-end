import '../stylesheets/output.css'
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    try{
      const response = await axios.post('http://localhost:3000/login',{
        username,
        password
      })
      // console.log(response.status);
      // console.log(response.data.message);
      alert(response.data.message);
    } catch (error){
      event.target.reset();
      // console.log(error.response.status);
      setMessage("Sign in failed!");
    }
  }

  return(
    <div className="flex flex-col justify-center items-center border-2 rounded-md p-8 space-y-8">
      <h3>Review Topik Skripsi</h3>
      <form action="/login" method="post" className='flex flex-col space-y-8' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Sign in" className='bg-sky-500'/>
        {message && <p className="text-red-600 text-xs self-center">{message}</p>}
      </form>
    </div>
  )
}

export default Form;