import React, { FC } from "react";

const MobileMenu: FC = ({ setShow }) => {
  return (
    <div className="absolute top-0 right-0 flex flex-col justify-center items-center h-screen w-screen z-0 bg-primary">
      <p onClick={() => setShow(false)}>Menu</p>
    </div>
  );
};

export default MobileMenu;
