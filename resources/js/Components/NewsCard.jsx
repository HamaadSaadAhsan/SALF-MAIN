import React from 'react';

const NewsCard = ({ url }) => {
    return (
        <div className="news_card shadow shadow-lg" style={{
            backgroundImage: `url(${url})`,  // Correct usage of url
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="card-body d-flex flex-column h-100">
                <div className="mt-auto ms-auto">
                    <a href="" className="read_more_button">Read Full Article</a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
