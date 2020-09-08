import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

export const Page = props => {
  const { year, photos, isFetching, getPhotos } = props
  const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014]

  const clickHandler = event => {
    const year = +event.currentTarget.innerText
    getPhotos(year)
  }

  const listImg = photos.map(item => (
    <div key={item.id} className="iimg">
      <img src={item.sizes[4].url} alt="" />
      <div>{item.likes.count} &#10084;</div>
    </div>
  ))

  const listButton = years.map((item, index) => (
    <button key={index} onClick={clickHandler}>
      {item}
    </button>
  ))

  return (
    <div>
      <div className="btnGroup">{listButton}</div>
      {isFetching ? <p>Загрузка ...</p> : <p>У тебя {photos.length} фото за {year} год </p>}
      <div className="listImg">{listImg}</div>
    </div>
  )
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}
