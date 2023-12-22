import React from 'react'
import '../styles/home.css'
import MasonryImagesGalary from '../Component/image-gallery/MasonryImagesGalary'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import wording from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../Component/Featured-tours/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'


import Testimonial from '../Component/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return (
    <>

    <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={wording} alt="" />
            </div>

            <h1>Traveling opens the door for creating <span className="highlight">memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At in ducimus ex voluptate inventore
               odio soluta, quia a neque blanditiis exercitationem dolores nesciunt perspiciatis beatae, nostrum facere dolor nam eum?</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col> 
        <SearchBar/>
      </Row>
    </Container>
    </section>

    {/* Service section */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className='services_title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* Featured tour section start */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
          <Subtitle subtitle={"Explore"} />
          <h2 className='featured__tour-title'>Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>


    {/* Experience section */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}/>
              
              <h2>With our all experience <br /> we Will serve you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                <br />Laborum quam consectetur omnis amet praesentium
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15+</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
             <div className="experience__img">
              <img src={experienceImg} alt="" />
             </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Gallery section */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={"Gallery"}/>
          <h2 className='gallery__title'>Visit our customers tour gallery</h2>
          </Col> 
          <Col lg="12">
            <MasonryImagesGalary/>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Testomonial section */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Fans Love"}/>
            <h2 className="testimonial_title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonial/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Home