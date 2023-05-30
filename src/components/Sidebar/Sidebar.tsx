import Item from "./Item";
import MenuConfig from "../../config/MenuConfig";
import { useAuth } from "../../context/AuthContext";
import Logo from "components/Logo";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "router/paths";
import DarkModeSwitch from "components/DarkModeSwitch";
import UserInfo from "./UserInfo";
import Weather from "./Weather";
import LanguageSwitch from "components/LanguageSwitch";
import Button from "components/Button";
import Divider from "components/Divider";

const Sidebar = ({ setMobileNav }: any) => {
  const { isAuthenticated, role } = useAuth();
  return (
    <div className="menu max-w-[18rem] bg-base-100">
      <div className="mx-2 mt-2 flex justify-end lg:hidden">
        <Button
          color="ghost"
          fullWidth
          responsive
          onClick={() => setMobileNav(false)}
        >
          Close
        </Button>
      </div>
      <div className="flex justify-center p-2">
        <div className="flex-none">
          <Link to={PATH_PAGE.root}>
            <Logo />
          </Link>
        </div>
        <DarkModeSwitch />
        <LanguageSwitch />
      </div>
      {isAuthenticated && <UserInfo />}
      <ul className="font-semibold">
        {MenuConfig(role).map<any>((menu, index) => (
          <Item key={index} items={menu} {...{ setMobileNav }} />
        ))}
      </ul>
      <Divider />
      {<Weather />}
      <Divider />
    </div>
  );
};

export default Sidebar;
