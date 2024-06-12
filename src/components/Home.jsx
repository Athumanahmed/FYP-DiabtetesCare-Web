import React, { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../utilis/Button";
import img from "../assets/img/about.jpg";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import ServicesCard from "../utilis/ServicesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ResourcesCard from "../utilis/ResourcesCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

function Home() {
  // for navbar
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  // navbarends

  //   services
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;
  // services

  //   doctors
  const data = [
    {
      img: "/src/assets/img/doc1.jpg",
      name: "Dr. Serena Mitchell",
      location: "Kairuki Hospital",
    },
    {
      img: "/src/assets/img/doc2.jpg",
      name: "Dr. Julian Bennett",
      location: "Kairuki Hospital",
    },
    {
      img: "/src/assets/img/doc3.jpg",
      name: "Dr. Camila Rodriguez",
      location: "UDSM Health center",
    },
    {
      img: "/src/assets/img/doc4.jpg",
      name: "Dr. Victor Nguyen",
      location: "St Anne's Diabetes center",
    },
    {
      img: "/src/assets/img/doc5.jpg",
      name: "Dr. Ethan Carter",
      location: "Muhimbili Hopsiptal",
    },
   
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  // doctors
  return (
    <>
      {/* navbar section */}
      <div className=" fixed w-full z-10 text-white">
        <div>
          <div className=" flex flex-row justify-between p-3 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className=" flex flex-row items-center cursor-pointer">
              
                <Link to={"/"}>
                  <h1 className=" text-2xl font-semibold">DiabetesCare.</h1>
                </Link>
              
            </div>

            <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
              <a
                href="#home"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-hoverColor transition-all cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-hoverColor transition-all cursor-pointer"
              >
                About
              </a>
              <a
                href="#services"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-hoverColor transition-all cursor-pointer"
              >
                Services
              </a>
              <a
                href="#doctors"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-hoverColor transition-all cursor-pointer"
              >
                Doctors
              </a>
              <a
                href="#blog"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-hoverColor transition-all cursor-pointer"
              >
                Resources
              </a>
            </nav>

            <div className=" hidden lg:flex">
              <Link
                to={"/login"}
                className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              >
                GetStarted
              </Link>
            </div>

            <div className=" lg:hidden flex items-center">
              {menu ? (
                <AiOutlineClose size={28} onClick={handleChange} />
              ) : (
                <AiOutlineMenu size={28} onClick={handleChange} />
              )}
            </div>
          </div>
          <div
            className={`${
              menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <a
              href="#home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Services
            </a>
            <a
              href="#doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Doctors
            </a>
            <a
              href="#blog"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Resorces
            </a>

            <div className=" lg:hidden">
              <Link
                to={"/login"}
                className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              >
                GetStarted
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* navbar ends */}

      {/* hero */}
      <div
        id="home"
        className=" min-h-screen flex flex-col justify-center lg:px-32 px-5  bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90"
      >
        <div className=" w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading text-white">
            Diabetes Support Center, Navigating Your Health Journey
          </h1>
          <p>
            Welcome to our Diabetes Support Center, your go-to destination for
            navigating the complexities of managing diabetes. We understand that
            the journey to optimal health can be challenging, which is why we're
            here to provide comprehensive guidance and support every step of the
            way. Whether you're seeking information on medication management,
            lifestyle changes, or coping strategies, our team of experts is
            dedicated to empowering you with the knowledge and tools needed to
            effectively manage your condition. Join our supportive community as
            we navigate the ups and downs of living with diabetes together,
            offering encouragement, resources, and personalized assistance to
            help you thrive
          </p>
          <Link to={"/login"}>
            <Button title="Get Started" />
          </Link>
        </div>
      </div>
      {/* hero */}

      {/* about */}
      <div
        id="about"
        className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5"
      >
        <div className=" w-full lg:w-3/4 space-y-4">
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            About Us
          </h1>
          <p className=" text-justify lg:text-start">
            Our Diabetes Care System is revolutionizing the way individuals
            manage their diabetes, offering a comprehensive suite of tools and
            resources designed to support every aspect of their journey to
            optimal health. At the heart of our system is a user-friendly
            platform that seamlessly integrates with individuals' daily
            routines, providing personalized guidance and support to help them
            achieve their diabetes management goals. From tracking blood glucose
            levels and medication adherence to monitoring lifestyle factors such
            as diet, exercise, and stress, our system empowers users to take
            control of their health with confidence and ease
          </p>
          <p className="text-justify lg:text-start">
            Central to the effectiveness of our Diabetes Care System is its
            ability to provide real-time feedback and insights based on
            individual data inputs, helping users make informed decisions and
            adjustments to their treatment plans as needed. Our team of
            healthcare professionals and diabetes educators are also available
            to provide personalized support and guidance, ensuring that users
            feel empowered and supported throughout their journey.
          </p>
          <p className="text-justify lg:text-start">
            The importance of our Diabetes Care System cannot be overstated, as
            effective diabetes management is essential for preventing
            complications and improving overall quality of life. By offering a
            comprehensive and user-friendly solution, we aim to break down
            barriers to effective diabetes care and empower individuals to live
            healthier, happier lives. Whether you're newly diagnosed or have
            been living with diabetes for years, our Diabetes Care System is
            here to support you every step of the way, helping you achieve
            better health outcomes and enjoy a brighter future.
          </p>
        </div>
        <div className=" w-full lg:w-3/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
      </div>
      {/* about */}

      {/* services */}
      <div
        id="services"
        className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16"
      >
        <div className=" flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              Our Services
            </h1>
            <p className=" mt-2 text-center lg:text-start">
              services that our Diabetes Care System could offer to support
              individuals with diabetes
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-5 pt-14">
          <ServicesCard icon={icon1} title="Blood Glucose Monitoring" />
          <ServicesCard icon={icon2} title="Medication Management" />
          <ServicesCard icon={icon3} title="Educational Resources" />
        </div>
      </div>
      {/* services */}

      {/* doctors section */}
      <div
        id="doctors"
        className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16"
      >
        <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
          <div>
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              Our Doctors
            </h1>
            <p className=" mt-2 text-center lg:text-start">
              Welcome to our Doctors Section, where expert care meets
              compassionate support. Our team of highly skilled healthcare
              professionals is dedicated to providing personalized and
              comprehensive care to individuals with diabetes.
            </p>
          </div>
          <div className="flex gap-5 mt-4 lg:mt-0">
            <button
              className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
              onClick={() => slider.current.slickPrev()}
            >
              <FaArrowLeft size={25} />
            </button>
            <button
              className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
              onClick={() => slider.current.slickNext()}
            >
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>
        <div className=" mt-5">
          <Slider ref={slider} {...settings}>
            {data.map((e, index) => (
              <div
                className="h-[350px]  text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
                key={index}
              >
                <div>
                  <img
                    src={e.img}
                    alt="img"
                    className=" h-56 rounded-t-xl w-full"
                  />
                </div>

                <div className=" flex flex-col justify-center items-center">
                  <h1 className=" font-semibold text-xl pt-4">{e.name}</h1>
                  <h3 className=" pt-2">{e.location}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* doctors section */}

      {/* resources */}
      <div
        id="blog"
        className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24"
      >
        <div className=" flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              Latest Post
            </h1>
            <p className=" mt-2 text-center lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
              quidem.
            </p>
          </div>
        </div>
        <div className=" my-8">
          <div className=" flex flex-wrap justify-center gap-5">
            <ResourcesCard
              img={img1}
              headlines="Unraveling the Mysteries of Sleep"
            />
            <ResourcesCard img={img2} headlines="The Heart-Healthy Diet" />
            <ResourcesCard
              img={img3}
              headlines="Understanding Pediatric Vaccinations"
            />
            <ResourcesCard img={img4} headlines="Navigating Mental Health" />
            <ResourcesCard
              img={img5}
              headlines="The Importance of Regular Exercise"
            />
            <ResourcesCard img={img6} headlines="Skin Health 101" />
          </div>
        </div>
      </div>
      {/* resources */}

      {/* footer */}
      <div className=" bg-backgroundColor text-white  mt-8 md:mt-0">
        <h1 className=" text-2xl text-center font-semibold mt-8">
          DiabetesCare.
        </h1>
        <p className="text-center font-thin text-sm">
          &copy; 2024 All rights reserved
        </p>
      </div>
      {/* footer */}
    </>
  );
}

export default Home;
