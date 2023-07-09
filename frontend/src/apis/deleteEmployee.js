import axios from "axios"

export const deleteEmployee = async () => {
    const res = await axios.delete("/deleteEmployee");

    return res;
}