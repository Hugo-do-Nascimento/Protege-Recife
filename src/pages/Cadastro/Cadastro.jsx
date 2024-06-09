import { useState, useEffect } from 'react';
import style from './Cadastro.module.css';
import Modal from '../../components/Modal';
import useAuthentication from '../../hook/useAuthentication';
import InputMask from 'react-input-mask';
import logo from '../../assets/logoL.svg';
import { Link } from 'react-router-dom';

const Cadastro = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [telefone, setTelefone] = useState("");
    const [qtdCriancas, setQtdCriancas] = useState("");
    const [qtdAdultos, setQtdAdultos] = useState("");
    const [error, setError] = useState("");

    const { handleCadastro, erro, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
            return;
        }

        try {
            await handleCadastro(email, password)
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if(erro) {
            setError(erro.message);
        }
    }, [erro]);
    
  return (
    <div className={style.background}>
        <div className={style.card}>
            <img className={style.logo} src={logo} width='200px'/>
            {/* <h2>Crie sua conta agora!</h2> */}
            <form  className={style.form} onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                    type='text'
                    name='displayNome'
                    required
                    placeholder='Insira seu nome'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>    
            <label>
                <span>Email:</span>
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
                <span>Senha:</span>
                <input 
                    type='password'
                    name='password'
                    required
                    placeholder='Insira sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                <span>Confirme sua Senha:</span>
                <input 
                    type='password'
                    name='confrimPassword'
                    required
                    placeholder='Insira sua senha'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <label>
                <span>Número de Telefone:</span>
                <InputMask
                    mask="(99) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                >
                    {() => <input 
                            type='tel' 
                            name='telefone' 
                            required 
                            placeholder='81 98181-8282' 
                            />}
                </InputMask>
            </label>
            <label>
                <span>Quantidade de Crianças:</span>
                <input 
                    type='number'
                    name='qtdCriancas'
                    required
                    placeholder='Insira a quantidade de crianças'
                    value={qtdCriancas}
                    onChange={(e) => setQtdCriancas(e.target.value)}
                />
            </label>
            <label>
                <span>Quantidade de Adultos:</span>
                <input 
                    type='number'
                    name='qtdAdultos'
                    required
                    placeholder='Insira a quantidade de Adultos'
                    value={qtdAdultos}
                    onChange={(e) => setQtdAdultos(e.target.value)}
                />
            </label>
            {!loading && <button className={style.btn}>Cadastrar</button>}
            {loading && <button className={style.btn} disabled>Aguarde...</button>}
            <Link className={style.link} to='/login'>voltar ao Login</Link>
            </form>
            {error && <Modal message={error} onClose={() => setError("")} />}
        </div>
    </div>
  )
}

export default Cadastro;