import '../stylesheets/output.css'
import Button from '../components/Button'

const Contact = () =>{
  return (
    <>
      <Button path='/' label='Beranda' />
      <Button path='/about' label='Tentang Kita' />
      <Button path='/contact' label='Hubungi Kami' />
      <p>Contact Us!</p>
    </>
  )
}

export default Contact