import { useState } from 'react';

import Transparencia from './../../components/transparencia/Transparencia'
import Login from '../../components/login/Login';
import CadastroCPF from '../../components/cadastro/CadastroCPF';
import CadastroEmail from '../../components/cadastro/CadastroEmail';
import CadastroUsuario from '../../components/cadastro/CadastroUsuario';

import './Home.css'
import Filtro from '../../components/filtro/Filtro';


function Home() {
    const [screen, setScreen] = useState('login')

    const ShowScreens = () => {
        if (screen === 'login') {
            return <Login cadastro={showCadastroCPF} />
        } else if (screen === 'cadastrocpf') {
            return <CadastroCPF login={showLogin} email={showCadastroEmail} />
        } else if (screen === 'cadastroemail') {
            return <CadastroEmail login={showLogin} usuario={showCadastroUsuario}/>
        } else if(screen === 'cadastrousuario'){
            return <CadastroUsuario login={showLogin}/>
        } else if(screen === 'filtro'){
            return <Filtro login={showLogin}/>
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

    const showCadastroUsuario = () => {
        setScreen('cadastrousuario')
    }

    const showFiltro = () => {
        setScreen('filtro')
    }

    return (
        <div id="Home">
            <div id="homeTransparencia">
                <Transparencia filtro={showFiltro}/>
            </div>
            <div id="homePrincipal">
                <ShowScreens />
            </div>
        </div>
    );
}

export default Home;