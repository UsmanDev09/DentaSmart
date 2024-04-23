'use client';

import { toast } from "react-toastify";

export default function ErrorBoundary({ error } : {
    error: Error
}) {
    console.log('ERROR', error.message)
    return (
        <div>{error.message}</div>
    )
}