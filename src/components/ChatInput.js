import React from 'react'
import styled from 'styled-components'

const InputSize = styled.input`
    width: ${props => props.size}vw;
`

export default class ChatInput extends React.PureComponent {
  render () {
    return (
      <form>
        <div className='field has-addons'>
          <p className='control'>
            <InputSize className='input' type='text' placeholder='User' name='user' size='10' />
          </p>
          <p className='control'>
            <InputSize className='input' type='text' placeholder='Message' name='msg' size='60' />
          </p>
          <p className='control'>
            <a className='button is-success'>
                Send
            </a>
          </p>
        </div>
      </form>
    )
  }
}
