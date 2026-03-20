const AmbientGlow = ({ color = 'blue', size = 400, top, left, right, bottom, opacity = 0.07 }) => {
    const colors = {
        blue: '#3b82f6',
        purple: '#7c3aed',
        amber: '#f59e0b',
        cyan: '#06b6d4',
        green: '#10b981',
    };

    return (
        <div
            className="absolute rounded-full pointer-events-none"
            style={{
                width: size,
                height: size,
                background: colors[color] || color,
                filter: `blur(${size * 0.6}px)`,
                opacity,
                top, left, right, bottom,
            }}
        />
    );
};

export default AmbientGlow;
