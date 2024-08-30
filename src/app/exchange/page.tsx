"use client";
import { Button } from "@/components/ui/button";
import { shortenAddress } from "@/core/constants";
import { useStateContext } from "@/core/CoreStateContext";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { address, GET_ALL_PRESALE_TOKENS, connectWallet, buyToken } =
    useStateContext();
  const [list, setList] = useState<any[]>([]); // Ensure it's an array

  useEffect(() => {
    const connect = async () => {
      await connectWallet();
      const tokens = await GET_ALL_PRESALE_TOKENS();
      if (Array.isArray(tokens)) {
        setList(tokens);
      } else {
        console.error("GET_ALL_USER_PRESALE_TOKENS did not return an array.");
      }
    };
    connect();
  }, [address]);
  
  return (
    <div className="flex flex-col w-full p-20 space-y-10">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
        Welcome to the Exchange
      </h1>
      <div className="rounded-lg border">
        <div className="grid grid-cols-[repeat(5,minmax(0,1fr))] items-center border-b p-4 font-medium">
          <div>Name</div>
          <div>Symbol</div>
          <div>Token</div>
          <div>University</div>
          <div></div>
        </div>
        <div className="divide-y">
          {list.map((l: any, i: any) => (
            <div
              key={i} // Add a key to the list items
              className="grid grid-cols-[repeat(5,minmax(0,1fr))] items-center p-4"
            >
              <div>{l.name}</div>
              <div>{l.symbol}</div>
              <div>{shortenAddress(l.token)}</div>
              <div>{shortenAddress(l.creator)}</div>
              <div className="">
                <Button onClick={async () => await buyToken(l.token, 1)}>Exchange</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
