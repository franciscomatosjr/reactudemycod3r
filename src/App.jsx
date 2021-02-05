import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className="App">

        <h1>Fundamentos React (Arrow)</h1>
        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio valorminimo={1} valormaximo={60} />
            </Card>
            <Card titulo="#03 - Framento">
                <Fragmento />
            </Card>       
            <Card titulo="#02 - ComParametro">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>       
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>                   
        </div>
    </div>
);