"use client";

export default function ErrorBoundary({
	error,
	reset, // It re-renders the components inside the error bondary.
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div>
			{error.message} <button onClick={reset}>Try again</button>{" "}
		</div>
	);
}

// Layout > Template > Error > Loading UI > Not Found > Page
