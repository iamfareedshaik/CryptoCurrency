import Navbar from "../../Navbar";

export const GuestLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
