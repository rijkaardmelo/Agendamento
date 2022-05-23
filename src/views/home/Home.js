import { useState } from 'react';

import Transparencia from './../../components/transparencia/Transparencia'
import Login from '../../components/login/Login';
import CadastroCPF from '../../components/cadastro/CadastroCPF';
import CadastroEmail from '../../components/cadastro/CadastroEmail';

import './Home.css'

function Home() {
    const [screen, setScreen] = useState('login')

    const ShowScreens = () => {
        if (screen === 'login') {
            return <Login event={showCadastroCPF} />
        } else if (screen === 'cadastrocpf') {
            return <CadastroCPF login={showLogin} email={showCadastroEmail} />
        }else if (screen === 'cadastroemail') {
            return <CadastroEmail login={showLogin} />
        }else{
            return <h1>Erro</h1>
        }
    }

    const showLogin = () => {
        setScreen('login')
    }

    const showCadastroCPF = () => {
        setScreen('cadastrocpf')
    }

    const showCadastroEmail = () => {
        setScreen('cadastroemail')
    }

    return (
        <div id="Home">
            <div id="homeTransparencia">
                <Transparencia />
            </div>
            <div id="homePrincipal">
                <ShowScreens />
            </div>
        </div>
    );
}

export default Home;