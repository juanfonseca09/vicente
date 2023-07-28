import './App.css'
import { Contacto } from './components/Contacto'
import { Elsa } from './components/Elsa'
import { Galeria } from './components/Galeria'
import { Inicio } from './components/Inicio'
import { Propuesta } from './components/Propuesta'
import { HeaderNav } from './components/HeaderNav'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ScrollToTop from 'react-scroll-to-top'

function App() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="598098146159"
        accountName="Agrupación Purificación"
        statusMessage="Responderemos a la brevedad"
        avatar="./logowp.png"
        chatMessage="Hola, en que podemos ayudarte?"
        placeholder="Escribe tu mensaje..."
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      <ScrollToTop smooth color='rgb(146, 38, 51)' />
        <HeaderNav/>
        <Inicio/>
        <Elsa/>
        <Propuesta/>
        <Galeria/>
        <Contacto/>
      
    </>
  )
}

export default App
