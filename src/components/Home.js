import React from 'react'
import TopMenu from './TopMenu'
import LeftCol from './LeftCol'
import RightCol from './RightCol'

const Home = (props) => {
  return (
    <div>
      {/* {console.log("home: ", props)} */}
      <TopMenu {...props} setMode={props.setMode} loggedInStatus={props.loggedInStatus} />
      {props.loggedInStatus ? 
        <div className='row'>
          <LeftCol modeStatus={props.modeStatus} />
          <RightCol modeStatus={props.modeStatus} />
        </div>
        : null}
    </div>
  )
}

export default Home
