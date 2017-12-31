import ChatBox from './ChatBox'
import ChatInput from './ChatInput'
import React from 'react'

export default (props) => (
  <section className='section'>
    <div className='container'>
      <ChatBox />
      <ChatInput send={props.fire.sendMsg} />
    </div>
  </section>
)
