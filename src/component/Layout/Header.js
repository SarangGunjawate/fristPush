import {Fragment} from 'react'
import mealsImage from '../../img/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';


const Header = props => {
  return (
  <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            {/* <button className={classes.btn1}>Cart 1</button>
             */}
             <HeaderCartButton onClick={props.onShow}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="" />
        </div>
    </Fragment>
  );
};

export default Header