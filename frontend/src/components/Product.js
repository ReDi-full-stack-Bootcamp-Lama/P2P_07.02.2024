function Product(props) {
    return (
      <div>
        <img src={props.img} alt={props.name}/>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <h4>{props.price}</h4>
        <h4>Production's year: {props.year}</h4>
      </div>
    );
}

export default Product