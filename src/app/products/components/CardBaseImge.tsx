import { useState } from "react";
import Image from 'next/image';
import placeholderImage  from '@/assets/images/awf-logo.png'

export default function CardBaseImage({
    src,
    width,
    height,
    blurData,
    rest
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
        blurDataURL="blur"
        placeholder="blur"
        onError={()=>{
            setImgSrc(placeholderImage)
        }}
    />
}