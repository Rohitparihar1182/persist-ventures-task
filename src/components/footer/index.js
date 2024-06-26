import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
	return (
		<footer className="bg-neutral-900 text-white py-6">
			<div className="container p-4 md:p-8 lg:p-16 max-w-6xl mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-4">
					<div className="bg-neutral-800 p-4 lg:p-6">
						<div className="flex items-center">
							<div className="w-20">
								<img src={Logo} alt="logo" />
							</div>
							<div>
								<h3 className="font-bold text-4xl">Newsly</h3>
							</div>
						</div>
						<div className="mt-4">
							<p className="md:w-3/4">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. In quis voluptas iusto aliquam
								vel sapiente iure minus ipsum enim perferendis
								itaque, alias quos nulla nostrum provident nobis
								corporis ipsa nisi?
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="p-3">
							<div>
								<h3 className="font-semibold text-xl">
									Quick Links
								</h3>
							</div>
							<div className="my-6 border-b border-neutral-200"></div>
							<div>
								<ul className="flex flex-col gap-3 text-gray-200 text-sm font-medium">
									<li className="cursor-pointer">About Us</li>
									<li className="cursor-pointer">
										Contact Us
									</li>
									<li className="cursor-pointer">FAQ</li>
									<li className="cursor-pointer">
										Privacy Policy
									</li>
									<li className="cursor-pointer">
										Terms &amp; conditions
									</li>
								</ul>
							</div>
						</div>
						<div className="p-3">
							<div>
								<h3 className="font-semibold text-xl">
									Categories
								</h3>
							</div>
							<div className="my-6 border-b border-neutral-200"></div>
							<div>
								<ul className="flex flex-col gap-3 text-gray-200 text-sm font-medium">
									<li className="cursor-pointer">
										Entertainment
									</li>
									<li className="cursor-pointer">Sports</li>
									<li className="cursor-pointer">Business</li>
									<li className="cursor-pointer">General</li>
									<li className="cursor-pointer">
										Technology
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
