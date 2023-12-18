import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export const Forms = () => {
    const [dataTable, setDataTable] = useState(window?.dataArray ? window.dataArray : []);
    const [nome, setNome] = useState('');
    const [textoTarefa, setTextoTarefa] = useState('');

    const getValuesInput = () => {
        if (nome.trim() !== '' && textoTarefa.trim() !== '') {
            const listItems = {
                title: nome,
                content: textoTarefa,
            };
            return listItems;
        } else {
            console.log('estou caindo aqui no null')
            return null;
        }
    };

    const handleSubmit = () => {
        const values = getValuesInput();
        if (values) {
            setDataTable([...dataTable, values])
            window.dataArray = [...dataTable, values]
        }
    };

    return (
        <main>
            <section className='container'>
                <form className='form'>
                    <label className='formItens'>
                        <p className='textStyle'>Título</p>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className=' title formItem'
                            placeholder='Digite o título da tarefa'
                        />
                    </label>
                    <label className='formItens formItem'>
                        <p className='textStyle'>Descrição</p>
                        <textarea
                            value={textoTarefa}
                            onChange={(e) => setTextoTarefa(e.target.value)}
                            className=' description formItem'
                            placeholder='Digite a descrição da tarefa'
                        />
                    </label>
                    <Link to='/' className='formItens'>
                        <button 
                            onClick={() => handleSubmit()}
                            className='btn formItem' >
                            Salvar
                        </button>
                    </Link>
                </form>
            </section>
        </main>
    );
};

