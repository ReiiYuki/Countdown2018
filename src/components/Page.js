import ChatBody from './ChatBody'
import CountdownHeader from './CountdownHeader'
import React from 'react'

export default (props) => (
  <div>
    <CountdownHeader />
    <ChatBody {...props} />
  </div>
)
