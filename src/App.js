import React, { useState } from "react";
import "./App.css";

// 추가하기 버튼을 눌렀을 때,
// 내가 만든 카드 생성!!
function App() {
  // 제목과 내용 state
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  //리스트 하나 새로 만들고
  const [toDoList, setToDoList] = useState([]);
  const [id, setId] = useState(0);
  function subMitHandler() {
    //그 안에 새로운 변수 만들어서 객체 저장
    const toDoCard = {
      id: id,
      title,
      detail,
    };

    let newTodoCard = [...toDoList, toDoCard];
    console.log("newTodoCard", newTodoCard);
    console.log("toDoCard", toDoCard);
    console.log("value", toDoList);
    // input 받아와서 저장
    setToDoList(newTodoCard);
    setId(id + 1);
  }
  // 카드의 삭제하기 버튼을 누르면, 카드 remove되도록

  // 카드의 완료 버튼을 누르면, Done 부분으로 그 카드가 넘어가게끔
  return (
    <div className="container">
      <h3 className="title">('ㅅ') 나의 투두 리스트</h3>
      <div className="header">
        <p>제목 :{""}</p>
        <input
          value={title}
          onChange={function (event) {
            setTitle(event.target.value);
          }}
          type="text"
        />
        <p>내용: {""}</p>
        <input
          value={detail}
          onChange={function (event) {
            setDetail(event.target.value);
          }}
          type="text"
        />
        <button className="inputbtn" onClick={subMitHandler}>
          추가하기
        </button>
      </div>
      <h2>Working...🤔</h2>
      {/* 카드 붙이기  */}
      {toDoList.map((toDo) => (
        //map(...)은 return한 값으로 이루어진 배열을 return한다.
        <div className="card" id={id}>
          <h3 className="card-title">{toDo.title}</h3>
          <p className="card-detail"> {toDo.detail}</p>
          <div className="btnbox">
            <button
              className="delbtn"
              onClick={function () {
                let newTodoList = toDoList.filter(function (target) {
                  return target.id !== toDo.id;
                });
                console.log(newTodoList);
              }}
            >
              삭제하기
            </button>
            <button className="combtn">완료</button>
          </div>
        </div>
      ))}

      <div className="Done">
        <h2>Done ~ 😎 </h2>
      </div>
    </div>
  );
}
export default App;
