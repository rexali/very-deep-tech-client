'use client'

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {

    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <div style={{ minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{maxWidth:'100%'}}>Something went wrong</h2><br />
            <p style={{maxWidth:'100%'}}>
                <button
                    onClick={() => reset()}
                >
                    Try again
                </button>
            </p>
        </div>
    )
}