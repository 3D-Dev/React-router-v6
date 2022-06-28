import { useNavigate } from "react-router-dom";

export function UserItem(props) {
  let navigate = useNavigate();

  const onItemClick = (item) => {
    console.log("@@@@@@@@@@", item);
    navigate("/detail/" + item.id, { state: item });
  };

  return (
    <div onClick={() => onItemClick(props.item)}>
      {props.item && (
        <>
          <p className="name">Full Name: {props.item.name}</p>
          <p className="email">Email: {props.item.email}</p>
          <p className="intro">Intro: {props.item.body}</p>
        </>
      )}
    </div>
  );
}
