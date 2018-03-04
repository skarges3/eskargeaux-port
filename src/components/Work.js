import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { PageWrapper, Logo } from '../theme/Basics'
import Project1 from './Project1'
import Project2 from './Project2'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import './styles.css'
import './slider-animations.css'

const content = [
	{
		title: 'Generous Giving',
		description: 'I’ve worked for a small non-profit for the past four years ― three of which have been as their sole employee working on design, brand, and web development.',
		button: 'Learn more',
		image: 'https://static1.squarespace.com/static/5869635e29687f6648fff881/5869717b1b631bf4190efd11/586ae010d2b85773857a2f7b/1486166025163/thumbnails-18.jpg?format=1500w',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png',
		link: '/work/generousgiving'
	},
	{
		title: 'Wider Seas',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://static1.squarespace.com/static/5869635e29687f6648fff881/586ae40c5016e1c664554c4a/586ae42e59cc688787ccba03/1483400270837/thumbnails-09.jpg?format=1500w',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png',
		link: '/work/widerseas'
	},
	{
		title: 'Third',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png',
		link: '/work/third'
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
                    <div className="img" style={{ background: `url('${item.image}')` }}></div>
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