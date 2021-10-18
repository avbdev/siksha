import React from "react";
import { isPrimitive } from "./Utils";

export interface IRenderHeaderProps {
  headerProps?: any;
  headerContainerProps?: any;
  headers?: any[];
}

export const RenderHeaders: React.FC<IRenderHeaderProps> = (props) => {
  const { headerProps, headerContainerProps, headers } = props;

  return (
    <thead>
      <tr>
        {headers &&
          headers.map((header, index) => {
            return <th key={index}>{isPrimitive(header) ? header : ""}</th>;
          })}
      </tr>
    </thead>
  );
};
