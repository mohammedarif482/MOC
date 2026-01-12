import React from 'react';
import PageHeader from '../components/PageHeader';
import curiosityCodeHeader from '../assets/images/curiositycode_header.png';
import curiosityCodeIcon from '../assets/icons/curiositycode_icon.svg';

const CuriosityCode = () => {
    return (
        <div>
            <PageHeader
                subtitle="Code of Made Of Curiosity"
                title="Curiosity Code"
                backgroundImage={curiosityCodeHeader}
                icon={curiosityCodeIcon}
            />
            {/* Page content goes here */}
            <div className="bg-black min-h-screen py-20 px-8">
                <div className="container mx-auto">
                    {/* Content placeholder */}
                </div>
            </div>
        </div>
    );
};

export default CuriosityCode;
