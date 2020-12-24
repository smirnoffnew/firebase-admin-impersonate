import PropTypes from 'prop-types';

const List = ({ data, renderItem, title, ...props }) => {
  return <div className="list">
    <h1>{title ?? 'title'}</h1>
    <ul {...props}>
      {data.map((li) => {
        return renderItem(li)
      })}
    </ul>
  </div>
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
};

export default List;
