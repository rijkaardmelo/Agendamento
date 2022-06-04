import { BrowserRouter, Routes, Route} from "react-router-dom";
import Agendamento from "./views/agendamento/Agendamento";

import Home from './views/home/Home'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="agendamento" element={<Agendamento />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}