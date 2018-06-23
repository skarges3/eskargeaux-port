import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { PageWrapper, Logo } from '../theme/Basics'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import './styles.css'
import './slider-animations.css'

const content = [
	{
		title: 'Generous Giving Branding',
		description: 'I’ve worked for a small non-profit for the past four years ― three of which have been as their sole employee working on design, brand, and web development.',
		button: 'Learn more',
		image: require('../assets/projects/gg/thumb-03.png'),
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png',
		link: '/work/generousgiving'
	},
	{
		title: 'Website and Invitation system',
		description:
		'Generous Giving uses Salesforce to integrate their CRM, website, and event registrations. I redesigned the front-end of the site and helped implement an invitation system with user input and animated evites.',
		button: 'check it out',
		image:  require('../assets/projects/gg/beach-sand-water.jpeg'),
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png',
		link: '/work/jog'
	},
	{
		title: 'Plowshares',
		description:
		'A simply good coffee bag for simply good coffee.',
		button: 'See it here',
		image: require('../assets/projects/plowshares/thumb-04.png'),
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png',
		link: '/work/plowshares'
	},
	{
		title: 'Plan A Wealth Management',
		description:
		'A wealth management firm in Lincoln, NE.',
		button: 'View the Brand',
		image: require('../assets/projects/plana/thumb-02.png'),
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png',
		link: '/work/plana'
	}
];


class Work extends Component {
    render() {
        return (
            <Slider duration={2000} className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					
				>   
                    <div className="img" style={{ backgroundImage: `url('${item.image}')` }}></div>
                    <div class="gridlines"><div></div></div>
                    <div class="gridlines2"></div>
                    <div class="gridlines3"><div></div></div>
                    <div class="gridlines4"></div>
                    <div className="img-mask"></div>
                    
					<div className="page-title"><h2><span>&mdash;&mdash;</span> WORK</h2></div>
					<div className="title-card"></div>
					<div className="title-desc">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
					<Link className="button" exact to={item.link}>{item.button}</Link>
                    
                    </div>
                    <div className="counter"><span>{index + 1}</span></div>
					
				</div>
			))}
		</Slider>
        )
      }
}
export default Work