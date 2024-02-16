import Card from '../card'
import './time.css'

const Time = (props) => {    
    const backColor = {backgroundColor: props.corSecundaria}

    return (
        (props.colaboradores.length > 0) && <section className="time" style={backColor} > 
            <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map(colaborador => <Card corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time