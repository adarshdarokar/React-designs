import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

export const App = () => {
  const users = [
    { img: "https://images.unsplash.com/photo-1769436275855-6f3911ab11d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "satisfied", tag: "underServed" },
    { img: "https://images.unsplash.com/photo-1769436275855-6f3911ab11d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "satisfied", tag: "underwear" },
    { img: "https://images.unsplash.com/photo-1769596569191-af3209b603c2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "satisfied", tag: "undersear" },
  ];
  return (
    <div>
   
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
