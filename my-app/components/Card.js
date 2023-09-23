// components/Card.js
import React from 'react';
import Image from 'next/image';

const Card = ({ title, description }) => {
    return (
        <div className=" p-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
