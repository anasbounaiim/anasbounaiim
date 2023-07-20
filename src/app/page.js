'use client';
import Head from "next/head";
import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import web2 from "public/web2.png";
import web1 from "public/web1.png";
import web3 from "public/web3.png";
import web4 from "public/web4.png";
import web5 from "public/web5.png";
import web6 from "public/web6.png";
import Buuuu from "public/Buuuu.png";
import Buuuu_w from "public/Buuuu-w.png";
import logo from "public/logo.png";
import logo_w from "public/logo-w.png";
import Skills from "public/Skills.png";
import Skills_w from "public/Skills-w.png";
import Portfolio from "public/Portfolio.png";
import Portfolio_w from "public/Portfolio-w.png";
import about from "public/AboutMe.png";
import about_w from "public/AboutMe-w.png";

export default function Home() {
 const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>Anas's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    <main className="bg-white text-black px-10 md:px-20 lg:px-60 dark:bg-neutral-900 dark:text-white">
      <section className=" min-h-screen ">
        <nav className="py-10 mb-12 flex justify-between ">
          <div className="w-10">
          <Image src={darkMode?logo_w:logo}   />
          </div>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill 
              onClick={() => setDarkMode(!darkMode)}
              className='cursor-pointer text-2xl  dark:hidden'
               />
            </li>
            <li>
            <BsFillSunFill
            onClick={() => setDarkMode(!darkMode)}
            className='cursor-pointer text-2xl hidden  dark:block'
            />
            </li>
          {/*  <li className="text-white bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-slate-50 dark:to-slate-200 dark:text-zinc-900 px-4 py-2 rounded-md ml-8">
              Resume
  </li>*/}
          </ul>
        </nav>
        <div className="text-center pt-20 lg:pt-11">
          
          
          <div className="relative mx-auto w-[290px] lg:w-[480px] ">
          <Image src={darkMode?Buuuu_w:Buuuu}   />
  </div>
        {/*  
          <h2 className="text-2xl py-4 sinoreta">Developer and designer</h2>
          <p className="sinoreta py-4 text-md leading-8 text-zinc-900 dark:text-white">
            Designer is someone who is just starting out in the world of
            software development and design.
</p>*/}
        </div>
        <div className="flex text-3xl justify-center mt-6 lg:gap-16 gap-11 py-6 text-zinc-900 dark:text-white">
         <a href="https://github.com/anasbounaiim" target="_blank"><AiFillGithub  /></a> 
          <a href="https://www.linkedin.com/in/anas-bounaim-37450621a/" target="_blank"> <AiFillLinkedin /></a> 
          <a href="https://www.instagram.com/anasbounaiim/" target="_blank"> <AiFillInstagram /></a> 
        </div>
    {/*  <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full mt-20 overflow-hidden w-80 h-80">
          <Image src={Green} layout="fill" objectFit="cover" />
  </div>*/}
  <hr className="my-28 w-44  m-auto lg:w-[300px]"/>
      </section>
      
      <section>
        <div>
          <div className="w-48 lg:w-[450px] py-5">
          <Image src={darkMode?about_w:about}/>
          </div>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white lg:text-xl">

            Hello there! 👋 My name is Anas Bounaim, a passionate and dedicated individual within the tech sphere. 🧑‍💻 At the young age of 22, I have already earned a degree in computer development, showcasing my commitment and enthusiasm in this ever-evolving field. <br /> <br />

Over the course of my educational journey, I've cultivated strong competencies in programming 💻 and design 🎨. These skills equip me to create both technically advanced and visually pleasing software solutions, a blend of function and form that I believe is crucial in today's digital landscape. <br /> <br />

My expertise isn't limited to a specific tool or language. Instead, it spans across a multitude of programming languages and design tools, demonstrating my versatility and adaptability in the face of diverse tech challenges. 🚀 </p>
     
            <p className="text-lg py-2 leading-8 text-gray-800 lg:text-xl dark:text-white">
            If you have any questions, need further information, or are interested in exploring potential collaborations, I encourage you to reach out. I welcome the opportunity to connect and engage with others who share my passion for technology. 📬 Feel free to drop me an email at anasbounaiim1@gmail.com. 💌 I look forward to hearing from you!
            </p>
        </div>
        <hr className="my-28 w-44  m-auto lg:w-[300px]"/>
      </section>

      <section>
        <div>
          <div className="w-48 lg:w-72 py-5">
          <Image src={darkMode?Skills_w:Skills}/>
          </div>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-white lg:text-xl">

            Throughout my professional journey as a designer and developer, I have amassed a wealth of experience, acquired diverse skills, and fostered collaborations with highly talented individuals to craft exceptional digital products. 🚀✨  <br /> 

Proficient in both brand design and programming, I consistently strive to deliver seamless user experiences that combine functionality with intuitive aesthetics. 🎨💻 <br />
With a commitment to continuous learning and staying abreast of industry advancements, I am dedicated to pushing creative boundaries and providing innovative solutions in the ever-evolving digital landscape. 📚🌱💡</p> <br /> 
            <div className="mockup-code dark:bg-white my-10">
  <pre data-prefix="~"><code>".المهارة هي المفتاح الذي يفتح أبواب الإمكانية ويجعل الصعب ممكنًا"</code></pre>
</div>
            <p className="text-lg py-2 leading-8 text-gray-800 lg:text-xl dark:text-white">
            I am proficient in both design and programming, offering a versatile skill set.
            </p>
        </div>
        <div className="lg:flex gap-10">
        <div className="text-center  border border-gray-300 dark:border-white p-10 rounded-xl my-10 dark:bg-neutral-900 flex-1">
              <h1 className="text-6xl">🎨</h1>
              <h3 className="text-xl font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-blue-700 dark:text-blue-300 text-lg">Design Tools I Use</h4>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Photoshop</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Illustrator</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Figma</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Indesign</p>
            </div>
            <div className="text-center  border border-gray-300 dark:border-white  p-10 rounded-xl my-10 dark:bg-neutral-900 flex-1">
            <h1 className="text-6xl">💻</h1>
              <h3 className="text-xl font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-blue-700 dark:text-blue-300 text-lg">Design Tools I Use</h4>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Photoshop</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Illustrator</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Figma</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Indesign</p>
            </div>
            <div className="text-center  border border-gray-300 dark:border-white  p-10 rounded-xl my-10 dark:bg-neutral-900 flex-1">
            <h1 className="text-6xl">👋</h1>
              <h3 className="text-xl font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-blue-700 dark:text-blue-300 text-lg">Design Tools I Use</h4>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Photoshop</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Illustrator</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Figma</p>
              <p className="text-lg py-2 leading-8 text-gray-800 lg:text-lg dark:text-white font-semibold">Indesign</p>
            </div>
          </div>
          <hr className="my-16 w-44  m-auto lg:w-[300px]"/>
      </section>
      <section className="py-4">
          <div>
            <div className="w-52 lg:w-80 py-5">
          <Image src={darkMode?Portfolio_w:Portfolio}/>
          </div>
            <p className="text-lg py-2 leading-8 text-gray-800 lg:text-xl dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-blue-300"> agencies </span>
              consulted for <span className="text-blue-300">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-lg py-2 leading-8 text-gray-800 lg:text-xl dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>

      


<div className="mockup-code dark:bg-white my-11">
  <pre data-prefix="$"><code>buu -- شكراً على الزيارة (Shukran ʿalā al-ziyārah)</code></pre> 
  <pre data-prefix=">" className="text-warning"><code>leaving...</code></pre> 
  <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
</div>
       
        </section>
      

    </main>
    <div className="bg-neutral-900 text-white dark:text-black dark:bg-white font-semibold text-center py-1">
          <p>Buuuu Art 2023 ©️</p>
        </div>
    </div>
  );
}
