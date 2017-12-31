import FirebaseUtil from './FirebaseUtil'
import Page from '../components/Page'
import React from 'react'

console.log(FirebaseUtil.getMsg())
export default () => <Page fire={FirebaseUtil} />
