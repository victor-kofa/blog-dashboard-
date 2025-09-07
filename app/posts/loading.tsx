export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="p-4 border rounded-lg shadow animate-pulse space-y-2"
        >
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  );
}
