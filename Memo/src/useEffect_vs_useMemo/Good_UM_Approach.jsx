import { useEffect, useState, useMemo } from "react";
import axios from "axios";

function Good_UseMemo() {
  const [ProductList, setProductList] = useState([]);
  const [search, SetSearch] = useState("");

  const filterCondition = (item) => {
    if (item.description.toLowerCase().includes(search.toLowerCase()))
      return true;

    if (item.title.toLowerCase().includes(search.toLowerCase())) return true;

    if (item.category.toLowerCase().includes(search.toLowerCase())) return true;

    return false;
  };

  useEffect(() => {
    console.log("Use-Effect with No-dependency called ");
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProductList(res.data);
    });
  }, []);

  let filteredResult = useMemo(() => {
    console.log("Use-Memo with dependency called");
    let matchResult = ProductList.filter((item) => filterCondition(item));
    // setFilterResult(matchResult);
    return matchResult;
  }, [search, ProductList]);

  console.log("🔁Re-render");

  return (
    <>
      <h3>GOOD Approach</h3>
      <input
        placeholder="Enter the product details"
        value={search}
        onChange={(e) => {
          SetSearch(e.target.value);
        }}
      ></input>
      <p>{search ? "🔎Search Result" : "🛍️Product List"}</p>
      <ul style={{ listStyle: "none" }}>
        {filteredResult.map((item) => (
          <li
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))",
              margin: "20px",
              borderRadius: "20px",
              padding: "5px",
            }}
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Good_UseMemo;
