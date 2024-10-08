"use client";
import productImage from "@/assets/product-image.png";
import Templates from "@/assets/Template.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    return (
        <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">TRX Links</div>
                    </div>
                    <h2 className="section-title mt-5">Seamless Tron Transactions in Social Media</h2>
                    <p className="section-description mt-5">
                        Transform your social media experience with TRX Links. Send tokens, interact with DeFi, and bridge chains - all through simple, shareable links on platforms you already use.
                    </p>
                </div>
                <div className="relative">
                    <Image src={Templates} alt="TRX Links Templates" className="mt-10 rounded-3xl" />
                    <motion.img
                        src={pyramidImage.src}
                        alt="Pyramid Image"
                        height={262}
                        width={262}
                        className="hidden md:block absolute -right-[150px] -top-[30px]"
                        style={{
                            translateY,
                        }}
                    />
                    <motion.img
                        src={tubeImage.src}
                        alt="Tube image"
                        height={248}
                        width={248}
                        className="hidden md:block absolute bottom-24 -left-36"
                        style={{
                            translateY,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};