import React from "react";

const Item = ({ id, level }) => {
    return (
        <div className={`item level${level}`}>
            {id}
        </div>
    );
};

export default Item
