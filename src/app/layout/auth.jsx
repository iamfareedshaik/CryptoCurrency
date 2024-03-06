import Navbar from "../../Navbar";
export const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
