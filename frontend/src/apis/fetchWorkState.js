import axios from "axios";

export const fetchWorkState = async (setdata) => {
  const response = await axios.get("/getGenderRatio");
  setdata(response.data);
};
