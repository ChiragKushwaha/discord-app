import { invoke } from "@tauri-apps/api/tauri";
import { NextPage } from "next";
import { useEffect } from "react";

// Note: When working with Next.js in development you have 2 execution contexts:
// - The server (nodejs), where Tauri cannot be reached, because the current context is inside of nodejs.
// - The client (webview), where it is possible to interact with the Tauri rust backend.
// To check if we are currently executing in the client context, we can check the type of the window object;
const isClient = typeof window !== "undefined";

// Now we can call our Command!
// Right-click on the application background and open the developer tools.
// You will see "Hello, World!" printed in the console.
isClient &&
  invoke("greet", { name: "World" }).then(console.log).catch(console.error);

const Home: NextPage = () => {
  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error);
  }, []);
  return <div></div>;
};
export default Home;
