import React, { useEffect } from "react";
import { getData } from "../../../utils/endpoints";
import { GetEndPoint } from "../../../utils/endpoints/GetEndPoints";
import { Table } from "../../atoms/Table";
import "./App.css";

interface IApp {}

export const App: React.FC<IApp> = () => {
  const styles = {};

  const { Users } = GetEndPoint;

  useEffect(() => {
    const c = getData(Users);
    console.log(
      c.then((data) => {
        console.log("data", data);
      })
    );
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

  return (
    <div style={styles}>
      {/* Content Area */}
      <Table />
    </div>
  );
};
