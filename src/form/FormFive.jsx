import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { MdDesignServices } from "react-icons/md";
import { FaFeatherPointed } from "react-icons/fa6";

const FormFive = ({ onChangeForm }) => {
  // const [formData, setFormData] = useState({
  //   expectations: "",
  // });

  // const { addFormFour } = useContext(FormContext);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addFormFour(formData.expectations);
    onChangeForm("FormSix");
  };

  const handleBack = (e) => {
    e.preventDefault();
    onChangeForm("FormFour");
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 border-2 border-b-8 rounded-md p-6 mt-10 text-[white] bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary shadow-md shadow-[#c045a944]/10">
        <FaFeatherPointed className="text-6xl" />
        <h3 className="text-2xl font-medium">
          ผลประโยชน์ที่ศิลปินจะได้รับจากโครงการฯ
        </h3>
      </div>

      <div className="grid grid-cols-6 gap-5 border-2 border-b-8 rounded-md p-4 my-8 bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary py-10 px-6 shadow-lg shadow-[#c045a944]">
        <div className="col-span-6 space-x-2 flex flex-col">
          <ul className="pl-4 space-y-2 font-light">
            <li>{` (1)	ศิลปินจะได้เข้าร่วมทุกกิจกรรม ตลอดระยะเวลาโครงการฯ เพื่อสร้างโอกาส สร้างมูลค่าให้กับผลงาน `}</li>
            <li>{` (2)	ศิลปินจะได้เข้าร่วมสังกัดชุมชนฯ Discord (แหล่งชุมชน Community ที่รวมนักสะสมและผู้สนใจงานศิลปะ ในโลกดิจิทัล Platform)`}</li>
            <li>{` (3)	ศิลปินจะได้รับเกียรติเป็นส่วนหนึ่งในการบันทึกความสำเร็จ ในรูปแบบ “สูจิบัตร” สิ่งพิมพ์ปกแข็ง รวมงานศิลปะ ศิลปินในสังกัด (มีจำนวนจำกัด)`}</li>
            <li>{` (4)	ศิลปินได้มีโอกาสขายผลงานผ่านทางโครงการฯ เป็นผู้จัดงานแสดงประมูลผลงาน (งานใหญ่ ช่วงท้ายโครงการฯ) `}</li>
            <li>{` (5)	ศิลปินจะได้รับใบประกาศนียบัตร จากทางสำนักงานนวัตกรรมแห่งชาติ ที่จัดร่วมกับมหาวิทยาลัยศิลปากร`}</li>
            <li>{` (6)	ศิลปินจะได้ส่วนแบ่งจากการขายผลงานทุกครั้ง (หลังจากหักค่าใช้จ่าย) `}</li>
          </ul>
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
              type="button"
              onClick={handleSubmit}
              className="border-2 border-b-8 rounded-md w-full py-3 bg-secondary bg-gradient-to-br from-[#5e67f0] to-[#9c0091] border-secondary/70 transform transition-transform duration-700 hover:scale-95 hover:bg-secondary hover:bg-gradient-to-bl hover:from-[#ed9d5b]/70 hover:to-[#9c0091]/70 text-xl"
            >
              ถัดไป
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormFive;
