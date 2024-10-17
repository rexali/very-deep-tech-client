'use client'

import Image from "next/image";
import Link from "next/link";

function AWFLogo() {
    return (
        <Link href={'/'}>
            <Image
                src={require("../assets/images/cshop.png")}
                width={60}
                height={60}
                alt="AWF"
                style={{
                    borderRadius: 40,
                    margin: 5
                }} />
        </Link>
    );
}

export default AWFLogo;