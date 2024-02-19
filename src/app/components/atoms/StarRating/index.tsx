import React, { useState } from 'react';
import styled from 'styled-components';

interface StarIconProps {
  readonly className?: string;
  readonly onClick?: () => void;
}

const StarRatingContainer = styled.div`
  display: inline-block;
`;

const StarIcon = styled.span<StarIconProps>`
  width: 25.3px;
  height: 24.1px;
  font-size: 24px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: gold;
  }

  &.active {
    color: gold;
  }
`;

interface ReviewStarRatingProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

const ReviewStarRating: React.FC<ReviewStarRatingProps> = ({ initialValue = 0, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleStarClick = (value: number) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StarRatingContainer>
      {[1, 2, 3, 4, 5].map((value) => (
        <StarIcon
          key={value}
          className={value <= rating ? 'active' : 'text-[#D2D2D2]'}
          onClick={() => handleStarClick(value)}
        >
          ★
        </StarIcon>
      ))}
    </StarRatingContainer>
  );
};

export default ReviewStarRating;
