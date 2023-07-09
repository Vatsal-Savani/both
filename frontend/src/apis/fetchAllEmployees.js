import axios from "axios"

export const fetchAllEmployees = async () => {
    const res = await axios.get("/getalldata");
    return res
}