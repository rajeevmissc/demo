// LinksPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa'; // Icon for dropdown
import Logo from '../Logo';

// Styles
const styles = {
    container: { margin: '20px' },
    header: { textAlign: 'center', padding: '20px' },
    title: { color: '#ffffff', fontSize: '2em', marginBottom: '30px' },
    nav: { marginTop: '40px' },
    navList: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        listStyleType: 'none',
        padding: 0,
        position: 'relative',
    },
    link: {
        color: 'white', // Default color is white
        textDecoration: 'none',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.1em',
        fontWeight: '500',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease, transform 0.2s ease, color 0.3s ease', // Add color transition
    },
    linkHover: {
        backgroundColor: '#e0e0e0',
        transform: 'scale(1.05)',
        color: '#333', // Change color to dark when hovered
    },
    dropdownMenu: {
        position: 'absolute',
        top: '100%',
        left: '50%', // Center align horizontally
        transform: 'translateX(-50%)', // Move to the center
        backgroundColor: '#555',
        color: 'white',
        padding: '12px 0',
        borderRadius: '8px',
        listStyleType: 'none',
        marginTop: '8px',
        minWidth: '180px',
        zIndex: 1,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        opacity: 0,
        visibility: 'hidden',
        transform: 'translateY(-10px) translateX(-50%)',
        transition: 'all 0.3s ease',
    },
    dropdownItem: {
        padding: '10px 20px',
        fontSize: '1em',
        fontWeight: '400',
        margin: 0,
    },
    dropdownLink: {
        color: '#f0f0f0',
        textDecoration: 'none',
        display: 'block',
        transition: 'color 0.2s ease',
    },
    dropdownLinkHover: {
        color: '#ddd',
    },
    showDropdown: {
        opacity: 1,
        visibility: 'visible',
        transform: 'translateY(0) translateX(-50%)',
    },
};

// Dropdown menu component
const DropdownMenu = ({ items, show }) => {
    return (
        <ul style={{ ...styles.dropdownMenu, ...(show ? styles.showDropdown : {}) }}>
            {items.map((item, index) => (
                <li key={index} style={styles.dropdownItem}>
                    <Link
                        to={item.path}
                        style={styles.dropdownLink}
                        onMouseEnter={(e) => e.target.style.color = styles.dropdownLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.dropdownLink.color}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const LinksPage = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [hoveredLink, setHoveredLink] = useState(null);

    const dropdownItems = {
        hrPortal: [
            { path: '/web-developer', label: 'Web Developer' },
            { path: '/software-engineer', label: 'Software Engineer' },
            { path: '/cloud-engineer', label: 'Cloud Engineer' },
            { path: '/accounting', label: 'Accounting' },
            { path: '/audit', label: 'Audit' },
        ],
        report: [
            { path: '/tablesheet', label: 'Report Sheet' },
        ],
        position: [
            { path: '/hr', label: 'HR' },
            { path: '/legal', label: 'Legal' },
        ],
    };

    return (
        <div style={styles.container}>
            <Logo />
            <div style={styles.header}>
                <h1 style={styles.title}>Dashboard</h1>
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        {/* HR Portal with dropdown */}
                        <li
                            style={{ position: 'relative' }}
                            onMouseEnter={() => { setOpenDropdown('hrPortal'); setHoveredLink('hrPortal'); }}
                            onMouseLeave={() => { setOpenDropdown(null); setHoveredLink(null); }}
                        >
                            <Link
                                to="/link1"
                                style={{
                                    ...styles.link,
                                    ...(hoveredLink === 'hrPortal' ? styles.linkHover : {}),
                                }}
                            >
                                HR Portal <FaCaretDown style={{ marginLeft: '5px' }} />
                            </Link>
                            <DropdownMenu items={dropdownItems.hrPortal} show={openDropdown === 'hrPortal'} />
                        </li>

                        {/* Report with dropdown */}
                        <li
                            style={{ position: 'relative' }}
                            onMouseEnter={() => { setOpenDropdown('report'); setHoveredLink('report'); }}
                            onMouseLeave={() => { setOpenDropdown(null); setHoveredLink(null); }}
                        >
                            <Link
                                to="/jobform"
                                style={{
                                    ...styles.link,
                                    ...(hoveredLink === 'report' ? styles.linkHover : {}),
                                }}
                            >
                                Report <FaCaretDown style={{ marginLeft: '5px' }} />
                            </Link>
                            <DropdownMenu items={dropdownItems.report} show={openDropdown === 'report'} />
                        </li>

                        {/* Position with dropdown */}
                        <li
                            style={{ position: 'relative' }}
                            onMouseEnter={() => { setOpenDropdown('position'); setHoveredLink('position'); }}
                            onMouseLeave={() => { setOpenDropdown(null); setHoveredLink(null); }}
                        >
                            <Link
                                to="/timesheet"
                                style={{
                                    ...styles.link,
                                    ...(hoveredLink === 'position' ? styles.linkHover : {}),
                                }}
                            >
                                Position <FaCaretDown style={{ marginLeft: '5px' }} />
                            </Link>
                            <DropdownMenu items={dropdownItems.position} show={openDropdown === 'position'} />
                        </li>

                        {/* Regular link without dropdown */}
                        <li>
                            <Link
                                to="/link4"
                                style={{
                                    ...styles.link,
                                    ...(hoveredLink === 'jobCreate' ? styles.linkHover : {}),
                                }}
                                onMouseEnter={() => setHoveredLink('jobCreate')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                Job Create
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default LinksPage;
