import React from 'react';

interface GenreBadgeProps {
    genre: string;
    onClick: () => void;
    isActive: boolean;
}

const GenreBadge: React.FC<GenreBadgeProps> = ({ genre, onClick, isActive }) => {
    return (
        <button
            className={`genre-badge ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {genre}
        </button>
    );
};

export default GenreBadge;
