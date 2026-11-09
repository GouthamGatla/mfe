import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

const Dashboard = ({onSignIn}) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default Dashboard;
