export default function FacultyItem({ listItems }) {
  return (
    <ul>
      {listItems.map((listItem) => (
        <li>
          <a href={listItem.to} target="_blank" rel="noreferrer">
            {listItem.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
