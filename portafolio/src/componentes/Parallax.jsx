import React, { useState, useEffect, useRef } from 'react';

const Parallax = ({ strength, backgroundImage, children }) => {
    const [offsetY, setOffsetY] = useState(0);
    const parallaxRef = useRef(null);

    const handleScroll = () => {
        if (parallaxRef.current) {
            const rect = parallaxRef.current.getBoundingClientRect();
            const offset = window.scrollY - rect.top;
            setOffsetY(offset * strength);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: `center ${-offsetY}px`,
        backgroundSize: 'cover',
        height: '500px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    };

    return (
        <div ref={parallaxRef} style={parallaxStyle}>
            <div style={contentStyle}>
                {children}
            </div>
        </div>
    );
};

export default Parallax;
