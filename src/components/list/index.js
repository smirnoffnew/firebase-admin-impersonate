const List = ({ children, data, renderItem, title, ...props }) => {
  return <>
    <p>{title ?? 'title'}</p>
    <ul {...props}>
      {data.map((li) => {
        return renderItem(li)
      })}
    </ul>
  </>
}

export default List;
