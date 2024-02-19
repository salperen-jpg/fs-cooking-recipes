import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import { FaUsers } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { Title } from "../components";
import { QueryClient, useQuery } from "@tanstack/react-query";

interface IAdmin {
  recipes: number;
  users: number;
}

const adminQuery = () => {
  return {
    queryKey: ["admin"],
    queryFn: async (): Promise<IAdmin> => {
      const {
        data: { users, recipes },
      } = await customFetch("/user/admin");
      return { users, recipes };
    },
  };
};

export const loader = (queryClient: QueryClient) => {
  return async () => {
    try {
      return await queryClient.ensureQueryData(adminQuery());
    } catch (error: any) {
      toast.error(error?.response?.data?.msg);
    }
    return null;
  };
};

const Admin = () => {
  const { isLoading, data } = useQuery(adminQuery());

  if (isLoading) return <></>;

  const { recipes, users } = data as IAdmin;

  const cartArray = [
    {
      id: nanoid(),
      icon: <FaUsers />,
      text: "total users",
      val: users,
    },
    {
      id: nanoid(),
      icon: <PiCookingPotFill />,
      text: "total recipes",
      val: recipes,
    },
  ];
  console.log(cartArray);
  return (
    <>
      <Title title="Admin" />
      <section className="grid gap-4 md: grid-cols-4">
        {cartArray.map((cart) => {
          const { id, icon, text, val } = cart;
          return (
            <article
              key={id}
              className="p-12 bg-emerald-300 text-white flex flex-col gap-4  items-center hover:shadow-lg outline-32 outline-white outline -outline-offset-8 duration-100 "
            >
              <span className="text-2xl text-emerald-900">{icon}</span>
              <span className="capitalize tracking-wider font-bold font-mono">
                {text}
              </span>
              <span className="text-2xl">{val || 2}</span>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default Admin;
