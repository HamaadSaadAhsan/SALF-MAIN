import React from 'react';
import NewsCard from "@/Components/NewsCard.jsx";
import news from "../../assets/news.png"
import uk from "../../assets/uk.png"
import uae from "../../assets/uae.png"
const LatestNewsAndBlogs = () => {
    return (
        <div className="d-flex  custom-light-bg mt-3">
            <div className="container mt-10 py-5">
                <div className="row flex-wrap">
                    <div className="col-lg-3">
                        <div className="d-flex flex-column">
                            <h3 className="fw-bold fs-5">
                                Our Latest
                                Blog and News
                            </h3>
                            <p className="fw-medium">
                                Stay updated on the recent changes in Immigration policies and other business planning
                                solutions.
                            </p>
                            <div className="mt-2">
                                <a href="" className="border border-black px-3 py-2 text-black blog_and_news fw-medium">Blog
                                    And News</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gap-5">
                            <div className="col-lg-3 col-2">
                                <NewsCard url={news}/>
                            </div>
                            <div className="col-lg-3 col-2">
                                <NewsCard url={uk}/>
                            </div>
                            <div className="col-lg-3 col-2">
                                <NewsCard url={uae}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNewsAndBlogs;
