import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import './formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault(); {/* essa função previne que a página seja recarregada ao clicar no botão "criar card", dando sentido ao REACT e à sua forma de utilização */}
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {/* esse obrigatório pede para que o usuário preencha o campo antes de submeter o formulário */}
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Time" itens = {props.nomeDosTimes} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao texto="Criar Card" /> {/* aqui eu abro e fecho a tag, tal como em html, caso queira colocar elementos (como ícones) */}
            </form>
        </section>
    )
}

export default Formulario