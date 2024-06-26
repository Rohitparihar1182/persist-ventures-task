export default function Loading() {
	return (
		<div className="mt-4 p-8 max-w-6xl">
			<div className="grid grid-cols-3 gap-4 p-2 mb-5 animate-pulse">
				{/* Placeholder for image */}
				<div className="bg-neutral-800 h-48 rounded-md"></div>

				{/* Placeholder for title */}
				<div className="col-span-2 row-span-1">
					<div className="bg-neutral-800 h-full rounded p-5">
                        <div className="bg-neutral-700 h-12 mb-2"></div>
                        <div className="flex items-center text-sm text-gray-300 mb-4 space-x-2">
                            <div className="bg-neutral-700 h-4 w-20 rounded"></div>
                            <div className="bg-neutral-700 h-4 w-20 rounded"></div>
                        </div>
                        
                        <div className="bg-neutral-700 h-12 mb-2"></div>
                    </div>
				</div>
			</div>
		</div>
	);
}
