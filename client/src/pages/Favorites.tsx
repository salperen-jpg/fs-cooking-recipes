import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const response = await customFetch("/favorites");
    console.log(response);
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
  return null;
};

const Favorites = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Favorites</div>;
};
export default Favorites;
