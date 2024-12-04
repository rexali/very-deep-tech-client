'use client'

import dynamic from "next/dynamic";

export const CartListComponent = dynamic(
    ()=>import("./CartList").then((mod)=>mod.default),
    {
        ssr:false
    }
) 