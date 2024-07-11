import React from 'react';
import ContactHeader from "@/Components/ContactHeader.jsx";
import Navbar from "@/Components/Navbar.jsx";
import Hero from "@/Components/Hero.jsx";
import InfoServicesSection from "@/Components/InfoServicesSection.jsx";
import WhyChooseSaadAhsan from "@/Components/WhyChooseSaadAhsan.jsx";
import LatestNewsAndBlogs from "@/Components/LatestNewsAndBlogs.jsx";
import CeoMessage from "@/Components/CeoMessage.jsx";
import WhatOutClientSay from "@/Components/WhatOutClientSay.jsx";
import Testimonials from "@/Components/Testimonials.jsx";
import AwardsAppreciation from "@/Components/AwardsAppreciation.jsx";
import TopTierCitizenship from '@/Components/TopTierCitizenship';
const Home = () => {
    return (
        <>
            <div className="container-fluid bg-dark px-4 py-3 bg-black m-0">
                <ContactHeader
                    className="d-flex gap-3 justify-content-end text-decoration-none align-items-center"
                    phoneNumber="+92 301 84 88 944" />
            </div>
            <Navbar/>
            <Hero className="mb-20"/>
            <InfoServicesSection />
            <WhyChooseSaadAhsan />
            <TopTierCitizenship/>
            <LatestNewsAndBlogs />
            <CeoMessage />
            <WhatOutClientSay />
            <Testimonials className="shadow shadow-lg" />
            <AwardsAppreciation />
        </>
    );
};

export default Home;
