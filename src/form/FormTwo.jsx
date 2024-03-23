import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { BiSolidUserDetail } from "react-icons/bi";
import { GrContact } from "react-icons/gr";

const FormTwo = ({ onChangeForm }) => {
  const { addFormTwo } = useContext(FormContext);

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    lineId: "",
    facebook: "",
    discord: "",
    occupation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.phone &&
      !formData.email &&
      !formData.lineId &&
      !formData.facebook &&
      !formData.discord &&
      !formData.occupation
    ) {
      alert("💡 กรุณากรอกข้อมูลให้ครบทุกฟิลด์ก่อนนะคะ แล้วกดถัดไปได้เลยค่ะ 🙏🏻");
    } else {
      addFormTwo(
        formData.phone,
        formData.email,
        formData.lineId,
        formData.facebook,
        formData.discord,
        formData.occupation
      );
      onChangeForm("FormThree");
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    onChangeForm("FormOne");
  };
  return (
    <>
      <div className="flex items-center justify-center gap-3 border-2 border-b-8 rounded-md p-6 mt-10 text-[white] bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary shadow-md shadow-[#c045a944]/10">
        <GrContact className="text-6xl" />
        <h3 className="text-2xl font-medium">ข้อมูลการติดต่อ</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-5 border-2 border-b-8 rounded-md p-4 my-8 bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary py-10 px-6 shadow-lg shadow-[#c045a944]">
          <div className="col-span-3 space-x-2">
            <label htmlFor="">เบอร์โทรศัพท์</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-3 space-x-2">
            <label htmlFor="">อีเมล</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>

          <div className="col-span-2 space-x-2">
            <label htmlFor="">Line ID</label>
            <input
              type="text"
              name="lineId"
              value={formData.lineId}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-2 space-x-2">
            <label htmlFor="">Facebook</label>
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-2 space-x-2">
            <label htmlFor="">Discord ID</label>
            <input
              type="text"
              name="discord"
              value={formData.discord}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-6 space-x-2">
            <label htmlFor="">อาชีพ</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
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

export default FormTwo;
