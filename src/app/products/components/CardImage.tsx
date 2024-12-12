'use client'
import Image from 'next/image';
import placeholderImage from '@/assets/images/cshop.png'
import * as React from "react";

export default function CardImage(props: any) {
    const [imgSrc, setImgSrc] = React.useState<any>(props.src);

    return <Image
        src={imgSrc}
        alt={props.alt}
        style={{
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            borderRadius: 20,
        }}
        width={345}
        height={245}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABkCAYAAADZn8isAAABFElEQVR42u3UMQEAAAQAMHL4FFVYCCG8W4hlb00A8JZCBRAqgFABhAqAUAGECiBUAKECIFQAoQIIFQChAggVQKgAQgVAqABCBRAqgFABECqAUAGECoBQAYQKIFQAoQIgVAChAggVQKgACBVAqABCBUCoAEIFECqAUAEQKoBQAYQKgFABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQqlABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQKgA/Bz0MpgVVm/VcAAAAAElFTkSuQmCC"
        onError={() => {
            setImgSrc(placeholderImage)
        }}

    />
}