import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pedido from './containers/Pedido/index';
import Home from './containers/Home/index';

function Rota() {

    return (

        <Router>
            <Routes>
                <Route  path="/" element={< Home />} />
                <Route  path="/pedido" element={< Pedido />} />
            </Routes>
        </Router>

    )
}

export default Rota;