import Image from 'next/image';
import React from 'react';
import java from "../public/java.png"
import js from "../public/js.png"
import next from "../public/next.png"
import react from "../public/react.png"
import spring from "../public/spring.png"
import css3 from "../public/css3.png"
import html5 from "../public/html5.png"
import bootstrap from "../public/bootstrap.png"
import postgreSQL from "../public/postgreSQL.png"

const Skills = () => {


    return (
        <div id='logos' className='flex flex-wrap justify-center space-x-4'>
            {[
                { image: react, alt: 'reactlogo', title: 'React' },
                { image: next, alt: 'nextjslogo', title: 'Next.js' },
                { image: js, alt: 'jslogo', title: 'JavaScript' },
                { image: java, alt: 'javalogo', title: 'Java' },
                { image: spring, alt: 'springlogo', title: 'Spring' },
                { image: bootstrap, alt: 'Bootstrap', title: 'Bootstrap' },
                { image: css3, alt: 'css3', title: 'CSS3' },
                { image: html5, alt: 'html5', title: 'HTML5' },
                { image: postgreSQL, alt: 'postgreSQL', title: 'postgreSQL' }
            ].map((item, index) => (
                <div
                    key={index}
                    className='my-16 w-32 h-32 mb-4 group relative cursor-pointer transition-transform transform hover:scale-105'
                >
                    <h3 className=' text-center text-xl group-hover:text-2xl font-semibold transition-transform -mt-8'>
                        {item.title}
                    </h3>
                    <Image src={item.image} alt={item.alt} layout='responsive' width={128} height={128} loading='eager' />
                </div>
            ))}
        </div>


    );
};

export default Skills;