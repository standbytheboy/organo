import './listaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value}>
                {props.itens.map(item => 
                {return <option key={item}>{item}</option>
            })} {/* com o map, para cada item, retorno uma option diferente */}
            </select>
        </div>
    )
}

export default ListaSuspensa