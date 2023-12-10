import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {title, id} = todoDetails
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button onClick={onClickDelete} type="button" className="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
