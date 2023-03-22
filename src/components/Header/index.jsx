import React from 'react';
import Header from './header';
import SearchBar from '../SearchBar/index';
import { getUser } from '../../storage/utils';

export default function GlobalHeader() {
  return (
    <Header>
        <span className='title'>
            The Waystone Inn
        </span>
        <SearchBar />
        <a href='/'>Home</a>
        <a href={`/profile/?user=${getUser()}`}>Profile</a>
    </Header>
  )
}
