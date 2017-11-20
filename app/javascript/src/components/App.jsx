import React from 'react'
import Footer from './Footer'
import SelectedDeckList from '../containers/SelectedDeckList'
import VisibleCardList from '../containers/VisibleCardList'

const App = () => (
  <div className="container">
    <SelectedDeckList />
    <VisibleCardList />
    <Footer />
  </div>
)

export default App