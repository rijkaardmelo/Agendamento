import './Filtro.css'

export default function Filtro (props){
    return(
        <div id="Filtro">
            <button id='filtroVoltar' onClick={props.login}><span>Voltar</span></button>
            <button id='filtroFiltrar'><span>Filtrar</span></button>
            <span id='filtroTransparencia'>Transparência</span>
        </div>
    );
}