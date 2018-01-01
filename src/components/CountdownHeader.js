import React from 'react'
import moment from 'moment'

export default class extends React.Component {
  componentDidMount () {
    this.startTimer()
  }

  getTimeLeft () {
    let startTime = moment()
    let end = moment('01/01/2018, 00:00:00')
    let duration = moment.duration(end.diff(startTime))
    return moment.utc(duration.asMilliseconds()).format('HH:mm:ss')
  }

  startTimer () {
    this.interval = setInterval(() => {
      this.forceUpdate()
    }, 1000)
  }

  render () {
    let showText = `${this.getTimeLeft()} Left to 2018`
    if (moment.duration(this.getTimeLeft()).asMilliseconds() <= 0 || moment().year() > 2017) {
      showText = 'Happy new year 2018!'
    }
    return (
      <section className='hero is-danger is-medium'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title is-1'>{showText}</h1>
          </div>
        </div>
      </section>
    )
  }
}
