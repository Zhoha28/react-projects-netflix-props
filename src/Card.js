function Card(props) {
  return (
    <div className="card mt-1  text-white" style={{ width: "23rem" }}>
      <a href={props.link}>
        <img src={props.imgsrc} className="card-img-top" alt={props.name} />
      </a>
      <div class="card-body">
        <a
          href={props.link}
          className="card-title h5 mt-1 mb-3 d-block text-white"
        >
          {props.name}
        </a>
        <p className="card-text text-muted">{props.title}</p>
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-column">
            <a href={props.link}>
              <button className="btns"> Play Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
