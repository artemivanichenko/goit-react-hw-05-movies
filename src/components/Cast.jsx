import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCreditsById } from '../Api/Api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getCreditsById() {
      try {
        const response = await fetchCreditsById(id);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCreditsById();
  }, [id]);

  // console.log(cast);
  return cast.length ? (
    <>
      <StyleProfileItem>
        {cast.map(profile => (
          <li key={profile.cast_id}>
            {profile.profile_path ? (
              <StyleProfileImage
                src={`https://image.tmdb.org/t/p/w200/${profile.profile_path}`}
                alt={profile.name}
              />
            ) : (
              <StyleProfileImage
                src="http://www.gravatar.com/avatar/?d=mp"
                alt="noname"
                width="300"
              />
            )}
            <StyleProfileInfo>{profile.name}</StyleProfileInfo>
            <StyleProfileInfo>Character: {profile.character}</StyleProfileInfo>
          </li>
        ))}
      </StyleProfileItem>
    </>
  ) : (
    <p>we don't have any information for this movie</p>
  );
};
export default Cast;

const StyleProfileItem = styled.ul`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 20px;
  list-style: none;
  margin-top: 20px;
`;
const StyleProfileImage = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
  position: relative;
  /* color: #ffffff; */
`;
const StyleProfileInfo = styled.p`
  font-size: 14px;
`;
