import Logo from "../../assets/logo.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useMemo } from "react";

const navLinks = [
	"business",
	"entertainment",
	"general",
	"health",
	"science",
	"sports",
	"technology",
];

export default function Navbar() {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location)
	const handleClick = (newValue) => {
		if(location.pathname === "/news") navigate("/?category="+newValue)
		else setSearchParams({ category: newValue }); 
	};

	const activeLink = useMemo(() => {
		if(!searchParams.get("category")) return navLinks[0];
		else return searchParams.get("category")
	}, [searchParams])

	const handleSubmit = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.search.value;
        navigate(`/search?query=${searchQuery}`);
    };

	return (
		<div className={`fixed top-0 left-0 h-16 w-full z-20 border-b border-gray-100/20 bg-black/50 backdrop-blur-md`}>
			<div className="px-4 lg:px-8 flex gap-5 h-full">
				<div className="flex items-center">
                    <div>
					    <img src={Logo} alt="logo" className="max-w-full h-12" />
                    </div>
					<p className="text-3xl font-bold text-amber-500">Newsly</p>
				</div>
				<div className="ml-5">
                    <form className="flex items-center h-full" onSubmit={(e) => handleSubmit(e)}>
                        <input name="search" id="search" type="text" className="border-b md:w-80 border-gray-100/50 bg-transparent outline-none focus:bg-white/10 p-2 text-sm rounded" placeholder="Search here..." />
                        <button className="-ml-8 bg-amber-500 p-2 rounded-full">
                            <IoSearch />
                        </button>
                    </form>
                </div>
				<div className="absolute -left-full md:static md:flex ml-auto gap-4 items-center">
					{navLinks.map((link, index) => (
						<div key={index} onClick={() => handleClick(link)} className={`capitalize cursor-pointer ${activeLink === link ? "text-[#fcaa18]": "text-gray-200  hover:text-gray-100"}`}>
							{link}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
