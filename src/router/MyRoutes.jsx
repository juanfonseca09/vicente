import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Elsa } from '../components/Elsa';
import { Propuesta } from '../components/Propuesta';
import { Galeria } from '../components/Galeria';
import { Contacto } from '../components/Contacto';


export const MyRoutes = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Navigate to="/inicio"/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/elsa' element={<Elsa/>} />
            <Route path='/propuesta' element={<Propuesta/>} />
            <Route path='/galeria' element={<Galeria/>} />
            <Route path='/contacto' element={<Contacto/>} />
        </Routes>
    
  )
}
