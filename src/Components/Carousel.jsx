
import "./Carousel.css";
import carouselimg from "../assets/Images/sampleCardCampaign.jpg";
import temp from "../assets/Images/temp.jpg";
export default function Carousel() {
  return (
    <div className=" col-md-7  m-0 p-0 ">
      <div id="carouselExample" className="carousel slide"  data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={carouselimg} className="d-block w-100  " alt="..." />
          </div>
          <div className="carousel-item ">
            <img src={temp} className="d-block w-100 " alt="..." />
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
      <div className="temptext p-5  ">
        Some text about the Campaign.Some text about the Campaign.Some text
        about the Campaign.Some text about the Campaign.Some text about the
        Campaign.Some text about the Campaign.
      </div>
    </div>
  );
}
