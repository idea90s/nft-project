import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { BiSolidUserDetail } from "react-icons/bi";

const FormOne = ({ onChangeForm }) => {
  const { addFormOne } = useContext(FormContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    district: "",
    province: "",
    zipcode: "",
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
      !formData.firstName &&
      !formData.lastName &&
      !formData.address &&
      !formData.district &&
      !formData.province &&
      !formData.zipcode
    ) {
      alert("💡 กรุณากรอกข้อมูลให้ครบทุกฟิลด์ก่อนนะคะ แล้วกดถัดไปได้เลยค่ะ 🙏🏻");
    } else {
      const randomFormId = Math.floor(Math.random() * 900000) + 100000;
      addFormOne(
        randomFormId,
        formData.firstName,
        formData.lastName,
        formData.address,
        formData.district,
        formData.province,
        formData.zipcode
      );
      onChangeForm("FormTwo");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 border-2 border-b-8 rounded-md p-6 mt-10 text-[white] bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary shadow-md shadow-[#c045a944]/10">
        <BiSolidUserDetail className="text-6xl" />
        <h3 className="text-2xl font-medium">ระบุข้อมูลส่วนตัว</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-5 border-2 border-b-8 rounded-md p-4 my-8 bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary py-10 px-6 shadow-lg shadow-[#c045a944]">
          <div className="col-span-3 space-x-2">
            <label htmlFor="">ชื่อจริง</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-3 space-x-2">
            <label htmlFor="">นามสกุล</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>

          <div className="col-span-6 space-x-2">
            <label htmlFor="">ที่อยู่</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-2 space-x-2">
            <label htmlFor="">อำเภอ</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-2 space-x-2">
            <label htmlFor="">จังหวัด</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-2 space-x-2">
            <label htmlFor="">รหัสไปรษณีย์</label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="border-2 border-[#fff] rounded-md bg-secondary/70 py-2 px-2 w-full focus:bg-primary focus:ring-2 ring-[#ffbd62] focus:border-[#c045a9]/50 focus:outline-none"
            />
          </div>
          <div className="col-span-6 space-x-2 p-2 mt-10">
            <button
              type="submit"
              className="border-2 border-b-8 rounded-md w-full py-3 bg-secondary bg-gradient-to-br from-[#5e67f0] to-[#9c0091] border-secondary/70 transform transition-transform duration-700 hover:scale-95 hover:bg-secondary hover:bg-gradient-to-bl hover:from-[#ed9d5b]/70 hover:to-[#9c0091]/70 text-xl"
            >
              ถัดไป
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormOne;
