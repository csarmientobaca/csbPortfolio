import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillYoutube } from 'react-icons/ai';


const Card1 = ({ title, description, sources, youtube, link }) => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        if (sources && sources.length > 0) {
            const rotateImages = () => {
                const newIndex = (imageIndex + 1) % sources.length;
                setImageIndex(newIndex);
            };

            const intervalId = setInterval(rotateImages, 3000); // Adjust the delay as needed.

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [imageIndex, sources]);

    if (!sources || sources.length === 0) {
        return null; // Return null or handle the case when sources are missing or empty.
    }
    return (
        <div className="bigInvert z-0 w-96 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-gray-900" >
            <Link href={link}>
                <Image
                    className="h-80 w-96 object-cover rounded-t-xl"
                    alt="product"
                    src={sources[imageIndex]}
                />
                <div className="px-4 py-3 w-96" style={{ height: '200px', overflow: 'hidden' }}>
                    <h2 className="text-2xl font-bold block capitalize">{title}</h2>
                    <p className="text-lg font-semibold cursor-auto my-3">{description}</p>
                </div>
            </Link >

            <div className="text-center text-7xl py-3 mx-40">
                <Link href={youtube}>
                    <AiFillYoutube />
                </Link>
            </div>
        </div >
    );
};

export default Card1
