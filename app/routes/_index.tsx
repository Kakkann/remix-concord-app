import type { MetaFunction } from "@remix-run/node";
import Home from "~/pages/home";
import home from "~/pages/home";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {


  return (
    <Home></Home>
  );
}
