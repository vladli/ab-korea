import { useLocation, useNavigate } from "react-router-dom";
import { m } from "framer-motion";
import clsx from "clsx";

type Props = {
  items: ItemsProps;
  open?: any;
  setMobileNav?: any;
};

type ItemsProps = {
  name: string;
  link?: string;
  icon?: React.ReactElement;
}[];

const NavItem = ({ items, setMobileNav }: Props) => {
  const isActive = useLocation().pathname;
  const navigate = useNavigate();
  const navigateTo = (link: string) => () => {
    navigate(link);
    setMobileNav(false);
  };
  return (
    <>
      {items.map((item: any) => {
        const active = isActive === item.link;

        return (
          <m.li
            key={item.name}
            whileTap={{ scale: 0.97 }}
            className={clsx(active && `bordered`)}
            onClick={navigateTo(item.link)}
          >
            <div className="pl-8">
              {item.icon && item.icon}
              {item.name}
            </div>
          </m.li>
        );
      })}
    </>
  );
};

export default NavItem;
