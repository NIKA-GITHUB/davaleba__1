const Greeting = ({ title, description, backgroundColor,fontColor }) => {
  return (
    <div className="row greeting-container" style={{backgroundColor: backgroundColor, color: fontColor}} >
      <h1 className="text-success">{title}</h1>
      <h4 className="text-muted">{description}</h4>
    </div>
  );
};

export default Greeting;
