import React from "react";
import { isPrimitive, ObjectValues } from "./Utils";

export interface IRenderBodyProps {
  //   headerProps?: any;
  //   headerContainerProps?: any;
  items?: any[];
}

export const RenderBody: React.FC<IRenderBodyProps> = (props) => {
  const { items } = props;

  return (
    <tbody>
      {items &&
        items.map((item: any, index: number) => {
          return (
            <tr>
              {ObjectValues(item).map((entry) => (
                <td>{isPrimitive(entry) ? entry : ""}</td>
              ))}
            </tr>
          );
        })}
    </tbody>
  );
};
