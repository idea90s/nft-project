import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { MdDesignServices } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

const FormSix = ({ onChangeForm }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("กรุณายอมรับข้อตกลงในการลงทะเบียน");
      return;
    }
    onChangeForm("Success");
  };

  const handleBack = (e) => {
    e.preventDefault();
    onChangeForm("FormFive");
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 border-2 border-b-8 rounded-md p-6 mt-10 text-[white] bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary shadow-md shadow-[#c045a944]/10">
        <FaHandsHelping className="text-6xl" />
        <h3 className="text-2xl font-medium">Contact สัญญา</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-5 border-2 border-b-8 rounded-md p-4 my-8 bg-gradient-to-bl from-[#471eae]/50 via-[#000]/90 to-primary py-10 px-6 shadow-lg shadow-[#c045a944]">
          <div className="col-span-6 space-x-2 flex items-center">
            <input type="checkbox" name="checkbox" onChange={handleChange} />
            <label htmlFor="checkbox">
              ยอมรับข้อตกลงร่วมกัน ในกรณีที่ผู้สมัครได้รับคัดเลือก
            </label>
          </div>

          <div className="col-span-6 space-x-2 flex flex-col justify-center">
            <ul className="pl-4 space-y-3 font-light">
              <li>{`( 1 )	ทางต้นสังกัดจะมีการกำหนดช่วงระยะในการให้ศิลปินสร้างสรรค์ผลงาน (ตามโจทย์ที่ทางต้นสังกัดมอบหมาย) `}</li>
              <li>{`( 2 )	ด้วยโครงการความร่วมมือระหว่าง สำนักงานนวัตกรรมแห่งชาติและมหาวิทยาลัยศิลปากร มีเงื่อนไขของโครงการตามขอบเขตงานเป็นระยะเวลา 8 เดือน ด้วยเงื่อนไขดังกล่าวนี้ ผู้สมัครหรือศิลปิน ต้องให้ความร่วมมือกับทางต้นสังกัดจนครบระยะเวลาดังกล่าว ตามเงื่อนไข เป็นสำคัญ จึงจะได้สิทธิ์ในการเข้าถึงผลประโยชน์ที่ทางต้นสังกัดให้ไว้`}</li>
              <li>
                {`( 3 )	ว่าด้วยเงื่อนไขทาง “กรรมสิทธิ์” และ “ลิขสิทธิ์”`}
                <ul className="pl-6 space-y-2">
                  <li>{`3.1	สำหรับผลงาน “จิตรกรรม” ผลงานจิตรกรรมทุกชิ้นที่ถูกสร้างขึ้นภายใต้โครงการฯ ทางต้นสังกัดจะถือว่ามีสิทธิ์ใน “กรรมสิทธิ์” ของผลงานนั้นๆ โดยชอบธรรมทั้งในรูปแบบ File (Smart Contact) และผลงานจริงทางกายภาพ ส่วน “ลิขสิทธิ์” จะเป็นของศิลปินผู้สร้างงาน หมายถึง ทุกครั้งที่เกิดการขายผลงานใน NFT. ภายใต้โครงการฯ ศิลปินจะได้รับส่วนแบ่งทุกครั้ง (ตามที่ต้นสังกัดเป็นผู้กำหนด) ดังนั้นเพื่อเป็นการป้องกันการดัดแปลงผลงานดังกล่าว ผลงานที่ถูกสร้างขึ้นภายใต้โครงการฯ ห้ามไม่ให้ศิลปินจำหน่ายทุกกรณี เว้นแต่โครงการฯ สิ้นสุดลง *ในกรณีผลงานนั้นขายไม่ได้ “กรรมสิทธิ์” จะถูกโอนกลับไปให้ศิลปินโดยชอบธรรม`}</li>
                  <li>{`3.2	สำหรับผลงาน “ดิจิทัล” ทางต้นสังกัดจะถือว่ามีสิทธิ์ใน “กรรมสิทธิ์” โดยชอบธรรมทุกกรณี ส่วน “ลิขสิทธิ์” จะเป็นของศิลปินผู้สร้างงาน หมายถึง ทุกครั้งที่เกิดการขายผลงานใน NFT. ภายใต้โครงการฯ ศิลปินจะได้รับส่วนแบ่งทุกครั้ง (ตามที่ต้นสังกัดเป็นผู้กำหนด)`}</li>
                </ul>
              </li>
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

export default FormSix;
