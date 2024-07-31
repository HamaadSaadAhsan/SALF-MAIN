import React from "react";
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
import TopTierCitizenship from "@/Components/TopTierCitizenship.jsx";
import TopTierResidence from "@/Components/TopTierResidence.jsx";
import ContactUsConsultationForm from "@/Components/ContactUsConsultationForm";
import Layout from "@/Layouts/Layout";
const Home = () => {
    return (
        <Layout>
            <Hero className="mb-20" />
            <InfoServicesSection />
            <WhyChooseSaadAhsan />
            <TopTierCitizenship
                title={"Our Top-Tier Citizenship Programs"}
                subtitle={"Citizenship by Investment Programs"}
                classNames={"d-flex bg-black pt-5"}
            />
            <TopTierResidence
                title="Our Top-Tier Residency Programs"
                subtitle={"Residency by Investment Programs"}
                classNames={"d-flex bg-white pt-5"}
            />
            <ContactUsConsultationForm />
            <LatestNewsAndBlogs />
            <CeoMessage />
            <WhatOutClientSay />
            <Testimonials className="shadow shadow-lg" />
            <AwardsAppreciation />
        </Layout>
    );
};

export default Home;
