import React, { useState } from 'react';
import Navigation from '../../navigation/Navigation';
import HomeScreen from '../../screens/Home/Home';
import ReportsScreen from '../../screens/Reports/Report';
import CollectionScreen from '../../screens/Collection/Collection';
import ContentScreen from '../../screens/Content/ContentScreen';
import './style.css';


const LandingScreen = () => {
    const [currentScreen, setCurrentScreen] = useState('home');
    const handleNavigationItemClick = (screen) => {
        setCurrentScreen(screen);
    };
    const renderScreenContent = () => {
        switch (currentScreen) {
            case 'home':
                return <HomeScreen />;
            case 'collection':
                return <CollectionScreen />;
            case 'reports':
                return <ReportsScreen />;
            default:
                return <div>Screen not found</div>;
        }
    };

    return (
        <div className="landing">
            <div className="left-pannel">
                
                <Navigation onNavigationItemClick={handleNavigationItemClick} />
            </div>
            <div style={{ flex: 6, }}>
                <ContentScreen screenName={currentScreen} />
                {renderScreenContent()}
            </div>
        </div>


    );
};

export default LandingScreen;
