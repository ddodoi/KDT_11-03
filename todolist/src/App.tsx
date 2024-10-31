import React from 'react';
import logo from './logo.svg';
import './App.css';

{/*주석문을 작성합니다*/}

{/*
	작성자 : 아무개
  작성일 : 2024/11/01
  내용: 기능에 대한 내용    
*/}

function App() {
  let name = "멍멍이";
  const style = {
    backgroundColor : 'black',
    color : 'white',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : '20px'
  };
  return (
    <div style = {style}>
      <h1 style = {style}>하이{
        name === "멍멍이"? (<h3>갓댕이</h3>):(<h3>고양이</h3>)
        }</h1>
      <p>반갑습니다</p>
      <br/>
      <br></br>
      <input/>
    </div>
  );
}


export default App;
