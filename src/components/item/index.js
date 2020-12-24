const Item = ({ children, selected, ...props }) => {
  return (
    <li {...props} className={selected ? 'selected' : ''}>
      {children}
    </li>
  )
}

export default Item;
