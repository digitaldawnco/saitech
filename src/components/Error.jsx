import React from "react";

const ErrorData = {
  title: "404",
  subtitle: "oops! that page can not be found.",
  brief:
    "it looks like nothing was found at this location. maybe try a search?",
  btntext: "submit",
};

const Error = () => {
  return (
    <>
      <div
        id="merox-error-area"
        className="merox-error-area text-center py-[100px]"
      >
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:w-8/12 lg:w-8/12 w-full px-[12px] flex-[0_0_auto] mx-auto">
              <div className="merox-content-box">
                <h2 className="font-bold text-[70px]">{ErrorData.title}</h2>
                <h3 className="text-[42px] font-bold mb-5 capitalize">
                  {ErrorData.subtitle}
                </h3>
                <p className="mb-4">{ErrorData.brief}</p>
                <form
                  action="#"
                  className="error-form-box bg-[#353858] p-[30px] m-[0_120px] sm:m-0 xsm:m-0 relative"
                >
                  <input
                    className="form-control w-full h-[62px] border-none bg-white px-[33px] text-[18px] text-[#30323d] block leading-normal"
                    type="email"
                    required
                    placeholder="type your email"
                  />
                  <button
                    type="submit"
                    className="btn btn-1 ml-[10px] absolute right-[30px] top-[30px] bottom-[30px]"
                  >
                    {ErrorData.btntext}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
