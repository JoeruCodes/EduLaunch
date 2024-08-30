"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { notifySuccess } from "@/core/constants";
import { useStateContext } from "@/core/CoreStateContext";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { address, connectWallet, transferTokens } = useStateContext();
  const [formData, setFormData] = useState({
    student_address: "",
    token_address: "",
    amount: 0,
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
      [id]: id === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission and page reload
    await transferTokens({
      address: formData.student_address,
      amount: formData.amount,
      tokenAdd: formData.token_address,
    });
    notifySuccess("Credits transfered")
  };
  return (
    <div className="flex flex-col w-full px-[27rem] py-20">
      <div className="rounded-lg border p-6 w-full">
        <h3 className="text-xl font-bold">Transfer Tokens</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="student_address">Student Address</Label>
            <Input
              id="student_address"
              type="text"
              placeholder="Enter token address"
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="token_address">Token Address</Label>
            <Input
              id="token_address"
              type="text"
              placeholder="Enter token address"
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Transfer Credits
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
