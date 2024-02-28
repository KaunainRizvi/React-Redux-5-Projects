import React from 'react';

const Carousel = () => {
  return (
    <div className="container-fluid">
      <div id="carouselExampleFade" className="carousel slide carousel-fade mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1200" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)", maxHeight: "500px", objectFit: "cover" }} />
            <div className="carousel-caption d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle" style={{ zIndex: 20 }}>
              <form className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ maxWidth: "300px", fontSize: "18px" }} />
                <button className="btn btn-outline-success text-white background-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1200" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)", maxHeight: "500px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1200" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)", maxHeight: "500px", objectFit: "cover" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
