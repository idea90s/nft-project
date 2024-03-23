import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { BiSolidUserDetail } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";

const FormThree = ({ onChangeForm }) => {
  const [formData, setFormData] = useState({
    avatar: "",
    portfolio: [],
  });

  const { addFormThree } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "avatar") {
      setFormData((prevData) => ({
        ...prevData,
        avatar: files[0], // only taking the first file for avatar
      }));
    } else if (name === "portfolio") {
      setFormData((prevData) => ({
        ...prevData,
        portfolio: [...prevData.portfolio, ...files],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.avatar && !formData.portfolio) {
      alert("💡 กรุณากรอกข้อมูลให้ครบทุกฟิลด์ก่อนนะคะ แล้วกดถัดไปได้เลยค่ะ 🙏🏻");
    } else {
      addFormThree(formData.avatar, formData.portfolio);
      onChangeForm("Success");
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    onChangeForm("FormTwo");
  };
  return (
    <>
      <div className="flex items-center justify-center gap-3 border-2 border-b-8 rounded-md p-6 mt-10 text-[white] bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary shadow-md shadow-[#c045a944]/10">
        <MdDesignServices className="text-6xl" />
        <h3 className="text-2xl font-medium">ผลงาน</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-5 border-2 border-b-8 rounded-md p-4 my-8 bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary py-10 px-6 shadow-lg shadow-[#c045a944]">
          <div className="col-span-6 space-x-2">
            <label htmlFor="">รูปภาพของคุณ</label>
            <input
              type="file"
              name="avatar"
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-6 space-x-2">
            <label htmlFor="">ผลงาน</label>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="portfolio"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">
                      เลือกรูปภาพเพื่ออัปโหลด
                    </span>{" "}
                    ลากแล้ววางรูปภาพ
                  </p>
                  <p className="text-xs text-gray-500">
                    {` SVG, PNG, JPG (MAX. 800x400px)`}
                  </p>
                </div>
                <input
                  id="portfolio"
                  name="portfolio"
                  multiple="true"
                  type="file"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="col-span-6 space-x-2">
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
                ส่งข้อมูล NFT
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormThree;
