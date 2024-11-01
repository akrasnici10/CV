import profilePic from "../assets/adnan.png";
import { HERO_CONTENT } from "../constants/index";
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
    <div className="border-b border-neutral-0 pt-2 pb-2 lg:mb-10 -mt-12"> {/* Negative top margin to lift content */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-3xl font-thick tracking-tight lg:text-8xl mb-0 -mt-10 " // Reduced bottom margin
            >
              Adnan Krasnici
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-00 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mt-1 mb-1" // Small margin adjustments
            >
              IT-Säkerhetsspecialist
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my- max-w-xl py-2 font-light tracking-tighter text-sm sm:text-base md:text-lg lg:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6 "> {/* Negative margin on image container */}
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Adnan Krasnici"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


