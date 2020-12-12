import React, { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC<{}> = () => (
  <>
    <h1>Home</h1>
    <Link to={"/counter"}>counter</Link>
  </>
);

export default Home;
