import React from 'react'
// import Footer from '../Footer'
import image1 from '../images/ad-banner-1.jpg'
import image2 from '../images/ad-banner-2.jpg'
import image3 from '../images/ad-banner-3.jpg'
import image4 from '../images/images.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container } from 'react-bootstrap';
import Carasuel from '../Carasuel'
function About() {
  return (
    <div>
      <Carasuel></Carasuel>
      <Container style={{marginTop:'5%'}}>


        
      <div className="row">
    <div className="col-xl-4 col-lg-6 col-12">
      <div
        className="p-8 mb-3 rounded bg-cover bg-no-repeat"
        style={{
              background: `url(${image1})`,
                  padding:'8%',
                  borderRadius:'5%'
        }}
      >
        <div>
          <h3 className="mb-0 fw-bold">
            10% cashback on <br /> personal care
          </h3>
          <div className="mt-4 mb-5 text-lg">
            <p className="mb-0">Max cashback: $12</p>
            <span>
              Code: <span className="fw-bold text-dark">CARE12</span>
            </span>
          </div>
          <a
            role="button"
            tabIndex={0}
            href="#"
            className="btn btn-dark"
            aria-label="Shop now for personal care deals"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
    
    <div className="col-xl-4 col-lg-6 col-12">
      <div
        className="p-8 mb-3 rounded bg-cover bg-no-repeat"
        style={{
          background: `url(${image2})`,
          padding:'6.5%',
          borderRadius:'5%',
        }}
      >
        <div>
          <h3 className="mb-0 fw-bold">
            Say yes to <br /> season’s fresh
          </h3>
          <div className="mt-4 mb-5 text-lg">
            <p className="fs-5 mb-0">
              Refresh your day <br /> the fruity way
            </p>
          </div>
          <a
            role="button"
            tabIndex={0}
            href="#"
            className="btn btn-dark"
            aria-label="Shop now for fresh seasonal products"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
    
    <div className="col-xl-4 col-lg-6 col-12">
      <div
        className="p-8 mb-3 rounded bg-cover bg-no-repeat"
        style={{
          background: `url(${image3})`,
          padding:'6.5%',
          borderRadius:'5%',
        }}
      >
        <div>
          <h3 className="mb-0 fw-bold">
            When in doubt, <br /> eat ice cream
          </h3>
          <div className="mt-4 mb-5 text-lg">
            <p className="fs-5 mb-0">
              Enjoy a scoop of <br /> summer today
            </p>
          </div>
          <a
            role="button"
            tabIndex={0}
            href="#"
            className="btn btn-dark"
            aria-label="Shop now for ice cream"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>

<br />
<div className="col-xl-4 col-lg-6 col-12">
      <div
        className="p-8 mb-3 rounded bg-cover "
        style={{
          background: `url(${image4})`,
          padding:'6.5%',
          borderRadius:'5%',
          backgroundSize:"cover",
         backgroundRepeat:"no-repeat"
        }}
      >
        <div>
          <h3 className="mb-0 fw-bold">
           Special cold rink, <br /> drink cold rink
          </h3>
          <div className="mt-4 mb-5 text-lg">
            <p className="fs-5 mb-0">
              Enjoy a drink of <br /> summer today
            </p>
          </div>
          <a
            role="button"
            tabIndex={0}
            href="#"
            className="btn btn-dark"
            aria-label="Shop now for ice cream"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>


      </Container>
 



    </div>
  )
}

export default About;
