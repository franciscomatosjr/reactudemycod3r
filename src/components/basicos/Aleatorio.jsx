import React from 'react'

export default function Aleatorio(props) {
    const valorMinimo = props.valorminimo;
    const valorMaximo = props.valormaximo;
    const valorAleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo;
    return (
        <div>
            <h2>O valor mínimo é {valorMinimo} </h2>
            <h2>O valor máximo é {valorMaximo} </h2>
            <h2>O valor aleatório é {valorAleatorio} </h2>
        </div>
    )
};