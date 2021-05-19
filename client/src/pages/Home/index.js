import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

export default function Home() {

    return (
        <div>
            <Link to="/services">Serviços</Link>    
        </div>

    )
}