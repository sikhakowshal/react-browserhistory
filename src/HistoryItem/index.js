import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteHistoryItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="logo-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
      </div>
      <div className="title-domain-text">
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        onClick={deleteHistoryItem}
        data-testID="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
