import '../stylesheets/output.css'
import Button from '../components/Button.jsx';


const Login = () =>{
  return (
    <>
      <Button path='/' label='Beranda' />
      <Button path='/about' label='Tentang Kita' />
      <Button path='/contact' label='Hubungi Kami' />
      <p>HALAMAN LOGIN</p>
    </>
  )
}

export default Login;