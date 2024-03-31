// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {AppointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = AppointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li>
      <p>{title}</p>

      <button type="button" data-testid="star" onClick={onClickStar}>
        <img src={starImgUrl} alt="star" />
      </button>
      <p>Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
