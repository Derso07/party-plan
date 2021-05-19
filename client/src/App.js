import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header';
import Routes from './routes';

import './styles/global.css';

const App = () => (
    <Router>
        <div id="container-root">
            <Header />
            <main>
                <Routes/>
            </main>
        </div>
    </Router>
)

export default App;
