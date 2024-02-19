import { redirect } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import { QueryClient } from "@tanstack/react-query";

export const action = (queryClient: QueryClient) => {
  return async ({ params }: any) => {
    const { id } = params;
    try {
      await customFetch.delete(`/recipes/${id}`);
      await queryClient.invalidateQueries({ queryKey: ["recipes"] });
      toast.success("deleted successfully !");
      return redirect("/recipes");
    } catch (error: any) {
      return toast.error(error?.response?.data?.msg);
    }
  };
};
