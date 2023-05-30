import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time )
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborator.</h2>
                <TextField
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    value={nome}
                    aoAlterado={value => setNome(value)}/>
                <TextField
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    value={cargo}
                    aoAlterado={value => setCargo(value)}/>
                <TextField 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={value => setImagem(value)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    value={time}
                    aoAlterado={value => setTime(value)}/>
                <Button text='Create Card' />
            </form>
        </section>
    )
}

export default Formulario