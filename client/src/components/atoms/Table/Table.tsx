import React from "react";
import "./Table.css";
import { IRenderBodyProps, RenderBody } from "./TableBody";
import { IRenderHeaderProps, RenderHeaders } from "./TableHeaders";

interface ITableProps extends IRenderBodyProps, IRenderHeaderProps {}

export const Table: React.FC<ITableProps> = ({ items, headers }) => {
  if (!(items && items?.length)) return <></>;

  const keys: any[] = Object.keys(items[0]);
  return (
    <div>
      <table>
        <RenderHeaders
          {...{ headers: headers && headers.length > 0 ? headers : keys }}
        />
        <RenderBody {...{ items: items }} />
      </table>
    </div>
  );
};
