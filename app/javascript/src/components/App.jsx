import React from 'react'
import SelectedDeckList from '../containers/SelectedDeckList'
import VisibleCardList from '../containers/VisibleCardList'
import BannedList from './BannedList'
import OpponentCardList from '../containers/OpponentCardList'

const App = () => (
  <div className="">
    <SelectedDeckList />
    <div className="row">
      <VisibleCardList />
      <div className="col-md-4">
        <BannedList />
        <OpponentCardList />
      </div>
    </div>
  </div>
)

export default App