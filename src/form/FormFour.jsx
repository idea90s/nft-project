import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { MdDesignServices } from "react-icons/md";
import { BsFileEarmarkPost } from "react-icons/bs";

const FormFour = ({ onChangeForm }) => {
  const [formData, setFormData] = useState({
    expectations: "",
  });

  const { addFormFour } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.expectations) {
      alert("💡 กรุณากรอกข้อมูลให้ครบทุกฟิลด์ก่อนนะคะ แล้วกดถัดไปได้เลยค่ะ 🙏🏻");
    } else {
      addFormFour(formData.expectations);
      onChangeForm("FormFive");
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    onChangeForm("FormThree");
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 border-2 border-b-8 rounded-md p-6 mt-10 text-[white] bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary shadow-md shadow-[#c045a944]/10">
        <BsFileEarmarkPost className="text-6xl" />
        <h3 className="text-2xl font-medium">
          การคาดหวังต่อการสมัครเข้าร่วมในครั้งนี้
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-5 border-2 border-b-8 rounded-md p-4 my-8 bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary py-10 px-6 shadow-lg shadow-[#c045a944]">
          <div className="col-span-6 space-x-2 flex flex-col">
            <label htmlFor="expectations" className="mb-4">
              รายละเอียด
            </label>
            <textarea
              name="expectations"
              rows="15"
              cols="40"
              className="px-4 py-2 roun อแded-md border-2"
              onChange={handleChange}
              // value={formData.expectations}
            >
              {formData.expectations ? null : `( ให้พิมพ์เป็นข้อความ สั้น ไม่เกิน 250 ตัวอักษร )`}
            </textarea>
          </div>

          <div className="col-span-6 space-x-2 p-2 mt-10">
            <div className="flex items-center justify-center gap-20">
              <button
                type="button"
                onClick={handleBack}
                className="border-2 border-b-8 rounded-md w-full py-3 bg-secondary bg-gradient-to-br from-[#ed9e58] to-[#6e0067] border-secondary/70 transform transition-transform duration-700 hover:scale-95 hover:bg-secondary hover:bg-gradient-to-bl hover:from-[#ed9d5b]/70 hover:to-[#9c0091]/70 text-xl"
              >
                ก่อนหน้า
              </button>
              <button
                type="submit"
                className="border-2 border-b-8 rounded-md w-full py-3 bg-secondary bg-gradient-to-br from-[#5e67f0] to-[#9c0091] border-secondary/70 transform transition-transform duration-700 hover:scale-95 hover:bg-secondary hover:bg-gradient-to-bl hover:from-[#ed9d5b]/70 hover:to-[#9c0091]/70 text-xl"
              >
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormFour;
