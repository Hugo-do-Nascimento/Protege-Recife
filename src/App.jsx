import './App.css';
import {BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { useEffect } from 'react';

//pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

//hook
import useAuthentication from './hook/useAuthentication';

import BuscarLocais from './pages/BuscarLocais/BuscarLocais';
import Doacao from './pages/Doacao/Doacao';
import ContatosDeEmergencia from './pages/ContatosDeEmergencia/ContatosDeEmergencia';
import AcompanharAlerta from './pages/AcompanharAlerta/AcompanharAlerta';
import NotFound from './pages/NotFound/NotFound';
import CardPedidoZap from './pages/CardPedidoZap/CardPedidoZap';

function App() {

  const { usuario } = useAuthentication();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buscar-locais' element={<BuscarLocais />} />
          <Route path='/doacoes' element={<Doacao />} />
          <Route path='/contatos' element={<ContatosDeEmergencia />} />
          <Route path='/acompanhar-alerta' element={<AcompanharAlerta />} />
          <Route path='/detalhes/:id' element={<CardPedidoZap />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;