import MsgItem from './MsgItem'
import React from 'react'
import styled from 'styled-components'

const ChatContainer = styled.section`
    overflow: scroll;
    height: 50vh;
    margin: 10px;
`

export default class ChatBox extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      msgs: []
    }
  }

  componentDidMount () {
    const self = this
    this.props.get().then(data => {
      self.setState({
        msgs: data
      })
    })
  }

  render () {
    const { msgs } = this.state
    return (
      <ChatContainer className='hero is-medium is-primary'>
        <div className='hero-head'>
          {msgs.map((msgItem) => <MsgItem user={msgItem.user} msg={msgItem.msg} />)}
        </div>
      </ChatContainer>
    )
  }
}
