import React from 'react';
import { Facebook, Linkedin, Twitter} from 'lucide-react'; 
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        name: "George Kofi Akomeah",
        title: "Founder/Executive Director",
        image: "/images/George.jpeg", 
        socials: {
            facebook: "#",
            twitter: "#",
            linkedin: "https://www.linkedin.com/in/george-kofi-akomeah-4a54b2147/"
        }
    },
    {
        name: "Noah Nash Hoenyefia",
        title: "General Manager",
        image: "/images/Noah Nash.jpeg",
        socials: {
            facebook: "#",
            twitter: "#",
            linkedin: "https://www.linkedin.com/in/noah-nash-h-21a8a679/"
        }
    }
];

const TeamCard = () => {
    return (
        <div className="py-12 px-4 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-primary shadow-sm rounded-xl p-8 border border-blue-200 flex flex-col items-center md:flex-row">
                        <div className="md:w-1/4 flex justify-center md:justify-start">
                            <img className="w-32 h-30 rounded-full object-cover" src={member.image} alt={member.name} />
                        </div>
                        <div className="md:w-3/4 text-center md:text-left mt-4 md:mt-0 md:ml-6">
                            <h5 className="text-2xl text-gray-100 font-semibold">{member.name} </h5>
                            <p className='text-sm text-gray-200'>{member.title}</p>
                            <p className="text-gray-200 mt-2">{member.description}</p>
                            <div className="flex justify-center md:justify-start mt-4">
                                <Link to={member.socials.facebook} className="bg-blue-100 text-primary p-2 rounded-full mx-1">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link to={member.socials.twitter} className="bg-blue-100 text-primary p-2 rounded-full mx-1">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link to={member.socials.youtube} className="bg-blue-100 text-primary p-2 rounded-full mx-1">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamCard;
