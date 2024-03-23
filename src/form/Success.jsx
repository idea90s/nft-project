import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Success = () => {
  const router = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        router("/");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="text-lg text-center py-10 border-2 border-b-8 bg-secondary/50 my-10 rounded-md px-2">
      <span>🟢</span>
      <span className="text-[#04d13bdd] text-3xl">{` (( สำเร็จ )) `}</span>
      <span>
        ส่งแบบฟอร์มและรูปภาพของคุณแล้ว กรุณาอย่าส่งข้อมูลซ้ำ ขอบคุณค่ะ 🙏🏻
      </span>
      <p className="mt-4 font-light">
        กำลังไปยังหน้าแรกของเว็บไซต์ ภายใน
        <span className="text-[#e1a12c] text-3xl">{` ${countdown} `}</span>
        วินาที  {` ... `}
        {/* <Link to="/">คลิกเพื่อไปที่หน้าแรก</Link> */}
      </p>
    </div>
  );
};

export default Success;
