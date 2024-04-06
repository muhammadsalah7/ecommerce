import Image1 from "./Images/image-1.jpg";
import Image2 from "./Images/image-2.png";
import Image3 from "./Images/image-3.png";
import "./Slider.css";
function Slider() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Image1} className="d-block w-100 height-650" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100 height-650" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100 height-650" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Slider;
