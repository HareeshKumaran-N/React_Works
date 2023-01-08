import { useEffect, useMemo, useState } from "react";

export const Day13UseMemoExampleOneBadWay = () => {
  const [counter, setCounter] = useState(0);

  const getColor = () => {
    console.log("Get color re-render");
    return "#bf0d0d";
  };

  console.log("Re-render");

  return (
    <>
      <p style={{ color: getColor() }}>Counter: {counter}</p>
      <button onClick={() => setCounter((count) => count + 1)}>
        Increment
      </button>
    </>
  );
};

export const Day13UseMemoExampleOneGoodWay = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(getColor());
  }, []);

  const getColor = () => {
    console.log("Get color re-render");
    return "#bf0d0d";
  };

  console.log("Re-render");

  return (
    <>
      <p style={{ color: color }}>Counter: {counter}</p>
      <button onClick={() => setCounter((count) => count + 1)}>
        Increment
      </button>
    </>
  );
};

export const Day13UseMemoExampleOneBestWay = () => {
  const [counter, setCounter] = useState(0);

  const getColor = () => {
    console.log("Get color re-render");
    return "#bf0d0d";
  };

  const color = useMemo(() => {
    return getColor();
  }, []);

  console.log("Re-render");

  return (
    <>
      <p style={{ color: color }}>Counter: {counter}</p>
      <button onClick={() => setCounter((count) => count + 1)}>
        Increment
      </button>
    </>
  );
};
