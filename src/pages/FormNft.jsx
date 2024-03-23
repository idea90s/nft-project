import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FormOne from "../form/FormOne";
import FormTwo from "../form/FormTwo";
import FormThree from "../form/FormThree";
import Success from "../form/Success";

const FormNft = () => {
  const [activeForm, setActiveForm] = useState("FormOne");

  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* logo */}
        <div className="flex items-center justify-center gap-4 w-full">
          <img
            src="/imgs/NIA.png"
            alt=""
            className="w-[213px] h-[143px] object-contain"
          />
          <img
            src="/imgs/silpakorn.png"
            alt=""
            className="w-[141px] h-[141px] object-contain"
          />
        </div>
        {/* end logo */}

        <div className="z-50 px-4 md:px-10 w-full">
          {activeForm === "FormOne" && (
            <FormOne onChangeForm={handleFormChange} />
          )}
          {activeForm === "FormTwo" && (
            <FormTwo onChangeForm={handleFormChange} />
          )}
          {activeForm === "FormThree" && (
            <FormThree onChangeForm={handleFormChange} />
          )}
          {activeForm === "Success" && <Success />}
        </div>
      </div>
    </MainLayout>
  );
};

export default FormNft;
