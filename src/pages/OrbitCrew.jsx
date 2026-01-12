import React from 'react';
import PageHeader from '../components/PageHeader';
import orbitCrewHeader from '../assets/images/orbitcrew_header.png';
import orbitCrewIcon from '../assets/icons/orbitcrew_icon.svg';

const OrbitCrew = () => {
    return (
        <div>
            <PageHeader
                subtitle="Join Our Mission Crew"
                title="Orbit Crew"
                backgroundImage={orbitCrewHeader}
                icon={orbitCrewIcon}
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

export default OrbitCrew;
