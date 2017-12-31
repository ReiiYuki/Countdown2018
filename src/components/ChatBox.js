import MsgItem from './MsgItem'
import React from 'react'
import styled from 'styled-components'

const ChatBox = styled.section`
    overflow: scroll;
    height: 50vh;
    margin: 10px;
`

export default (props) => (
  <ChatBox className='hero is-medium is-primary'>
    <div className='hero-head'>
      {props.get().map((msgItem) => <MsgItem user={msgItem.user} msg={msgItem.msg} />)}
    </div>
  </ChatBox>
)
