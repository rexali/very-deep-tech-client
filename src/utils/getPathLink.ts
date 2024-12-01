'use client';

export function getPathLink() {
    if (typeof window !== "undefined") {
        const path = window.location.href;
       let next = window.localStorage.getItem("path") as string;
        window.location.assign(next);
    }
}