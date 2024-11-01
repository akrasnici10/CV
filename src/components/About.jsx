import aboutImg from "../assets/fotboll.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl"> {/* Responsive font sizes */}
        Om <span className="text-neutral-400">Mig</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 order-2 lg:order-1">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-sm sm:text-base md:text-lg lg:text-lg -mt-12">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
