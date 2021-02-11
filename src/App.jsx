import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className="App">

        <h1>Fundamentos React (Arrow)</h1>
        <div className="Cards">
            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Silva"> 
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />

                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio valorminimo={1} valormaximo={60} />
            </Card>
            <Card titulo="#03 - Framento" color="#E94C6F">
                <Fragmento />
            </Card>       
            <Card titulo="#02 - ComParametro" color="#E8B71A"> 
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>       
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>                   
        </div>
    </div>
);