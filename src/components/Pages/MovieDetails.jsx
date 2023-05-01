import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import PropTypes from 'prop-types';

export const MovieDetails = ({ backdrop_path, original_title, id }) => {
  return (
    <StyleGalleryItem to={`/movies/${id}`} id={id}>
      <StyleGalleryImage
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={original_title}
      />
      <StyleGalleryInfo>{original_title}</StyleGalleryInfo>
    </StyleGalleryItem>
  );
};

const StyleGalleryItem = styled(NavLink)`
  width: 260px;
  height: 180px;
  border-radius: 4px;
  overflow: hidden;
  backdrop-filter: blur(2px);

  transition: transform 250ms cubic-bezier(0.1, 0, 0.1, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(239, 236, 236);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const StyleGalleryImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  position: relative;
  color: #ffffff;
`;
const StyleGalleryInfo = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.1428571429;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background-color: rgba(47, 48, 58, 0.8);
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: -10%;
  padding-bottom: 10px;
  padding-top: 10px;
`;
