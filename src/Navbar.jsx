import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const items = [
    {
      label: "Crypto Taxes",
      className: "font-bold",
      command: () => navigate("/cryptoTaxes"),
    },
    {
      label: "Free Tools",
      className: "font-bold",
      command: () => navigate("/freeTools"),
    },
    {
      label: "Resource Center",
      className: "font-bold",
      command: () => navigate("/resourceCenter"),
    },
    {
      template: (
        <Button
          label='Get Started'
          // severity='blue-700'
          badgeClassName='blue-700'
        />
      ),
      className: "mx-5",
    },
  ];

  const start = (
    <img
      alt='logo'
      src='https://primefaces.org/cdn/primereact/images/logo.png'
      height='40'
      className='mr-2'
      onClick={() => navigate("/")}
    ></img>
  );

  return (
    <div className='navbar-fixed bg-white '>
      <Menubar model={items} start={start} />
    </div>
  );
}
