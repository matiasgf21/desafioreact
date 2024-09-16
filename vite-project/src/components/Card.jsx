function Card({imagen, titulo, Precio,  lista}) {

  
  return (
    <div className="card" >
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text"><h3>Precio: ${Precio}</h3> </p>
      <p className="card-text">Ingredientes:</p>
      <ul>
      {lista.map((elemento, index) => {
        return(

          <li key={index}>{elemento}</li>
      )

      })}
      </ul>
      <a href="#" className="btn btn-primary">Ver más</a>
      <a href="#" className="btn btn-primary">Añadir al carro</a>
    </div>
  </div>
  )
}

export default Card