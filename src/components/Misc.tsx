import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from '@radix-ui/react-label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const Misc = () => {
  return (
    <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Buy Crypto Tokens
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Securely purchase your desired crypto tokens and participate
                  in the future of decentralized finance.
                </p>
              </div>
              <div className="rounded-lg border p-6 w-full">
                <h3 className="text-xl font-bold">Buy Token</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="token">Token</Label>

                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a token" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                        <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
                        <SelectItem value="solana">Solana (SOL)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="payment">Payment Method</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bitcoin">Bitcoin</SelectItem>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="usdc">USDC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Token Price</span>
                      <span>$50,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total Cost</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Buy Token
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Create Your Own ICO
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  List your crypto ICO on our platform and reach a wider
                  audience of investors.
                </p>
              </div>
              <div className="rounded-lg border p-6 w-full max-w-2xl">
                <h3 className="text-xl font-bold">Create ICO</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="token-name">Token Name</Label>
                    <Input
                      id="token-name"
                      type="text"
                      placeholder="Enter token name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="token-symbol">Token Symbol</Label>
                    <Input
                      id="token-symbol"
                      type="text"
                      placeholder="Enter token symbol"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="total-supply">Total Supply</Label>
                    <Input
                      id="total-supply"
                      type="number"
                      placeholder="Enter total supply"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="token-price">Token Price</Label>
                    <Input
                      id="token-price"
                      type="number"
                      placeholder="Enter token price"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">ICO Details Preview</h4>
                    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2">
                      <span>Token Name:</span>
                      <span>Example Token</span>
                      <span>Token Symbol:</span>
                      <span>EXT</span>
                      <span>Total Supply:</span>
                      <span>1,000,000</span>
                      <span>Token Price:</span>
                      <span>$0.50</span>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Create ICO
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Create Your Own Token
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mint your own unique crypto token and list it on our
                  marketplace.
                </p>
              </div>
              <div className="rounded-lg border p-6 w-full max-w-2xl">
                <h3 className="text-xl font-bold">Create Token</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="token-name">Token Name</Label>
                    <Input
                      id="token-name"
                      type="text"
                      placeholder="Enter token name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="token-symbol">Token Symbol</Label>
                    <Input
                      id="token-symbol"
                      type="text"
                      placeholder="Enter token symbol"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="total-supply">Total Supply</Label>
                    <Input
                      id="total-supply"
                      type="number"
                      placeholder="Enter total supply"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="decimals">Decimals</Label>
                    <Input
                      id="decimals"
                      type="number"
                      placeholder="Enter number of decimals"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">Token Details Preview</h4>
                    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2">
                      <span>Token Name:</span>
                      <span>Example Token</span>
                      <span>Token Symbol:</span>
                      <span>EXT</span>
                      <span>Total Supply:</span>
                      <span>1,000,000</span>
                      <span>Decimals:</span>
                      <span>18</span>
                    </div>
                  </div>
                  <Button type="submit" className="w-" />
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Misc