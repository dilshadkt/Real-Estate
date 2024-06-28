import React from "react";

const Sample = () => {
  return (
    <>
      <div className="main-container bg-[#071538] px-5 lg:px-40 md:px-20 py-[9rem] overflow-hidden relative">
        <div className="flex flex-col relative z-10">
          <div className="section1 h-fit hidden lg:h-[674px] w-full md:flex  md:flex-row md:gap-8 items-start lg:items-center relative">
            <img
              src={"/sample/Ellipse.png"}
              alt="photo"
              className=" h-auto w-[18.75rem] hidden md:flex lg:w-[22.813rem] absolute md:top-[-97%] lg:top-[-51%] md:left-[9%] lg:left-[13%] z-20"
            />
            <img
              src={ellipsHalf}
              alt="photo"
              className="h-auto w-[77.688rem] min-[1500px]:top-[-136%] absolute md:top-[-171%] lg:top-[-116%] xl:top-[-136%] md:left-[28%] lg:left-[28%]"
            />
            <div className="text-container md:w-fit h-full z-20">
              <div className=" h-fit flex justify-start pl-[10px] min-w-[800px] ">
                <h2 className="text-[#FFFFFF] font-normal pt-[2rem] lg:text-[56px] md:text-[38px] text-xl md:leading-[50px] lg:leading-[70px]">
                  At DNS we believe that
                  <br /> simplicity is the{" "}
                  <span className="text-[#45B9E7] text-opacity-80 md:leading-[50px] lg:leading-[70px]">
                    key to success.
                  </span>{" "}
                  <br />
                  <span className="text-[#23396B] text-opacity-35 md:leading-[50px] lg:leading-[70px]">
                    We use thoughtful details to
                    <br /> grab attention. Because <br />
                    something that is simple works.
                  </span>
                </h2>
              </div>
            </div>
            {/* <img
              src={diamondshape}
              alt="Diamond Shape"
              className="lg:h-52 md:h-36 h-20 w-auto hidden md:flex md:absolute top-[3%] right-[-2.5rem]"
            /> */}
          </div>

          {/* {/ Second Section /} */}
          <div className="section2 h-[620px] flex flex-col md:flex-row md:gap-8 items-center mt-8 relative z-20">
            <div className="text-buttons md:w-[52%]">
              <div>
                <h2 className="text-white font-normal w-full text-3xl md:text-4xl lg:text-[56px] leading-[20px] lg:leading-[66px]">
                  Creative direction
                </h2>
                <p className="text-white font-normal text-sm md:text-[16px] lg:text-[19px] leading-[1.875rem] text-start mt-[16px] md:mt-[18px] lg:mt-[23px]">
                  For any digital product, be it a website or an application, a
                  seamless and enhanced user experience (UX) is crucial,
                  accompanied by an emotionally engaging and immersive user
                  interface (UI)
                </p>
              </div>
              <div className="flex gap-4 mt-[40px]">
                {/* <HoverButton
                  value="View More"
                  className="text-white font-normal max-w-56 min-w-[178px] text-base lg:text-lg hover:bg-[#3A5C9A] hover:border-[#3A5C9A] hover:font-bold"
                  btnLink="#"
                  icon={<FaArrowRight />}
                />
                <HoverButton
                  value="Talk to sales"
                  className="text-white font-normal max-w-56 min-w-[178px] text-base lg:text-lg hover:bg-[#3A5C9A] hover:border-[#3A5C9A]  hover:font-bold"
                  btnLink="#"
                  icon={<FaArrowRight />}
                /> */}
              </div>
              <div className="absolute bg-red-300 w-full top-[39%] right-[67%] translate-x-[50%]">
                <div className="relative bg-yellow-200 w-full h-full">
                  {/* <img
                    src={illustration3D}
                    alt="3D Illustration"
                    className="w-[30.875rem] hidden lg:flex absolute h-auto -top-[100px] left-[76%] transform translate-x-[-50%] z-50"
                  /> */}
                  <div className="max-w-screen-2xl w-[1508px] z-0 h-[1500px] rounded-t-full bg-black absolute  border-[#071538] border-t-blue-500 border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
};

export default Sample;
