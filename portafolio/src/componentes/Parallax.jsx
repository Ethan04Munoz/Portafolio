import React, { useState, useEffect, useRef } from 'react';

const Parallax = ({
    strength = 0.5,
    backgroundImage,
    blur = 0,
    darken = 0,
    id,
    children,
}) => {
    const [offsetY, setOffsetY] = useState(0);
    const parallaxRef = useRef(null);

    const handleScroll = () => {
        if (parallaxRef.current) {
            const rect = parallaxRef.current.getBoundingClientRect();
            const offset = window.pageYOffset - rect.top;
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
        height: '500px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    };

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: `center ${-offsetY}px`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        filter: `blur(${blur}px) brightness(${100 - darken}%)`,
        zIndex: 1,
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: `rgba(0, 0, 0, ${darken / 100})`,
        zIndex: 2,
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#fff'
    };

    return (
        <div ref={parallaxRef} style={parallaxStyle} id={id}>
            <div style={backgroundStyle}></div>
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
                {children}
            </div>
        </div>
    );
};

export default Parallax;
