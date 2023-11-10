import Link from 'next/link';
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'
import { FaFilePdf } from 'react-icons/fa'

const NavFloating = () => {
    return (
        <>
            <nav className=' flex flex-col items-center 
            xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto 
            xl:righ-[%2] z-20 top-0 w-full 
            xl:w-16 
            xl:max-w-md 
            xl:h-screen right-0'>
                <div className='bgTransparent textMarmol bigGreen flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 backdrop:blur-sm text-3xl xl:text-2xl xl:rounded-full'>
                    <Link href={'/'}>
                        <IoHome />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/carlos-sarmiento-baca-64409bb6'}>
                        <AiFillLinkedin />
                    </Link>
                    <Link href={'https://twitter.com/CSarmientobaca'}>
                        <RiTwitterXFill />
                    </Link>
                    <Link href={'https://github.com/csarmientobaca'}>
                        <AiFillGithub />
                    </Link>
                    <Link href='/pdf'>
                        <FaFilePdf />
                    </Link>

                </div>
            </nav>

        </>
    )
}
export default NavFloating;