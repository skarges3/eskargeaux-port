import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { PageWrapper } from '../theme/Basics'

export const Topic = ({ match, location }) => (
  <PageWrapper>
          <div class="logo"><img src="/assets/images/logo.png"/>></div>
          <div class="social"><img src="/assets/images/social.png"/>></div>
          <div class="img"></div>
          <div class="img-{match.params.topicId}"></div>
          <div class="img_mask"></div>
          <div class="titlecard"></div>
          <div class="gridlines"><div></div></div>
          <div class="gridlines2"></div>
          <div class="gridlines3"><div></div></div>
          <div class="gridlines4"></div>
          <div class="title-desc">
              <h1>{location.key}<br/>{match.params.topicId}</h1>
              <p>Working with a creative design agency can feel pretty Lorem ipsum dolor, 
                  sit amet consectetur adipisicing elit. Corrupti dolor maiores possimus 
                  quos illum quisquam sequi repudiandae facilis tempora. Natus in saepe d
                  ignissimos amet nostrum reiciendis, officiis voluptatum possimus eveniet.
              </p>
              <div>
              <a class="button" href="/{match.params.topicId}">VIEW MORE</a>
              </div>
          </div>
          <div class="page-title"><span>&nbsp;&nbsp;OUR WORKS</span></div>
          <div class="arrow-l"><a href="/topics/{match.params.topicId}" id="previous"><span></span></a></div>
          <div class="arrow-r"><a href="/Project2" id="next"><span></span></a></div>
          <div class="counter"><span class="current">01</span><span class="slash">/</span><span class="total">04</span></div>
  </PageWrapper>
)

export const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} component={Topic}/>
  </div>
)