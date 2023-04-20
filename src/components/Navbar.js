import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const data = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Create Recipe",
    link: "/create-recipe"
  },
  {
    name: "Saved Recipe",
    link: "/saved-recipe"
  }
];

export default function Navbars() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["access_token"]);

  const logout = () => {
    setCookie("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/login");
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {data.map((item, index) =>
        <Typography
          as="li"
          variant="small"
          color="text-white"
          className="p-1 font-normal"
          key={index}
        >
          <Link to={item.link} className="flex items-center">
            {item.name}
          </Link>
        </Typography>
      )}
     {!cookies.access_token ? (
      <>
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="p-1 font-normal"
      >
        <Link to="/login" className="flex items-center">
          Login
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="p-1 font-normal"
      >
        <Link to="/register" className="flex items-center">
          Register
        </Link>
      </Typography>
      </>
      
     ) :(
      <Button className="text-red-500" color="red" buttonType="filled" size="regular" rounded={false} block={false} iconOnly={false} ripple="light" onClick={logout}>
        Logout
      </Button>
     )}
    </ul>
  );

  return (
    <Navbar className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between text-text-white-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>Recipe App</span>
        </Typography>
        <div className="hidden lg:block">
          {navList}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav
            ? <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            : <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}
