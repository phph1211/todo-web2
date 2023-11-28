import { styled } from "styled-components";

export const ToDoBox = styled.div`
  width: 500px;
  background-color: gainsboro;
  height: 500px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  border: 5px solid black;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 900;
  display: flex;
  justify-content: center;
`;

export const GenerateBox = styled.div`
  margin-top: 20px;
  display: flex;
  width: 400px;
  gap: 20px;
  height: 40px;
`;

export const TodoInput = styled.input`
  width: 400px;
  border-radius: 15px;
  padding: 0 30px;
`;

export const MakeToDoButton = styled.button`
  width: 160px;
`;

export const TodoItemBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TodoItem = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 60px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gainsboro;
`;

export const DeleteButton = styled.button`
  width: 80px;
  height: 50px;
  background-color: gainsboro;
  border-radius: 10px;
`;

export const EditButton = styled.button`
  width: 80px;
  height: 50px;
  border-radius: 13px;
`;
