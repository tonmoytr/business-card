import Image from "next/image";
import logo from "../../public/logo.png";
import ivey from "../../public/ivey.png";
import qr from "../../public/qr.png";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail, TfiWorld, TfiLocationPin } from "react-icons/tfi";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const text = "Building tomorrow's website Today.";

export default function BusinessCard() {
  return (
    <div className="relative min-h-fit bg-gradient-to-br from-blue-300 via-white to-blue-300 flex flex-col items-center justify-center overflow-hidden p-8 md:p-16 rounded-3xl shadow-[10px_20px_40px_rgba(0,0,0,0.8),-2px_-2px_5px_rgba(0,0,0,0.15)]">
      {/* Business Card Container */}
      <div className="z-10 max-w-7xl w-full bg-gray-100 rounded-3xl shadow-2xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
        {/* Front Side */}
        <div className="text-center space-y-3">
          <Image
            src={ivey}
            alt="logo"
            className="w-20 md:w-40 h-20 md:h-40 mx-auto"
          />
          <h1 className="text-3xl font-bold text-blue-300">IVEY SOLUTIONS</h1>

          <div className="mt-4">
            <Image
              src={qr}
              alt="QR"
              className="w-20 md:w-30 h-20 md:h-30 mx-auto border-8 border-blue-300 rounded-xl"
            />
          </div>
        </div>

        {/* Back Side */}
        <div className="space-y-6 text-gray-800">
          <Image src={logo} alt="logo" className="w-full h-10 md:h-20 m-0" />
          <hr className="text-gray-300 my-3" />
          <p className="text-sm text-gray-800">
            {text}
            <hr className="text-gray-300 m-0" />
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 m-0">
              <FaPhone className="text-white bg-blue-400 px-2 py-3 text-6xl rounded-t-full" />
              <span>
                <a className="text-black font-semibold" href="tel:334-200-7299">
                  334-200-7299
                </a>
              </span>
            </div>
            <hr className="text-gray-300 m-0" />
            <div className="flex items-center gap-3 m-0">
              <TfiEmail className="text-white bg-blue-400 px-2 py-3 text-6xl" />
              <span>
                <a
                  className="text-black font-semibold"
                  href="mailto:jp@ivey.solutions"
                >
                  jp@ivey.solutions
                </a>
              </span>
            </div>
            <hr className="text-gray-300 m-0" />
            <div className="flex items-center gap-3 m-0">
              <TfiWorld className="text-white bg-blue-400 px-2 py-3 text-6xl" />
              <span>
                <a
                  className="text-black font-semibold"
                  href="https://www.ivey.solutions/"
                >
                  Ivey.Solutions
                </a>
              </span>
            </div>
            <hr className="text-gray-300 m-0" />
            <div className="flex items-center gap-3">
              <TfiLocationPin className="text-white bg-blue-400 px-2 py-3 text-6xl rounded-b-full" />
              <span>Alabama US</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4 ms-5">
            <a
              href="#"
              className="text-blue-400 text-2xl hover:scale-110 transition-transform"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-blue-400 text-2xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-blue-400 text-2xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-400 text-2xl hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Website Banner (Green Capsule Bar) */}
      <div className="relative w-full flex items-center justify-center mt-10">
        <div className="absolute h-1 w-3/4 bg-green-600 rounded-full"></div>
        <span className="relative px-6 py-1 bg-green-600 text-white rounded-full z-10 text-sm font-medium shadow-md">
          Powered By Savy Software
        </span>
      </div>
    </div>
  );
}
