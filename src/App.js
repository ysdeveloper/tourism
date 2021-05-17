import {React, useEffect, useState} from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './components/home_page'
import ContactPage from './components/contact_page'
import DestinationPage from './components/destination_page'
import DestinationDetailPage from './components/destination_detail_page'

// css
import './css/style.css'
import './css/responsive.css'
import './css/all.min.css'

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  },[location])

  return (
    <div className="App">
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={HomePage} />
              <Route path="/our-contacts" exact component={ContactPage} />
              <Route path="/destinations" exact component={DestinationPage} />
              <Route path="/destinations/:destination" exact component={DestinationDetailPage} />
            </Switch>
          </AnimatePresence>
          <Footer />
    </div>
  );
}

export default App;