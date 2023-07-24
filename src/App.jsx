import './App.css'
import { Contacto } from './components/Contacto'
import { Elsa } from './components/Elsa'
import { Galeria } from './components/Galeria'
import { Inicio } from './components/Inicio'
import { Propuesta } from './components/Propuesta'
import { HeaderNav } from './components/HeaderNav'

function App() {
  return (
    <>
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
