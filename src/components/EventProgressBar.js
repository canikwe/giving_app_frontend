import React from 'react'
import { Progress } from 'semantic-ui-react'

const EventProgressBar = ({ id, target_amount, getDonations }) => {
  
  const eventDonations = () => {
    return getDonations(id).reduce((a, b) => a + b.amount, 0)
  }

  const getPercentage = () => {
    return Math.ceil((eventDonations() / target_amount) * 100)
  }

  const getProgressColor = () => {
    const percent= getPercentage()
    if (percent < 30) {
      return 'red'
    } else if (percent < 60) {
      return 'grey'
    } else if (percent >= 100) {
      return 'green'
    } else {
      return 'yellow'
    }
  }

  return (
    <Progress percent={getPercentage()} active color={getProgressColor()}>
      ${eventDonations()} of ${target_amount} raised
    </Progress>
  )
}

export default EventProgressBar