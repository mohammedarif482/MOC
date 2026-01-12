import React from 'react';
import PageHeader from '../components/PageHeader';
import missionStudiesHeader from '../assets/images/missionstudies_header.png';
import researchIcon from '../assets/icons/research_icon.svg';

const MissionStudies = () => {
    return (
        <div>
            <PageHeader
                subtitle="Studies of Made Of Curiosity"
                title="Mission Studies"
                backgroundImage={missionStudiesHeader}
                icon={researchIcon}
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

export default MissionStudies;
