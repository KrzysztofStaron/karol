"use client";

import { useEffect, useState } from "react";
import { product } from "./api/getProducts/route";
import { ProductCard } from "@/components/product-card";
import { Spinner } from "@/components/Spinner";

function foo() {
  const [data, setData] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/getProducts");
      const newData = await response.json();

      console.log(newData);
      setData(newData);
      setIsLoading(false);
    }

    getData();
  }, []);

  if (isLoading === true) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner />;
      </div>
    );
  }

  return (
    <>
      {data.map((e, i) => {
        return (
          <ProductCard key={i} name={e.name} price={e.price} currency={e.currency} banner={e.banner}></ProductCard>
        );
      })}
    </>
  );
}

export default foo;
