import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import AppBar from '@mui/material/AppBar';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import pt from "date-fns/locale/pt";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './Agendamento.css'

export default function Agendamento() {

    registerLocale("pt", pt);

    const navigate = useNavigate()
    const location = useLocation()
    const [dateAgendamento, setDateAgendamento] = useState(new Date());
    const [styleAgendamentoMeus, setStyleAgendamentoMeus] = useState("agendamentoMeusSelect");
    const [styleAgendamentoAgendar, setStyleAgendamentoAgendar] = useState("agendamentoAgendar");
    const [status, setStatus] = useState(true);
    const [usuario, setUsuario] = useState(null);
    const [openDialog, setOpenDialog] = useState(true);

    const [anchorEl, setAnchorEl] = useState(null);
    const openLogin = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [campanhas, setCampanhas] = useState({
        id: '',
        nome: '',
        tipos_exame: []
    });

    const [grupos, setGrupos] = useState({
        id: '',
        nome: '',
        idade_minima: ''
    });

    const [exames, setExame] = useState({
        id: '',
        nome: ''
    });

    useEffect(() => {
        axios
            .get('http://0.0.0.0:3004/users')
            .then((response) => {
                setUsuario(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://0.0.0.0:3004/campanhas")
            .then(({ data }) => {
                setCampanhas(data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://0.0.0.0:3004/grupos-atendimentos")
            .then(({ data }) => {
                setGrupos(data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://0.0.0.0:3004/tipos_exame")
            .then(({ data }) => {
                setExame(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const changeAgendamentoMeus = () => {
        setStyleAgendamentoMeus("agendamentoMeusSelect");
        setStyleAgendamentoAgendar("agendamentoAgendar");
        setStatus(true)
    }

    const changeAgendamentoAgendar = () => {
        setStyleAgendamentoMeus("agendamentoMeus");
        setStyleAgendamentoAgendar("agendamentoAgendarSelect");
        setStatus(false)
    }

    const Agendar = () => {
        return (
            <div id='agendamentoPainel'>
                <label>Agendar</label>
                <form id="agendamentoForm" onSubmit={''}>
                    <label id='agendLCampanha'>Campanha:</label>
                    <FormControl id='agendFCCampanha' sx={{ width: 200 }} size="small">
                        <Select value={campanhas.id}>
                            {campanhas.map(campanha => <MenuItem value={campanha.id}>{campanha.nome}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <label id='agendLMunicipio'>Município:</label>
                    <FormControl id='agendFCMunicipio' sx={{ width: 200 }} size="small">
                        <Select defaultValue="">
                            <MenuItem value="Natal">Natal</MenuItem>
                            <MenuItem value="Parnamirim" >Parnamirim</MenuItem>
                            <MenuItem value="São Gonçalo" >São Gonçalo</MenuItem>
                            <MenuItem value="Acari" >Acari</MenuItem>
                            <MenuItem value="Caicó" >Caicó</MenuItem>
                        </Select>
                    </FormControl>

                    <label id='agendLGrupo'>Grupos de Atendimentos:</label>
                    <FormControl id='agendFCGrupo' sx={{ width: 200 }} size="small">
                        <Select key={grupos.id}>
                            {grupos.map(grupo => <MenuItem value={grupo.id}>{grupo.nome}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <label id='agendLExame'>Tipo de Exame:</label>
                    <FormControl id='agendFCExame' sx={{ width: 200 }} size="small">
                        <Select value={exames.id} >
                            {exames.map(exame => <MenuItem value={exame.id}>{exame.nome}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <label id='agendLData'>Data:</label>
                    <DatePicker
                        id='AgendData'
                        onChange={(e) => setDateAgendamento(e)}
                        locale="pt"
                        selected={dateAgendamento}
                        dateFormat="dd/MM/yyyy"
                    />

                    <Button id='agendamentoProcurar' variant="contained" type="submit">Procurar</Button>

                </form>
            </div>
        )
    }

    const MeusAgendamentos = () => {
        return (
            <label id='meusAgendamentos'>Meus Agendamentos</label>
        )
    }

    const chageLogout = () => {
        localStorage.removeItem("user");
        navigate('/')
    }

    return (
        <div id="Agendamento">
            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>
                        Aceitar
                    </Button>
                </DialogActions>
            </Dialog>
            <AppBar id='agendamentoNav' >
                <Button id='agendamentoOnline'>
                    <CalendarTodayOutlinedIcon sx={{ fontSize: 30 }} />
                    <label>Agendamento online</label>
                </Button>
                <Button id={styleAgendamentoMeus} onClick={changeAgendamentoMeus}   >
                    <FolderOpenOutlinedIcon sx={{ fontSize: 28 }} />
                    <label>Meus agendamentos</label>
                </Button>
                <Button id={styleAgendamentoAgendar} onClick={changeAgendamentoAgendar}>
                    <EditIcon sx={{ fontSize: 24 }} />
                    <label>Agendar</label>
                </Button>
                <Avatar id='agendamentoAvatar'>LC</Avatar>
                <Button
                    id='agendOpenLogin'
                    onClick={handleClick}
                    aria-haspopup="true"
                    aria-expanded={openLogin ? 'true' : undefined}
                >
                    login
                </Button>
                <Menu
                    id='openMenu'
                    open={openLogin}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    onClick={handleClose}
                >
                    <MenuItem onClick={''}>Perfil</MenuItem>
                    <MenuItem onClick={chageLogout}>Logout</MenuItem>
                </Menu>
            </AppBar>
            <div id='agendamentoPrincipal'>
                {status ? <MeusAgendamentos /> : <Agendar />}
            </div>
        </div>
    );
}