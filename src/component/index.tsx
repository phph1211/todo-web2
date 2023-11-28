import React, { useState, ChangeEvent, useRef } from "react";
import * as S from "./style";

type ItemProps = {
  item: string;
  onDelete: () => void;
  onUpdate: (updatedItem: string) => void;
};

const ToDo: React.FC<ItemProps> = ({ item, onDelete, onUpdate }) => {
  const [editedItem, setEditedItem] = useState<string>(item);
  const editedText = useRef<HTMLInputElement | null>(null);

  const [isEditClick, setIsEditClick] = useState<boolean>(false);

  const openEdit = () => {
    setIsEditClick(true);
    if (editedText.current) {
      editedText.current.focus();
    }
  };

  const handleEditChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedItem(event.target.value);
  };

  const handleEditText = () => {
    setIsEditClick(false);
    onUpdate(editedItem);
  };

  return (
    <S.TodoItemBox>
      {isEditClick ? (
        <S.TodoInput
          style={{ width: "200px", height: "50px" }}
          ref={editedText}
          type="text"
          value={editedItem}
          placeholder="수정할 텍스트를 입력하세요"
          onChange={handleEditChange}
          onBlur={handleEditText}
        />
      ) : (
        <S.TodoItem>{item}</S.TodoItem>
      )}
      <S.DeleteButton onClick={onDelete}>삭제하기</S.DeleteButton>
      <S.EditButton onClick={openEdit}>수정하기</S.EditButton>
    </S.TodoItemBox>
  );
};

export const ToDoList: React.FC = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const saveUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const updatedTodo = [...todo, inputValue];
    window.localStorage.setItem("todo", JSON.stringify(updatedTodo));
    setTodo(updatedTodo);
    setInputValue("");
  };

  const handleDelete = (index: number) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    window.localStorage.setItem("todo", JSON.stringify(updatedTodo));
    setTodo(updatedTodo);
  };

  const handleUpdate = (index: number, updatedItem: string) => {
    const updatedTodo = [...todo];
    updatedTodo[index] = updatedItem;
    window.localStorage.setItem("todo", JSON.stringify(updatedTodo));
    setTodo(updatedTodo);
  };

  React.useEffect(() => {
    const getTodo = JSON.parse(window.localStorage.getItem("todo") || "[]");
    setTodo(getTodo);
  }, []);

  return (
    <S.ToDoBox>
      <S.Title>This is TodoList!</S.Title>
      <S.GenerateBox>
        <S.TodoInput
          value={inputValue}
          onChange={saveUserInput}
          placeholder="입력하세요"
        />
        <S.MakeToDoButton onClick={handleButtonClick}>
          Todo 만들기
        </S.MakeToDoButton>
      </S.GenerateBox>
      <div style={{ marginTop: "20px", width: "100%" }}>
        {todo.map((todo, index) => (
          <ToDo
            key={index}
            item={todo}
            onDelete={() => handleDelete(index)}
            onUpdate={(updatedItem) => handleUpdate(index, updatedItem)}
          />
        ))}
      </div>
    </S.ToDoBox>
  );
};
