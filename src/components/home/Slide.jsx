import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Box, Typography, Button, styled, Divider } from "@mui/material";
import { Link } from "react-router-dom";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  color: #7f7f7f;
  align-items: center;
`;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;
const Image = styled("img")({
  width: "auto",
  height: "150px",
});
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box vaariant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };
  // console.log(products);
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((value) => (
          <Link to={`product/${value.id}`} style={{textDecoration:"none"}}>
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            <Image src={value.url} alt="products" />
            <Text style={{ fontWeight: 600, color: "#212121" }}>
              {value.title.shortTitle}
            </Text>
            <Text style={{ color: "green" }}>{value.discount}</Text>
            <Text style={{ color: "#212121", opacity: ".6" }}>
              {value.tagline}
            </Text>
          </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
