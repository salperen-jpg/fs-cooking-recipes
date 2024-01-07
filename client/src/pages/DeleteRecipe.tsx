import { redirect } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ params }: any) => {
  const { id } = params;
  try {
    await customFetch.delete(`/recipes/${id}`);
    toast.success("deleted successfully !");
    return redirect("/recipes");
  } catch (error: any) {
    return toast.error(error?.response?.data?.msg);
  }
};
