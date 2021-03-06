import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    // can be written with 3 lines
    // const things = useState(null);
    // const activeIndex = things[0];
    // const setActiveIndex = things[1];


    const onTitleClick = (index) => {
        setActiveIndex(index);
        // once set is called, the whole component from the top is re-rendered and re-run
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;