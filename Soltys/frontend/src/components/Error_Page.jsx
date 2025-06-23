
import React from 'react';
import { Frown } from 'lucide-react';

const Error_Page = () => {
    return (
        <div className="flex flex-col justify-center items-center text-7xl mt-[150px] text-gray-600">
            <Frown className="w-80 h-80" />
            <h1 className=" font-semibold text-9xl mb-6"> 404 </h1>
            <h2 className=" text-neutral-400 mb-6"> Page not found</h2>
            <p className="text-center text-gray-500 text-base max-w-xl mt-6"> The Page you are looking for doesn't exist or an other error occurred. <br></br> 
                <span className="text-gray-700 font-medium"> Go back, or head over weebir.com to choose a new direction.</span> 
            </p>
        </div>

    );
};

export default Error_Page;
