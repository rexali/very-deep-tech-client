// 'use client'
import Fallback from "@/components/common/fallback";
// import { useEffect, useState } from "react";
export function ProductDetailsVideo({ src }: { src: string }) {
    // const [videoSrc, setVideoSrc] = useState<any>('');
    // useEffect(() => {
    //     async function getVideoSrc() {
    //         let response = await fetch('https://www.youtube.com/embed/tgbNymZ7vqY');
    //         if (response.ok) {
    //             setVideoSrc(await response.json());
    //         } else {
    //             setVideoSrc('https://www.youtube.com/embed/tgbNymZ7vqY');
    //         }
    //     }
    //     getVideoSrc();
    // }, [src]);

    if (!src) {
        return <Fallback item={'No Video Demo Now'} />
    }

    return <iframe src={src} width={420} height={315} />
}