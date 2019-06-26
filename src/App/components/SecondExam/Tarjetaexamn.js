import React from 'react'

const Tarjetaexam = ({diseño}) => {
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
}

export default Tarjetaexam;