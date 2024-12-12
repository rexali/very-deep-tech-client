'use client';
import { useState } from "react";
import Image from 'next/image';
import placeholderImage from '@/assets/images/cshop.png'
import { getBlurDataURL } from "../utils/getBlurDataUrl";

export default function CardImage(props: any) {
    const [base, setBase] = useState<any>();
    (async () => {
        const { base64 } = await getBlurDataURL(props.src)
        setBase(base64);
    })()
    const [imgSrc, setImgSrc] = useState<any>(props.src);
    const dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABkCAYAAADZn8isAAABFElEQVR42u3UMQEAAAQAMHL4FFVYCCG8W4hlb00A8JZCBRAqgFABhAqAUAGECiBUAKECIFQAoQIIFQChAggVQKgAQgVAqABCBRAqgFABECqAUAGECoBQAYQKIFQAoQIgVAChAggVQKgACBVAqABCBUCoAEIFECqAUAEQKoBQAYQKgFABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQqlABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQKgA/Bz0MpgVVm/VcAAAAAElFTkSuQmCC"
    return <Image
        src={imgSrc}
        alt={props.alt}
        width={props.width}
        height={props.height}
        placeholder="blur"
        blurDataURL={base ?? dataUrl}
        onError={() => {
            setImgSrc(placeholderImage)
        }}
        {...props}
    />
}