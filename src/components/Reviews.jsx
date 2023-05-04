import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../Api/Api';
import styled from 'styled-components';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getReviewsById() {
      try {
        const response = await fetchReviewsById(id);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getReviewsById();
  }, [id]);

  return reviews.length ? (
    <>
      <StyleReviewItem>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <StyleReviewInfo>{review.content}</StyleReviewInfo>
          </li>
        ))}
      </StyleReviewItem>
    </>
  ) : (
    <p>we don't have any review for this movie</p>
  );
};

export default Reviews;

const StyleReviewItem = styled.ul`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  margin-top: 20px;
`;

const StyleReviewInfo = styled.p`
  font-size: 14px;
`;
