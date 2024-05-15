"use client"

import {extendVariants, Button as NextButton} from "@nextui-org/react";

export const Button = extendVariants(NextButton, {
  variants: {
    // <- modify/add variants
    color: {
      primary: "text-[#fffff] bg-[#005fc3]",
      bordered: "bg-[transparent] text-[#fffff] border",
      violet: "bg-[#8b5cf6] text-[#fff]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#fffff] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small",
      xl: "px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-medium",
    },
  },
  defaultVariants: { // <- modify/add default variants
    color: "primary",
    size: "md",
  },
  compoundVariants: [ // <- modify/add compound variants
    {
      isDisabled: true,
      color: "primary",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});