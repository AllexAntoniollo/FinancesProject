import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import '../style.css';

function historico({ data }){
    return(
        <>
            <div className='historicoSingle'>
                <p>{data.descricao}</p>
                <p>R$ {data.recebidos}</p>
                <p>R$ {data.gastos}</p>
                <button className='edit'><AiOutlineEdit size={15}/></button>
                <button className='delete'><AiOutlineDelete size={15}/></button>
            </div>
        </>
    )
}

export default historico