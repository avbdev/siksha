import React, { useEffect, useMemo, useState } from "react";
import { apps } from "../../../mock/mock";

export interface IApps {
  AppName: string;
  AppId: string;
  Owner: string;
  UsersCount: number;
  __Id?: any;
}

interface ITableHeader {
  displayName: string;
  ariaLabel: string;
}

interface CustomTabHeader extends ITableHeader {
  appName: string;
  appId: string;
  owner: string;
  uniqueUsers: string;
}

interface ITableRows {
  data: CustomTabHeader[];
}

interface ITable {
  headers: ITableHeader[];
  rows: ITableRows[];
}

// export const Table: React.FC<ITable> = ({ headers, rows }) => {
export const Table: React.FC = () => {
  const [updatedApps, setUpdatedApps] = useState<IApps[]>();
  const [appName, setAppName] = useState<string>();
  const [appId, setAppId] = useState<string>();
  const [appOwner, setAppOwner] = useState<string>();

  const upApps = React.useMemo(() => {
    return apps;
  }, [apps]);
  // useMemo(())

  useEffect(() => {
    setUpdatedApps(apps);
  }, [upApps]);

  const handleAppNameFilter = (data?: any, data2?: any) => {
    const filteredApps = upApps.filter((item) =>
      item.AppName.toLowerCase().includes(data.target.value.toLowerCase())
    );

    setAppName(data.target.value);
    setUpdatedApps(filteredApps);
  };

  const handleAppIdFilter = (data?: any, data2?: any) => {
    const filteredApps = upApps.filter((item) =>
      item.AppId.toLowerCase().includes(data.target.value.toLowerCase())
    );

    setAppId(data.target.value);
    setUpdatedApps(filteredApps);
  };

  const handleAppOwnerFilter = (data?: any, data2?: any) => {
    const filteredApps = upApps.filter((item) =>
      item.Owner.toLowerCase().includes(data.target.value.toLowerCase())
    );

    setAppOwner(data.target.value);
    setUpdatedApps(filteredApps);
  };

  useEffect(() => {
    // console.log("Data", appName);
  }, [appName]);

  return (
    <div style={{ overflow: "auto", width: "100%" }}>
      <div>
        Filter by <br />
        <>
          <label>AppName: </label>
          <input
            type="text"
            name="App Name"
            value={appName}
            onChange={handleAppNameFilter}
          />
        </>
        <>
          <label>AppId: </label>
          <input
            type="text"
            name="AppId"
            value={appId}
            onChange={handleAppIdFilter}
          />
        </>
        <>
          <label>Owner: </label>
          <input
            type="text"
            name="AppOwner"
            value={appOwner}
            onChange={handleAppOwnerFilter}
          />
        </>
      </div>
      <table>
        <thead>
          <tr>
            <th>App Name</th>
            <th>App Id</th>
            <th>Owner Alias</th>
            <th>Users Count</th>
          </tr>
        </thead>

        <tbody>
          {updatedApps &&
            updatedApps.length > 0 &&
            updatedApps.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.AppName}</td>
                  <td>{data.AppId}</td>
                  <td>{data.Owner}</td>
                  <td>{data.UsersCount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

// <Table rows={rows} headers={headers} onClick={onClick} />
