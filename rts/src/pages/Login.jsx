import '../stylesheets/output.css'
// import Button from '../components/Button.jsx';
import Header from '../components/Header.jsx';
import Form from '../components/Form.jsx';


const Login = () =>{
  return (
    <div className='flex flex-col h-screen relative'>
      <Header />
      <div className='flex grow items-center justify-center'>
        <Form />
      </div>
    </div>
  )
}

export default Login;