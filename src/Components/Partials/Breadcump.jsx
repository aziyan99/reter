export default function Breadcump(props) {
  const href = "#";
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {props.items.map((item, index) => {
          return (
            <li
              className="breadcrumb-item active"
              aria-current="page"
              key={index}
            >
              <a href={href}>{item.name}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
