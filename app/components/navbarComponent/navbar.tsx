export const NavBar = () => {
  return (
    <div className="grid grid-cols-5 gap-4 w-full p-5">
      <div className="col-span-2 bg-blue-300">BlogTitleandLogo</div>
      <div className="bg-blue-300">Date</div>
      <div className="col-end-6 bg-blue-300 ">Login and Profile</div>
    </div>
  );
};
