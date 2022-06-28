import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./StoreComponent";
import { useNavigate } from "react-router-dom";

const TableComponent = (props) => {
  const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

  let navigate = useNavigate();
  const { usersData, isLoading, isError, errorMsg } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(url));
  }, []);

  const onRowClick = (item) => {
    console.log("onRowClick: ", item);
    switch(item.id) {
      case 1:
        return navigate("/eliseo", { state: item });
      case 2:
        return navigate("/jayne", { state: item });
      case 3:
        return navigate("/nikita", { state: item });
      case 4:
        return navigate("/lew", { state: item });
      case 5:
        return navigate("/hayden", { state: item });
      default:
        return navigate("/", { state: usersData });
    }
  };
  return (
    <>
      {isLoading && <div>Data loading...</div>}
      {isError && <div>Error loading data: {errorMsg}</div>}
      {!isLoading && !isError && (
        <table>
          <tbody>
            <tr>
              <td className="name">Name</td>
              <td className="email">Email</td>
              <td className="intro">Introduce</td>
            </tr>
            {usersData &&
              usersData.length !== 0 &&
              usersData.map((item, index) => (
                <tr
                  onClick={() => onRowClick(item)}
                  className="parent"
                  key={index}
                >
                  <td className="name">{item.name}</td>
                  <td className="email">{item.email}</td>
                  <td className="intro">{item.body}</td>
                </tr>
              ))}
            ;
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableComponent;
