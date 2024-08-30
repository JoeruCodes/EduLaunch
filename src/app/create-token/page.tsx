"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStateContext } from "@/core/CoreStateContext";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { address, connectWallet, createERC20, tokenAddress } =
    useStateContext();
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    supply: 0,
  });

  useEffect(() => {
    if (!address) {
      connectWallet();
    }
  }, [address]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === "supply" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission and page reload
    createERC20({
      account: address,
      name: formData.name,
      supply: formData.supply,
      symbol: formData.symbol,
    });
  };

  return (
    <div className="flex flex-col w-full px-[27rem] py-20">
      <div className="rounded-lg border p-6 w-full">
        <h3 className="text-xl font-bold">Create Token</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Token Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter token name"
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="symbol">Token Symbol</Label>
            <Input
              id="symbol"
              type="text"
              placeholder="Enter token symbol"
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="total-supply">Total Supply</Label>
            <Input
              id="supply"
              type="number"
              placeholder="Enter total supply"
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">ICO Details Preview</h4>
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2">
              <span>Token Name:</span>
              <span>{formData.name || "Example Token"}</span>
              <span>Token Symbol:</span>
              <span>{formData.symbol || "EXT"}</span>
              <span>Total Supply:</span>
              <span>{formData.supply || 1000000}</span>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Create Token
          </Button>
        </form>
        <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
          {tokenAddress}
        </h1>
      </div>
    </div>
  );
};

export default Page;
