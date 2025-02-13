import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

import wave from "../assets/wave.svg";
import Nav from "../components/Nav";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Main(props) {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} />
    </div>
  );
}

export default Main;
