import React, { Component } from 'react'
import Detail from '../components/Detail'

function DetailContainer() {
  return (
    <Detail
      weather={this.props.location.state.weather}
      city={this.props.routeParams.city} />
  )
}

module.exports = DetailContainer;