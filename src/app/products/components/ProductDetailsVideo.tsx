'use client'
import { useEffect, useState } from "react";
export function ProductDetailsVideo({ src }: { src: string }) {
    const [videoSrc, setVideoSrc] = useState<any>();

    useEffect(() => {
        async function getVideoSrc() {
            let response = await fetch(src);
            if (response.ok) {
                setVideoSrc(await response.json());
            } else {
                setVideoSrc('https://www.youtube.com/embed/tgbNymZ7vqY');
            }
        }
        getVideoSrc();
    }, [src]);

    return <iframe src={videoSrc} width={420} height={315} />
}