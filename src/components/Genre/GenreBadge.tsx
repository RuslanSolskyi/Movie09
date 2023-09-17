import React from 'react';
// import './GenreBadge.css';

interface GenreBadgeProps {
    genre: string;
    isActive: boolean;
    onClick: () => void;
}

const GenreBadge: React.FC<GenreBadgeProps> = ({ genre, isActive, onClick }) => {
    const badgeClasses = `genre-badge ${isActive ? 'active' : ''}`;

    return (
        <button className={badgeClasses} onClick={onClick}>
            {genre}
        </button>
    );
};

export default GenreBadge;
