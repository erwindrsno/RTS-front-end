import '../stylesheets/output.css'
import Description from '../text/Description.jsx'
import Button from '../components/Button.jsx'

const About = () =>{
  return (
    <>
      <Button path='/' label='Beranda' />
      <Button path='/about' label='Tentang Kita' />
      <Button path='/contact' label='Hubungi Kami' />
      <Description />
    </>
  )
}

export default About