"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import useCredits from "@/hooks/use-credits";
import { createCheckoutSession } from "@/lib/stripe";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { InfoIcon } from "lucide-react";
import React from "react";

const Billing = () => {
  
    const [creditsToBuy, setCreditsToBuy] = React.useState<number[]>([100]);
    const creditsToBuYAmount = creditsToBuy[0]!;
    const price = (creditsToBuYAmount / 50).toFixed(2);
    const {credits} = useCredits();
    console.log('credits', credits);

  return (

    <div>
      <h1 className="text-xl font-semibold">Billing</h1>
      <div className="h-2"></div>
      <p className="text-sm text-gray-500">
        You currently have <span className="font-semibold">{credits}</span> credits.
      </p>
      <div className="h-2"></div>
      <div className="bg-green-50 px-4 py-2 rounded-md border border-green-200 text-gray-700">
        <div className="flex items-center gap-2">
          <InfoIcon className='size-4'/>
          <p className='text-sm'>Each chakam will cost <span className="font-semibold">5</span> credits </p>  
        </div>
        <p className='text-sm'> E.g, if you create 4 chakams, you will need 20 credits. </p>
      </div>
      <div className="h-4"></div>

      <Slider
      className="dark:text-[#fff] bg-[#fff] dark:bg-[#fff] text-[#fff]"
      value={creditsToBuy}
      onValueChange={value => setCreditsToBuy(value)}
      min={100}
      max={1000}
      step={50}
      />
      <Button
      className="mt-4 font-semibold dark:text-[#fff]"
      onClick={() => createCheckoutSession(creditsToBuYAmount)}
      >
        Buy {creditsToBuYAmount} credits for ${price}
      </Button>
        
    </div>
  )
}


export default Billing;