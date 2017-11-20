import React from 'react'
import { connect } from 'react-redux'
import SelectedDeck from '../components/SelectedDeck'

const mapStateToProps = state => {
  return {
    playerDeck: state.playerDeck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playerDeck: []
  }
}

const SelectedDeckList = connect(mapStateToProps)(SelectedDeck)

export default SelectedDeckList