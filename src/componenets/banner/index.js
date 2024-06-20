import {
	useGetTopHeadlinesQuery,
	useSearchNewsQuery,
} from "../../state/news/apiSlice";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import required styles

const tempData = [
	{
		source: {
			id: null,
			name: "Yahoo Entertainment",
		},
		author: "Mat Smith",
		title: "Civilization 7 is coming in 2025",
		description:
			"The historical turn-based strategy series Civilization is getting another mainline sequel — and it's been a long time coming. Civilization VI came out back in 2016, and while we've seen a lot of DLC in the interim, there's been no word on sequels til now. \nCi…",
		url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_acd203e4-5a44-4af4-9ee6-3726e04f3caf",
		urlToImage:
			"https://cdn.vox-cdn.com/thumbor/YNx3b93YCYUuiOahXNl0qmKyFuU=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22478770/acastro_210429_1777_0001.jpg",
		publishedAt: "2024-06-07T21:36:56Z",
		content:
			"If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
	},
	{
		source: {
			id: null,
			name: "Slashdot.org",
		},
		author: "feedfeeder",
		title: "Civilization 7 is coming in 2025",
		description:
			"The historical turn-based strategy series Civilization is getting another mainline sequel — and it's been a long time coming. Civilization VI came out back in 2016, and while we've seen a lot of DLC in the interim, there's been no word on sequels til now.\n Ci…",
		url: "https://slashdot.org/firehose.pl?op=view&amp;id=174082321",
		urlToImage:
			"https://cdn.vox-cdn.com/thumbor/YNx3b93YCYUuiOahXNl0qmKyFuU=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22478770/acastro_210429_1777_0001.jpg",
		publishedAt: "2024-06-07T21:52:41Z",
		content:
			"The historical turn-based strategy series Civilization is getting another mainline sequel — and it's been a long time coming. Civilization VI came out back in 2016, and while we've seen a lot of DLC … [+645 chars]",
	},
];

export default function Banner() {
	return (
		<Carousel
			showThumbs={false} // Optional prop to hide thumbnails
			autoPlay={true} // Optional prop for automatic play
		>
			{tempData.map((data, index) => (
				<div
					key={index}
					className="max-w-full max-h-screen aspect-[1.7/1] isolate"
				>
					<div className="absolute inset-0 bg-gradient-to-t from-black to-75% to-black/30"></div>
					<div className="absolute inset-0 -z-10">
						<img
							className="w-full h-full object-cover"
							src={data.urlToImage}
							alt={data.title}
						/>
					</div>
					<div className="flex items-end h-full z-10 relative">
						<div className="p-4 md:p-8 lg:p-16 text-start max-w-[800px]">
							<h3 className="text-2xl lg:text-6xl font-bold">
								{data.title}
							</h3>
						</div>
					</div>
				</div>
			))}
		</Carousel>
	);
}
