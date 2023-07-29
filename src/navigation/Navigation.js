// Navigation.js
import React from 'react';
import HomeIcon from '../icons/homeline.png';
import CollectionIcon from '../icons/check.png';
import LogoIcon from '../icons/logo.png';
import ReportIcon from '../icons/banknote.png';



const Navigation = ({ onNavigationItemClick }) => {
    return (
        <div>
            <div>
                <img className="img-logo" src={LogoIcon} alt="logo" />
            </div>
            <ul className="list-main">
                <li className="list" onClick={() => onNavigationItemClick('home')}>
                    <div className="d-flex">
                        <div>
                            <img className="img-icon" src={HomeIcon} alt="icon" />
                        </div>
                        <div className="list-name">
                            Home
                        </div>
                    </div>
                </li>
                <li className='list' onClick={() => onNavigationItemClick('collection')}>
                    <div className="d-flex">
                        <div>
                            <img className="img-icon" src={CollectionIcon} alt="icon" />
                        </div>
                        <div className="list-name">
                            Collection
                        </div>
                    </div>
                </li>
                <li className='list' onClick={() => onNavigationItemClick('reports')}>
                    <div className="d-flex">
                        <div>
                            <img className="img-icon" src={ReportIcon} alt="icon" />
                        </div>
                        <div className="list-name">
                            Reports
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default Navigation;
