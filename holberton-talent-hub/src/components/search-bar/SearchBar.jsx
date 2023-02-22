import { useState } from 'react';
import styled from 'styled-components';
import { Search, KeyboardArrowUp } from '@mui/icons-material/';

/* A styled component. */

export const SearchBarWrapper = styled.div`
  & {
    margin: 0px;
    display: flex;
    justify-content: center;
    padding: 10px;
    align-items: center;
    position: fixed;
    width: 100%;
    background: #2d333d;
    z-index: 1;
    height: 85px;
    transition: all 0.5s;
    box-shadow: 0px 0px 0px 1px #8beeee;
  }
  & .input-search {
    margin-right: 35px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    border-color: gray;
    border-style: double;
    font-size: 20px;
  }
  & .button-search {
    box-shadow: 2px 2px #000;
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    color: white;
    height: 40px;
    font-weight: 600;
    font-size: 20px;
    border-radius: 6px;
    background: #098177;
  }

  & .button-search:hover {
    background: #064f49;
  }

  & .button-activation-search {
    position: absolute;
    right: 20px;
    transition: all 0.5s;
    box-shadow: 2px 2px #000;
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 20px;
    border-radius: 6px;
    background: #098177;
  }

  & .button-activation-search:hover {
    background: #064f49;
  }
`;

export const SearchBar = () => {
  const [show, setShow] = useState(false);
  return (
    <SearchBarWrapper style={{ top: show ? '80px' : '0px' }}>
      <input className="input-search" type="text" placeholder="Search" />
      <button className="button-search" type="button">
        Search
      </button>
      <button
        className="button-activation-search"
        type="button"
        style={{ top: show ? '25px' : 'calc(100% + 20px)' }}
        onClick={() => setShow(!show)}
      >
        {show ? <KeyboardArrowUp /> : <Search />}
      </button>
    </SearchBarWrapper>
  );
};
