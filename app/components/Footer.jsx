import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = (isDarkMode) => {
    return (
        <div className='mt-20'>
            <div className='text center'>
                <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    carlos.chirindza0@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Carlos Cherindza. All rights reserved.</p>
                <ul className="flex itms-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Carlos28042003">
                            GitHub</a>
                    </li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/carlos-cherindza-8b9576239/">
                            LinkedIn</a>
                    </li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100011854264967">
                            Facebook</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer