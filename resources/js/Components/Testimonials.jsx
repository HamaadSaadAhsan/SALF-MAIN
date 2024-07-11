import React from 'react';
import quotes from '../../assets/quotes.png'
import CarouselItems from "@/Components/CarouselItems.jsx";
const Testimonials = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="container top-neg-margin border-15 bg-white">
            <div className="d-flex flex-column py-5 position-relative testimonials_div">
                <img className="ms-auto me-auto" src={quotes} alt="quotes"/>
                <p className="text-center mt-3 mx-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et tincidunt leo. Cras dictum maximus velit, non egestas arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Cras dictum maximus velit, non egestas arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
                <h5 className="text-primary text-center fw-bold">
                    Name Here
                </h5>

                <CarouselItems className="" items={items} active={0}/>
            </div>
        </div>
    );
};

export default Testimonials;
