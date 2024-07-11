import React, { useState, useCallback } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import dummyGirl from "../../assets/dummy-girl.png"

const CarouselItems = ({ items, active }) => {
    console.log(items)
    const [state, setState] = useState({ items, active, direction: '' });

    const moveLeft = useCallback(() => {
        setState(prevState => ({
            ...prevState,
            active: prevState.active === 0 ? prevState.items.length - 1 : prevState.active - 1,
            direction: 'left'
        }));
    }, []);

    const moveRight = useCallback(() => {
        setState(prevState => ({
            ...prevState,
            active: (prevState.active + 1) % prevState.items.length,
            direction: 'right'
        }));
    }, []);

    const generateItems = () => {
        const generatedItems = [];
        let level;
        for (let i = state.active - 2; i < state.active + 3; i++) {
            let index = i;
            if (i < 0) {
                index = state.items.length + i;
            } else if (i >= state.items.length) {
                index = i % state.items.length;
            }
            level = state.active - i;
            generatedItems.push(<Item key={index} id={state.items[index]} level={level} />);
        }
        return generatedItems;
    };

    return (
        <div id="carousl" className="noselect">
            <div className="arrow arrow-left" onClick={moveLeft}>
                <FaArrowLeftLong />
            </div>
            <TransitionGroup
                className="carousel-items"
                component="div"
            >
                {generateItems()}
            </TransitionGroup>
            <div className="arrow arrow-right" onClick={moveRight}>
                <FaArrowRightLong />
            </div>
        </div>
    );
};

const Item = ({ id, level }) => {
    const className = `item level${level}`;
    return <img src={dummyGirl} className={className}></img>;
};

export default CarouselItems
