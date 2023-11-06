// components/Card.js
import React from 'react';
import Image from 'next/image';
import meProva from '../public/logo.png'
import Link from 'next/link';

const Card1 = ({ title, description, source }) => {
    return (
        <div className="textMarmol z-0 w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-gray-900">
            <Link href={"https://todo-app-nextjs-8edab.web.app"}>
                <Image className='h-80 w-72 object-cover rounded-t-xl' alt="product" src={meProva} />
                <div className="px-4 py-3 w-72">
                    <p className=" text-lg font-bold truncate block capitalize">{title}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold cursor-auto my-3">{description}</p>

                    </div>
                </div>
            </Link>
        </div >
    );

};

export default Card1;
