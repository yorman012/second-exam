import React from 'react'
import React, { Component } from 'react'
import heroeService from '../../services/heroeService'

export class diseño extends Component {

    state = {
        diseño: []
    }

    //Componente tipo clase
    componentDidMount() {
        this.setState({
            heroes: heroeService.getHeroes()
        });
    }

    render() {
        const diseño = this.state.diseño;
        return (
            <React.Fragment>
                <h1>Diseño <small>de interiores</small></h1>
                <hr></hr>
                <div className="card-columns">
                    {/*Tarjeta de los héroes*/}

                    {diseño.map(diseño => {
                        return (
                            <div className="card animated fadeIn fast">
                            <img src={diseño.img} alt={diseño.nombre} className="card-img-top img-fluid" />
                            <div className="card-body">
                            <h4 className="card-title">{diseño.nombre}</h4>
                            <p className="card-text">{diseño.bio}}</p>
                            <button type="button" className="btn btn-outline-primary btn-block">
                                Ver más...
                            </button>
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
            </React.Fragment>
        )
    }
}

export default secondexam


/*const About = () => {
    
    return (
        <React.Fragment>
        
            <h1 className="animated fadeIn fast">Segundo examen (16%)</h1>
            <hr />
            <p className="animated fadeIn">
                <p><h2 className="animated fadeIn fast">Indicaciones:</h2></p>
                <div>
                    <ol>
                        <li>Descargar todo el proyecto de Heroes-React.</li>
                        <li>En este espacio, usted debe crear una página que tenga que ver con su proyecto de clase.</li>
                        <li>Entre los integrantes del proyecto no pueden existir paginas iguales, ni similares.</li>
                        <li>El proyecto completo debe adicionarse al GitHub.</li>
                        <li>En un documento ubicado en el Google Drive cada uno escribirá el enlace suministrado por GitHub para una posterior descarga.</li>
                        <li>El contenido de la página como mínimo debe tener algo similar a la página de "Heroes"; es decir, varias imagenes, enlaces, divisiones, lo que usted considere pertinente para ganarse un 5.0.</li>
                        <li>A las 12 m. del día de hoy debe estar el enlace en el Google Drive.</li>
                    </ol>
                </div>
            </p>

            

        </React.Fragment>
    )*/

//}






