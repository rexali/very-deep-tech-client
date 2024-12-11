import { useState } from "react";
import Image from 'next/image';
import placeholderImage  from '@/assets/images/cshop.png'

export default function CardBaseImage({
    src,
    width,
    height,
    blurData,
    ...rest
}: {
    src: string,
    width: number,
    height: number,
    blurData: any,
    rest: any
}) {
    const [imgSrc, setImgSrc] = useState<any>(src)

    return <Image
        src={src}
        alt={''}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABkCAYAAADZn8isAAABFElEQVR42u3UMQEAAAQAMHL4FFVYCCG8W4hlb00A8JZCBRAqgFABhAqAUAGECiBUAKECIFQAoQIIFQChAggVQKgAQgVAqABCBRAqgFABECqAUAGECoBQAYQKIFQAoQIgVAChAggVQKgACBVAqABCBUCoAEIFECqAUAEQKoBQAYQKgFABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQqlABhAogVAChAiBUAKECCBVAqAAIFUCoAEIFQKgAQgUQKoBQARAqgFABhAogVACECiBUAKECIFQAoQIIFUCoAAgVQKgAQgUQKgA/Bz0MpgVVm/VcAAAAAElFTkSuQmCC"
        onError={()=>{
            setImgSrc(placeholderImage)
        }}
    />
}