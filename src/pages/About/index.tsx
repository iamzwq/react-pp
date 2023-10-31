import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const About: FC = () => {
  return (
    <>
      <h1>About Page</h1>
      <nav>
        <ul className="flex space-x-4 list-none text-lg">
          <li>
            <Link to="about-sub">子页面</Link>
          </li>
          <li>
            <Link to="12">详情页</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default About;
