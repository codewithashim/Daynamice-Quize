import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';

const MainLayouts = ({ children }) => {
    return (
        <main>
            <Navbar />
            <section>
                {children}
            </section>
        </main>
    );
};

export default MainLayouts;