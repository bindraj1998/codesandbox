function Slide({el}) {
  return (
    <div className="slide-container" data-testid="slide">
     
      <h3 data-testid="title">{el.title}</h3>
      <p data-testid="description">{el.description}</p>
    </div>
  );
}

export default Slide;
