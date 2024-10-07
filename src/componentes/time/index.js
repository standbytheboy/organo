import Colaborador from '../colaborador'
import './time.css'

const Time = ({corPrimaria, corSecundaria, nome, colaboradores}) => {

    const css = {backgroundColor: corSecundaria}
    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
            <div className='colaboradores'>
            {colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time