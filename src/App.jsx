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
import Calcados from './components/Calcados/Calcados';
import CamaMesaBanho from './components/CamaMesaBanho/CamaMesaBanho';
import HigieneLimpeza from './components/HigieneLimpeza/HigieneLimpeza';
import MaterialEscolar from './components/MaterialEscolar/MaterialEscolar';
import Vestuario from './components/Vestuario/Vestuario';
import Alimentacao from './components/Alimentacao/Alimentacao';

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
          <Route path='/alimentacao' element={<Alimentacao />} />
          <Route path='/calcados' element={<Calcados />} />
          <Route path='/cama-mesa-banho' element={<CamaMesaBanho />} />
          <Route path='/higiene-limpeza' element={<HigieneLimpeza />} />
          <Route path='/material-escolar' element={<MaterialEscolar />} />
          <Route path='/vestuario' element={<Vestuario />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;