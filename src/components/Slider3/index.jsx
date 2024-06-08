import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./styles"
import PropTypes from "prop-types"
import Card from "../Card";


function Slider3({ info, title }) {
 
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info.map ((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item}/>


          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}


Slider3.propTypes = {
  info: PropTypes.node.isRequired,
};

Slider3.propTypes = {
  title: PropTypes.node.isRequired,
};


export default Slider3;