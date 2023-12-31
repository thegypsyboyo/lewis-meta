"use client"
import React, { useRef } from 'react'
import {motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';

type Props = {
    experience: Experience[];
}
const Details = ({position, company, companyLink, time, address, work}:any) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 1, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-lg dark:text-white">{position} &nbsp;<a href={companyLink} target="_blank" className="text-primary capitalize"> @{company}</a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-white/75">{time} | {address}</span>
                <p className="font-medium w-full dark:text-textDark pt-3">{work}</p>
            </motion.div>
        </li>
    )
}

const Experiences = ({experience}:Props) => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="w-full">
        <h1 className="font-bold text-[35px] mb-12 w-full text-start dark:text-white text-black">My Experience</h1>
        <div ref={ref} className="w-full mx-auto relative">
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-blueColor origin-top"/>

            <ul className="w-full flex flex-col items-start justify-between ml-4">
                {experience.map((item, index) =>(
                <Details
                key={index}
                position={item.jobTitle} company={item.companyName}
                companyLink={`${item.companyLink}`}
                time={item.date} address={item.location}
                work={item.description}
                />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Experiences