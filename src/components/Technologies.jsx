import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import {animate, motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y:[10, -10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    },
  },

});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration:1.5}}
      
      
      className="my-20 text-center text-4xl">Teknologier / Språk
      </motion.h2>
      <motion.div
       whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-500 h-20 w-20"  />
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500 h-20 w-20" />
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-blue-700 h-20 w-20" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <img src="/python.svg" alt="Python" className="h-20 w-20" />
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
        <img src="/active-directory-1.svg" alt="AD" className=" h-20 w-20" />
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 ">
        <img src="/elastic-stack.svg" alt="Elastic" className=" h-20 w-20" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;