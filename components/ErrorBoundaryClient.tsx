"use client"

import { ErrorBoundary } from "react-error-boundary"

export default function ErrorBoundaryClient({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallbackRender={({ error, resetErrorBoundary }) => (
      <div>
        <p>Something went wrong: {error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )}>
      {children}
    </ErrorBoundary>
  )
}
