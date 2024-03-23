const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
      {/* backgroud */}
      <div className="realtive">
        <img
          src="imgs/bg.png"
          alt=""
          className="h-[36rem] bottom-0 absolute left-0 object-contain"
        />
        <img
          src="imgs/bg.png"
          alt=""
          className="h-[36rem] bottom-0 absolute left-[40rem] object-contain hidden md:block"
        />
        <img
          src="imgs/bg.png"
          alt=""
          className="h-[36rem] bottom-0 absolute right-0 object-contain hidden md:block"
        />
        {/* <img
          src="imgs/bg.png"
          alt=""
          className="w-full h-[40rem] bottom-0 right-[-8rem] absolute object-contain overflow-hidden"
        />
        <img
          src="imgs/bg.png"
          alt=""
          className="w-full h-[40rem] bottom-0 right-[-51rem] absolute object-contain overflow-hidden"
        /> */}
      </div>
    </main>
  );
};

export default MainLayout;
