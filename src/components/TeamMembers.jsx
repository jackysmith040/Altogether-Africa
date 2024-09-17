import React from 'react';
import { Facebook, Twitter, Youtube, Behance } from 'lucide-react'; // lucide-react icons

const teamMembers = [
  {
    name: 'Denial Pasha',
    title: 'CEO',
    description:
      'A naturalist is a person who studies the natural world, including plants, animals, and their environments.',
    image: '/path-to-image/denial.jpg', // Replace with your image path
  },
  {
    name: 'Jane Coper',
    title: 'Founder',
    description:
      'A naturalist is a person who studies the natural world, including plants, animals, and their environments.',
    image: '/path-to-image/jane.jpg', // Replace with your image path
  },
];

const TeamCard = ({ member }) => (
  <div className="bg-white shadow-lg rounded-lg p-8 flex items-center space-x-6 max-w-md mx-auto">
    {/* Profile Image */}
    <img
      className="w-24 h-24 rounded-full object-cover"
      src={member.image}
      alt={member.name}
    />
    <div>
      {/* Name and Title */}
      <h3 className="text-xl font-bold text-gray-800">
        {member.name}{' '}
        <span className="text-gray-500 font-normal">/ {member.title}</span>
      </h3>
      {/* Description */}
      <p className="text-gray-600 mt-2">{member.description}</p>
      {/* Social Media Icons */}
      <div className="mt-4 flex space-x-4">
        <Link
          to="#"
          className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200"
        >
          <Facebook className="w-5 h-5" />
        </Link>
        <Link
          to="#"
          className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200"
        >
          <Twitter className="w-5 h-5" />
        </Link>
        <Link
          to="#"
          className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200"
        >
          <Behance className="w-5 h-5" />
        </Link>
        <Link
          to="#"
          className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200"
        >
          <Youtube className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold mb-12">
        Meet Our Team
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
