import ChatBox from './ChatBox'
import ChatInput from './ChatInput'
import React from 'react'

export default (props) => (
  <section className='section'>
    <div className='container'>
      <ChatBox get={props.fire.getMsg} />
      <ChatInput send={props.fire.sendMsg} />
    </div>
  </section>
)
