import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  const icons = [
    <BsTwitter />,
    <BsInstagram />,
    <BsFacebook />,
    <FaSnapchatGhost />,
  ];

  return (
    <div className="text-black py-10 px-4 border-t-4 border-gray-300">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Address Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">Our Office</h2>
          <p className="mt-2 text-black-300">Indore, Madhya Pradesh, India</p>
          <p className="text-gray-700 mt-1">1234 ABC Street, Indore</p>
        </div>

        {/* Social Media Section */}
        <div className="flex gap-6 justify-center md:justify-end">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="text-3xl hover:text-blue-500 duration-200 transition-all"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
