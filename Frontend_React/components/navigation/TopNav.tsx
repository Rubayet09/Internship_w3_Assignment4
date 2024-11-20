import React from 'react';
import Link from 'next/link';

const TopNav = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
      <div className="flex gap-6 items-center ml-auto">
        <Link href="#" className="text-sm text-gray-800 hover:text-gray-600">
          United States
        </Link>
        <Link href="#" className="text-sm text-gray-800 hover:text-gray-600">
          Trip Boards
        </Link>
        <Link href="#" className="text-sm text-gray-800 hover:text-gray-600">
          List your property
        </Link>
        <Link href="#" className="text-sm text-gray-800 hover:text-gray-600">
          Help
        </Link>
        <Link href="#" className="text-sm text-gray-800 hover:text-gray-600">
          My trips
        </Link>
        <Link href="#" className="text-sm font-medium text-gray-800 hover:text-gray-600">
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;