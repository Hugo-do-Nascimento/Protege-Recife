import { useState } from 'react';
import useAuthentication from '../../hook/useAuthentication';
import logo from '../../assets/logoL.svg';
import { Link } from 'react-router-dom';

import style from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { handleLogin } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleLogin(email,password);

        try {
            await handleLogin(email, password);
        } catch (error) {
            setError("Credenciais inválidas. Por favor, verifique seu email e senha.");
        }
    };

  return (
    <div className={style.background}>
        <div className={style.card}>
            <img className={style.logo} src={logo} width='200px'/>
            {/* <h2>Acesse sua conta!</h2> */}
            <form className={style.form} onSubmit={handleSubmit}>
            <label>
                <span>Email</span>
                <input 
                    type='email'
                    name='email'
                    required
                    placeholder='Insira seu email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>Senha</span>
                <input 
                    type='password'
                    name='password'
                    required
                    placeholder='Insira sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button className={style.btn}>Entrar</button>
            {error && <p className='error'>{error.message}</p>}
            <Link className={style.link} to='/cadastro'>Criar Conta</Link>
            </form>
        </div>
    </div>
  )
}

export default Login;