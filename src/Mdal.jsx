const Mdal = ({ heading, picture, name }) => {
  return (
    <div className="show">
      <h1>{heading}</h1>
      <img src={picture} alt="" />
      <p>{name}</p>
      <button>Play</button>
    </div>
  );
};

export default Mdal;
