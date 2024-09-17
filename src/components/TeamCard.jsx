import React from 'react';
import { Facebook, Twitter, Youtube,  } from 'lucide-react'; // Import icons

const teamMembers = [
    {
        name: "George Kofi Akomeah",
        title: "Founder/Executive Director",
        // description: "A naturalist is a person who studies the natural world, including plants, animals, and their environments.",
        image: "/images/1.jpg", 
        socials: {
            facebook: "#",
            twitter: "#",
            youtube: "#"
        }
    },
    {
        name: "Noah Nash Hoenyefia",
        title: "General Manager",
        // description: "A naturalist is a person who studies the natural world, including plants, animals, and their environments.",
        image: "/images/2.jpg",
        socials: {
            facebook: "#",
            twitter: "#",
            youtube: "#"
        }
    }
];

const TeamCard = () => {
    return (
        <div className="py-16 px-4 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 flex flex-col items-center md:flex-row">
                        <div className="md:w-1/4 flex justify-center md:justify-start">
                            <img className="w-32 h-32 rounded-full object-cover" src={member.image} alt={member.name} />
                        </div>
                        <div className="md:w-3/4 text-center md:text-left mt-4 md:mt-0 md:ml-6">
                            <h5 className="text-2xl font-semibold">{member.name} <span className="text-gray-500">/ {member.title}</span></h5>
                            {/* <p className="text-gray-600 mt-2">{member.description}</p>
                            <div className="flex justify-center md:justify-start mt-4">
                                <a href={member.socials.facebook} className="bg-green-100 text-green-500 p-2 rounded-full mx-1">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href={member.socials.twitter} className="bg-green-100 text-green-500 p-2 rounded-full mx-1">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href={member.socials.youtube} className="bg-green-100 text-green-500 p-2 rounded-full mx-1">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamCard;
