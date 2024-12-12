'use client'
import Image from 'next/image';
import placeholderImage from '@/assets/images/cshop.png'
import * as React from "react";

export default function CardImage(props:any) {
    const [imgSrc, setImgSrc] = React.useState<any>(props.src);
    const dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABkCAYAAADZn8isAAABFElEQVR42u3UMQEAAAQAMHL4FFVYCCG8W4hlb00A8JZCBRAqgFABhAqAUAGECiBUAKECIFQAoQIIFQChAggVQKgAQgVAqABCBRAqgFABECqAUAGECoBQAYQKIFQAoQIgVAChAggVQKgACBVAqABCBUCoAEIFECqAUAEQKoBQAYQKgFABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQqlABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQKgA/Bz0MpgVVm/VcAAAAAElFTkSuQmCC"

    return <Image
        src={imgSrc}
        alt={props.alt}
        {...props}
        placeholder="blur"
        blurDataURL={dataUrl}
        onError={() => {
            setImgSrc(placeholderImage)
        }}
        
    />
}