import React from 'react';
import PageHeader from '../components/PageHeader';
import documentationHeader from '../assets/images/documentation_header.png';
import documentationIcon from '../assets/icons/documentation_icon.svg';

const Documentations = () => {
    return (
        <div>
            <PageHeader
                subtitle="Docs of Made Of Curiosity"
                title="Documentations"
                backgroundImage={documentationHeader}
                icon={documentationIcon}
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

export default Documentations;
