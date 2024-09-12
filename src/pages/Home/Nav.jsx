import { Link } from "react-scroll";
// import { motion } from "framer-motion";

const Nav = ({ reference }) => {
  return (
    // <motion.div
    //   drag
    //   dragConstraints={reference}
    //   className="relative top-[70%] left-[31%] w-4/12 h-20 rounded-[20px] bg-zinc-900 text-white p-5 flex justify-center items-center"
    // >
      <div className="absolute transalte-x-[-50%] transalte-y-[-50%] content-center">
        <ul className="flex flex-row space-x-[50px]">
          <li className="cursor-pointer">
            <Link className="" to="home" smooth={true} duration={700}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link className="" to="about" smooth={true} duration={700}>
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link className="" to="contact" smooth={true} duration={700}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    // </motion.div>
  );
};

export default Nav;
