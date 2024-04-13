import '../stylesheets/output.css'
// import Button from '../components/Button.jsx';
import Header from '../components/Header.jsx';


const Login = () =>{
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col justify-center items-center h-screen">
          <h3>Review Topik Skripsi</h3>
          <form action="/login" method="post">
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username"/><br/>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password"/><br/>
            <input type="submit" value="Sign in"/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;