import React from "react";
import Navbar from "../components/Navbar";
import { FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-zinc-800 min-h-screen ">
        <Navbar />
        <div className="max-w-full lg:max-w-[1440px] h-auto lg:h-[1024px] text-amber-500 bg-gradient-to-r from-black to-zinc-800 min-h-screen">
          <div className="flex flex-col items-center justify-center m-auto space-y-4 mt-8 px-4 sm:px-8 md:px-16">
            <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-center">
              Get In Touch With Us
            </h1>
            <p className="w-full sm:w-[644px] text-[16px] text-center text-[#f7f2f2]">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className="w-full sm:w-[1058px] sm:h-[923px] m-auto flex flex-col sm:flex-col lg:flex-row gap-10 sm:gap-12 mt-10 p-4 md:p-8">
            {/* Contact Info Section */}
            <div className="flex flex-col w-full sm:w-[393px] h-auto sm:h-[537px] gap-10">
              <div className="flex gap-9 items-center">
                <FaLocationDot className="w-[22px] h-[28.18px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-[24px] font-bold text-white ">Address</h1>
                  <p className="text-[16px] text-white ">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              <div className="flex gap-9 items-center">
                <FaPhone className="w-[22px] h-[28.18px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-[24px] font-bold text-white ">Phone</h1>
                  <p className="text-[16px] text-white ">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex gap-9 items-center">
                <MdAccessTimeFilled className="w-[22px] h-[28.18px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-[24px] font-bold text-white ">
                    Working Hours
                  </h1>
                  <p className="text-[16px] text-white ">Mon-Fri: 9am - 6pm</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full sm:w-[635px] mt-10 sm:mt-0">
              <div className="flex items-center justify-center">
                <div className="mx-auto w-full max-w-[550px] bg-zinc-900 bg-transparent">
                  <form
                    method="post"
                    className="w-full sm:w-[531px]"
                  >
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-amber-500">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="py-5 w-full rounded-md border border-[#8460a6] bg-zinc-700 px-6 text-base font-medium text-white outline-none focus:border-[#ebeaef] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-amber-500">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Abc@def.com"
                        className="w-full rounded-md border border-[#8460a6] bg-zinc-700 py-5 px-6 text-base font-medium text-white outline-none focus:border-[#ebeaef] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-amber-500">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="This is an optional"
                        className="w-full rounded-md border border-[#8460a6] bg-zinc-700 py-5 px-6 text-base font-medium text-white outline-none focus:border-[#ebeaef] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-amber-500">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Hi! I'd like to ask about"
                        className="w-full resize-none rounded-md border border-[#8460a6] bg-zinc-700 py-9 px-6 text-base font-medium text-white outline-none focus:border-[#ebeaef] focus:shadow-md"
                      ></textarea>
                    </div>
                    <div>
                      <button className="w-full hover:text-white sm:w-[237px] h-[48px] rounded-[10px] text-lg font-semibold text-black bg-[#FAF4F4] border-[1px] border-[#090820] transition-all duration-300 ease-in-out transform hover:bg-amber-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FAF4F4] focus:ring-offset-2">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
