'use client';


export default function ErrorBoundary({ error } : {
    error: Error
}) {
    console.log('ERROR', error.message)
    return (
        <div>{error.message}</div>
    )
}