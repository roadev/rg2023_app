import { useEffect } from "react";
import { getAllPoints } from "../services/api";

const callService = async () => {
  const points = await getAllPoints();

  console.log("-------", points);
  return points;
};

const Counter = () => {
  useEffect(() => {
    callService();
  }, []);
};

export default Counter;
