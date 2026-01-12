import React from 'react';
import PageHeader from '../components/PageHeader';
import canvasHeader from '../assets/images/canvas_header.png';
import canvasIcon from '../assets/icons/canvas_icon.svg';

const InfinityCanvas = () => {
    return (
        <div>
            <PageHeader
                subtitle="Canvas of Made Of Curiosity"
                title="Infinity Canvas"
                backgroundImage={canvasHeader}
                icon={canvasIcon}
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

export default InfinityCanvas;
