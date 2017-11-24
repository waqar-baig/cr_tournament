import React from 'react'
import VisibleCardList from '../containers/VisibleCardList'
import OpponentCardList from '../containers/OpponentCardList'

const App = () => (
  <div className="wrapper">
    <OpponentCardList />
    <VisibleCardList />
  </div>
)

export default App