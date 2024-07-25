"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "./Particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface HeroProps {
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  quotes: string;
}

const Hero: React.FC<HeroProps> = ({
  firstName,
  lastName,
  position,
  imageUrl,
  quotes,
}) => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#E3FEF7" : "#003C43");
  }, [theme]);

  return (
    <section className="relative py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left z-10">
          <motion.p
            className="mt-4 text-lg md:text-2xl font-semibold text-gray-800 dark:text-gray-300"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Hello, this is
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold dark:text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#135D66] dark:text-[#77B0AA]">
              {firstName}
            </span>{" "}
            <span className="text-gray-900 dark:text-gray-100">{lastName}</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl font-semibold text-gray-800 dark:text-gray-300"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {position}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl italic text-gray-600 dark:text-[#77B0AA]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {`-'${quotes}'`}
          </motion.p>
        </div>
        <motion.div
          className="flex-1 mt-8 md:mt-0 md:ml-[220px] self-center z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={imageUrl}
            alt="Your Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={100}
        color={color}
        refresh
      />
    </section>
  );
};

export default Hero;
