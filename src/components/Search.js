import React, { useState } from 'react'
import './Search.css'

import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchTerm } from '../features/searchSlice'

const Search = ({ hideButton = false }) => {
  const [input, setInput] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const search = (e) => {
    e.preventDefault()
    dispatch(searchTerm({
      term: input
    }))
    history.push('/search')
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={e=> setInput(e.target.value)}/>
        <MicIcon />
      </div>
      {!hideButton ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
      ):(
        <div className="search__buttons">
          <Button className="search__btnHide" type="submit" onClick={search} variant="outlined">Google Search</Button>
          <Button className="search__btnHide" variant="outlined">I'm Feeling Lucky</Button>
      </div>
      )}
    </form>
  )
}

export default Search
