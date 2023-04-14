export default function MultiList({ listItems }) {
  return (
    <div>
      {listItems.map((listItem) => (
        <>
          <p>{listItem.title}</p>
          <ul>
            {listItem.elements.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}
