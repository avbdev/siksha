import React, { useEffect, useState } from "react";
import { apps } from "../../../mock/mock";
import { getData } from "../../../utils/endpoints";
import { GetEndPoints } from "../../../utils/endpoints/GetEndPoints";
import { Table } from "../../atoms/Table/Table";
import { Toggle } from "../../atoms/Toggle/Toggle";
import "./App.css";

interface IApp {}

export const App: React.FC<IApp> = () => {
  const styles = {};

  const { Users } = GetEndPoints;

  console.log("Statement 001");
  console.log("Statement 002");
  console.log("Statement 003");
  console.log("Statement 004");
  console.log("Statement 005");

  useEffect(() => {
    // const c = getData(Users);
    // console.log(
    //   c.then((data) => {
    //     console.log("data", data);
    //   })
    // );

    console.log("Effect 001");
  }, []);

  useEffect(() => {
    console.log("Effect 002");
  }, []);

  useEffect(() => {
    console.log("Effect 003");
  }, []);

  useEffect(() => {
    console.log("Effect 004");
  }, []);

  useEffect(() => {
    console.log("Effect 005");
  }, []);

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <Sidebar />
      <ContentArea />
    </div>
  );
};

interface ISidebar {}
const Sidebar: React.FC<ISidebar> = () => {
  const styles = {
    display: "flex",
    minWidth: "200px",
    maxHeight: "100vh",
    height: "100vh",
    background: "#161B30",
    overflow: "hidden",
    borderRadius: "5px",
  };
  return <div style={styles}>Sidebar</div>;
};

interface IContentArea {}
const ContentArea: React.FC<IContentArea> = () => {
  const styles = {
    display: "flex",
    maxHeight: "100vh",
    flex: 1,
    // background: "red",
    height: "100vh",
    zIndex: 1,
    borderRadius: "5px",
    // overflow: "hidden",
  };

  const [isToggled, setIsToggled] = useState<boolean>(true);
  return (
    <div style={styles}>
      {/* Content Area */}
      {/* <Table /> */}
      <Table items={apps} />
      {/* <Toggle /> */}
      <Toggle
        rounded
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
    </div>
  );
};
