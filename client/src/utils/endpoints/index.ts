import axios from "axios";
import { DeleteEndPoint } from "./DeleteEndPoints";
import { GetEndPoint } from "./GetEndPoints";
import { PatchEndPoint } from "./PatchEndPoints";
import { PostEndPoint } from "./PostEndPoints";

export const getData = (endpoint: GetEndPoint) => {
  return axios
    .get(endpoint)
    .then((res: any) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const postData = (endpoint: PostEndPoint) => {};

export const patchData = (endpoint: PatchEndPoint) => {};

export const deleteData = (endpoint: DeleteEndPoint) => {};
