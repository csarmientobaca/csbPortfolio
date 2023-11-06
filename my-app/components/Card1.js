import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card1 = ({ title, description, sources }) => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        if (sources && sources.length > 0) {
            const rotateImages = () => {
                const newIndex = (imageIndex + 1) % sources.length;
                setImageIndex(newIndex);
            };

            const intervalId = setInterval(rotateImages, 2000); // Adjust the delay as needed.

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [imageIndex, sources]);

    if (!sources || sources.length === 0) {
        return null; // Return null or handle the case when sources are missing or empty.
    }

    return (
        <div className="textMarmol z-0 w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-gray-900">
            <Link href={"https://todo-app-nextjs-8edab.web.app"}>
                <Image
                    className="h-80 w-72 object-cover rounded-t-xl"
                    alt="product"
                    src={sources[imageIndex]}
                />
                <div className="px-4 py-3 w-72">
                    <p className="text-lg font-bold truncate block capitalize">{title}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold cursor-auto my-3">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card1;
