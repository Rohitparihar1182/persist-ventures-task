export default function Loading() {
	return (
		<div className="max-w-full max-h-screen aspect-[1.7/1] isolate animate-pulse">
			<div className="absolute inset-0 bg-gradient-to-t from-[#222] to-[#111"></div>
			
			<div className="grid items-end h-full z-10 relative">
				<div className="p-4 md:p-8 lg:p-16 text-start">
					<div className="bg-[#222] h-10 lg:h-24 w-3/4 rounded mb-4"></div>
					<div className="bg-[#222] h-6 lg:h-8 w-1/2 rounded mb-6"></div>
					<div className="mt-6 flex gap-4">
						<span className="bg-[#222] py-[6px] px-4 rounded-[50px] w-24 h-6"></span>
						<span className="bg-[#222] py-[6px] px-4 rounded-[50px] w-24 h-6"></span>
					</div>
				</div>
			</div>
		</div>
	);
}
