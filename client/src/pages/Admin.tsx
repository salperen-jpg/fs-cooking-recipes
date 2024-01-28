import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import { FaUsers } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { Title } from "../components";

export const loader = async () => {
  try {
    const {
      data: { users, recipes },
    } = await customFetch("/user/admin");
    return { users, recipes };
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Admin = () => {
  const { recipes, users } = useLoaderData() as {
    recipes: number;
    users: number;
  };
  const cartArray = [
    {
      id: nanoid(),
      icon: <FaUsers />,
      text: "total users",
      value: users,
    },
    {
      id: nanoid(),
      icon: <PiCookingPotFill />,
      text: "total recipes",
      value: recipes,
    },
  ];
  return (
    <>
      <Title title="Admin" />
      <section className="grid gap-4 md: grid-cols-4">
        {cartArray.map((cart) => {
          const { id, icon, text, value } = cart;
          return (
            <article
              key={id}
              className="p-12 bg-emerald-300 text-white flex flex-col gap-4  items-center hover:shadow-lg outline-32 outline-white outline -outline-offset-8 duration-100 "
            >
              <span className="text-2xl text-emerald-900">{icon}</span>
              <span className="capitalize tracking-wider font-bold font-mono">
                {text}
              </span>
              <span className="text-2xl">{value}</span>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default Admin;
