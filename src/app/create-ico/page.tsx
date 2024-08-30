"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { notifySuccess } from "@/core/constants";
import { useStateContext } from "@/core/CoreStateContext";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { address, connectWallet, createICOSale } = useStateContext();
  const [formData, setFormData] = useState({
    address: "",
  });

  useEffect(() => {
    const connect = async () => {
      await connectWallet();
    };

    connect();
  }, [address]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === "total-supply" ? Number(value) : value,
    }));
  };
  return (
    <div className="flex flex-col w-full px-[27rem] py-56 h-screen items-center">
      <div className="rounded-lg border p-6 w-full">
        <h3 className="text-xl font-bold">Create ICO</h3>
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            await createICOSale(formData.address);
            notifySuccess("ICO created!")
          }}
        >
          <div>
            <Label htmlFor="address">Token Address</Label>
            <Input
              id="address"
              type="text"
              placeholder="Enter token address"
              className="w-full"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Create ICO
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
