import React, { useState } from "react";
import uuid from "react-uuid";
function App() {
  //인풋
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  //리스트 만들기
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
  ]);

  //인풋 onchange로 연결시키기
  const inputTitle = function (event) {
    setTitle(event.target.value);
  };
  const inputContent = function (event) {
    setContents(event.target.value);
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "#8be0b6",
          paddingLeft: "3px",
          margin: "3px",
        }}
      >
        <h1>헤더</h1>
      </header>

      <main
        style={{
          backgroundColor: "#76b4cf",
          paddingLeft: "3px",
          margin: "3px",
        }}
      >
        <div>
          제목 : <input value={title} onChange={inputTitle} />
          내용 : <input value={contents} onChange={inputContent} />
          <button
            onClick={(event) => {
              const newTodo = {
                id: uuid(),
                title: title,
                contents: contents,
                isDone: false,
              };
              setTodos([...todos, newTodo]);
            }}
          >
            저장하기
          </button>
        </div>
        <h3>오늘 해야할 것 !</h3>
        <div>
          {todos.map((mappedTodos) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  margin: "10px",
                  paddingLeft: "10px",
                  paddingBottom: "20px",
                }}
              >
                <p>{mappedTodos.id}</p>
                <h2>{mappedTodos.title}</h2>
                <h3>{mappedTodos.contents}</h3>
                <p>{mappedTodos.isDone}</p>
                <button>완료</button>
                <button
                  onClick={const deleteTodos = todos.filter(function () {
                    
                  })}
                >
                  삭제
                </button>
              </div>
            );
          })}
        </div>
      </main>

      <footer
        style={{
          backgroundColor: "#8acf76",
          paddingLeft: "3px",
          margin: "3px",
        }}
      >
        푸터
      </footer>
    </div>
  );
}

export default App;
