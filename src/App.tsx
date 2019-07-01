import { Button, Carousel, Input, Menu } from 'element-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, {useState} from 'react'

import Readme from './Readme'
import Updates from './Updates'

import 'element-theme-default'

function App() {
  return (
    <Router>
      <Menu theme="light" defaultActive="1" mode="horizontal">
        <Menu.Item index="1"><Link to="/winxcorners">Home</Link></Menu.Item>
        <Menu.Item index="2"><Link to="/winxcorners/changelog">Changelog</Link></Menu.Item>
      </Menu>
      <Route path="/winxcorners" exact component={Readme} />
      <Route path="/winxcorners/changelog" component={Updates} />
    </Router>
  )
}

export default App
