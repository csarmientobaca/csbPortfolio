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
import visualstudiocode from "../public/visualstudiocode.png"
import git from "../public/git.png"
import github from "../public/github.png"
import tailwind from "../public/tailwind.png"
import redux from "../public/redux.png"
import python from "../public/python.png"
import flask from "../public/flask.png"



const Skills = () => {


    return (
        <div className='max-w-md mx-auto grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 gap-8 items-center justify-center'>
            {[
                { image: react, alt: 'reactlogo', title: 'React' },
                { image: next, alt: 'nextjslogo', title: 'Next.js' },
                { image: js, alt: 'jslogo', title: 'JavaScript' },
                { image: java, alt: 'javalogo', title: 'Java' },
                { image: spring, alt: 'springlogo', title: 'Spring' },
                { image: bootstrap, alt: 'Bootstrap', title: 'Bootstrap' },
                { image: css3, alt: 'css3', title: 'CSS3' },
                { image: html5, alt: 'html5', title: 'HTML5' },
                { image: postgreSQL, alt: 'postgreSQL', title: 'postgreSQL' },
                { image: visualstudiocode, alt: 'visualstudio', title: 'VisualStudioCode' },
                { image: github, alt: 'github', title: 'Github' },
                { image: git, alt: 'git', title: 'git' },
                { image: tailwind, alt: 'tailwind', title: 'tailwind' },
                { image: redux, alt: 'redux', title: 'redux' },
                { image: python, alt: 'python', title: 'python' },
                { image: flask, alt: 'flask', title: 'flask' },


            ].map((item, index) => (
                <div
                    key={index}
                    className='text-center group relative h-20 w-20'
                >
                    <h3 className='text-lg group-hover:text-md font-burtons transition-transform mb-1'>
                        {item.title}
                    </h3>
                    <Image className='h-8 w-8' src={item.image} alt={item.alt} layout='responsive' width={128} height={128} loading='eager' />
                </div>
            ))}
        </div>


    );
};

export default Skills;