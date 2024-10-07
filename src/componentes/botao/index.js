import './botao.css'

const Botao = (props) => {
    return (<button className='botao'>
        {props.texto} {/* essa forma de fazer funciona para quando o texto é o único elemento no button, mas caso haja um ícone, tenho que fazer da seguinte forma: {props.children} e na hora de chamar o Botao, devo colocar a tag de abertura e fechamento, tal como no html puro */}
    </button>)
}

export default Botao