import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export function dashbardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Dashboard(props) {
  const { userName } = useLoaderData();
  return (
    <>
      <h1>{userName}</h1>
      <div> Dashboard</div>
    </>
  );
}

export default Dashboard;
