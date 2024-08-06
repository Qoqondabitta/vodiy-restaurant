import React from 'react'
import { Container, ImageWrapper, MealImage } from './style'
import "../textSlider/text.css"
import { mealImages } from '../../../constants/componentconstants/about';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTitle } from '../../../redux/title';

const MealSlider = () => {
    const dispatch = useDispatch()
  return (
    <Container>
      <NavLink style={{textDecoration: "none"}} to="/menu">
        <ImageWrapper onClick={()=>dispatch(changeTitle("main"))} className="just-start textSlider">
          {mealImages.map((v, i) => (
            <MealImage key={i} src={v} />
          ))}
        </ImageWrapper>
      </NavLink>
    </Container>
  );
}

export default MealSlider