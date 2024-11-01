// Import the HERO_CONTENT from index.js
import { HERO_CONTENT } from "../constants/index"; // Adjust the path as necessary
import profilePic from "../assets/adnan.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-0 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thick tracking-tight lg:mt-16"
            >
              Adnan Krasnici
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-00 to-purple-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-transparent"
            >
              IT-Säkerhetsspecialist
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-base sm:text-lg md:text-xl lg:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-5">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Adnan Krasnici"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
