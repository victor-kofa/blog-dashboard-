"use client";

import ErrorMessage from "@/components/ErrorMessage";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center">
      <ErrorMessage message={error.message || "Failed to load homepage."} />
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}
