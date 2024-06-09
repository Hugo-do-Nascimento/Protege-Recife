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
          <Route path='/' element={usuario ? <Home /> : <Navigate to='/login' />} />
          <Route path='/cadastro' element={!usuario ? <Cadastro /> : <Navigate to="/" />} />
          <Route path='/login' element={!usuario ? <Login /> : <Navigate to="/" />} />
          <Route path='/buscar-locais' element={usuario ? <BuscarLocais /> : <Navigate to="/login" />} />
          <Route path='/doacoes' element={usuario ? <Doacao /> : <Navigate to="/login" />} />
          <Route path='/contatos' element={usuario ? <ContatosDeEmergencia /> : <Navigate to="/login" />} />
          <Route path='/acompanhar-alerta' element={usuario ? <AcompanharAlerta /> : <Navigate to="/login" />} />
          <Route path='/detalhes/:id' element={<CardPedidoZap />} />
          <Route path='/alimentacao' element={usuario ? <Alimentacao /> : <Navigate to="/login" />} />
          <Route path='/calcados' element={usuario ? <Calcados /> : <Navigate to="/login" />} />
          <Route path='/cama-mesa-banho' element={usuario ? <CamaMesaBanho /> : <Navigate to="/login" />} />
          <Route path='/higiene-limpeza' element={usuario ? <HigieneLimpeza /> : <Navigate to="/login" />} />
          <Route path='/material-escolar' element={usuario ? <MaterialEscolar /> : <Navigate to="/login" />} />
          <Route path='/vestuario' element={usuario ? <Vestuario /> : <Navigate to="/login" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;