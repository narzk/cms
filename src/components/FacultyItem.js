export default function FacultyItem({ listItems }) {
  return (
    <ul>
      {listItems.map((listItem) => (
        <li>
          <a href={listItem.to} target="_blank">
            {listItem.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
