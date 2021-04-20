import style from "./UserList.module.css";

const UserList = ({ datas }) => {
  const deleteItem = (e) => {
    console.log(e);
  };
  return (
    <div className={style["user-list"]}>
      <ul>
        {datas.map(({ username, age, id }) => {
          return (
            <li key={id} onClick={deleteItem}>
              <p>
                <span>{username[0].toUpperCase() + username.slice(1)}</span> (
                <span>{age} years old</span>)
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserList;
