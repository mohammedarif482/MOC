import React from 'react';
import researchIcon from '../assets/icons/research_icon.svg';

const Features = () => {
    const features = [
        {
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
        {
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        },
    ];

    return (
        <section className="bg-black py-16 px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <img src={researchIcon} alt="Research" className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
