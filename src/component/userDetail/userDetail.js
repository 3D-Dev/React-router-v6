import { UserItem } from "../users/userItem";
import { useLocation, useNavigate } from "react-router-dom";

export function UserDetail(props) {
  const location = useLocation();
  let navigate = useNavigate();

  return (
    <>
      <UserItem item={location.state} />
    </>
  );
}
