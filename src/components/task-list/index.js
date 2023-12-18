import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import './style.css'

export const TaskList = () => {
  const [table, setTable] = useState(window?.dataArray ? window?.dataArray : []);

  const handleRemove = async (index) => {
    try {
      const shouldDelete = await confirmAsync(`Deseja realmente deletar a tarefa ${table[index].title}?`);

      if (shouldDelete) {
        const newTable = table.filter((_, i) => i !== index);
        setTable(newTable);
        window.dataArray = newTable;
      }
    } catch (error) {
      console.error('Erro ao confirmar exclusão:', error);
    }
  };

  const confirmAsync = (message) => {
    return new Promise((resolve) => {
      resolve(window.confirm(message));
    });
  };

  const handleConclude = (index) => {
    const updatedTable = [...table];
    updatedTable[index] = {
      ...updatedTable[index],
      concluded: true,
    };
    console.log(updatedTable)
    setTable(updatedTable);
    window.dataArray = updatedTable
  };

  return (
    <div className="containerList">
      <table className="table">
        <thead>
          <tr className="tableHeaderItems tableHeaderItems">
            <th className="taskTitle tableHeaderItem">Título</th>
            <th className="taskContent tableHeaderItem">Conteúdo</th>
            <th className="taskActions tableHeaderItem">Ações</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <tr key={index} className={item.concluded ? "concluded tableLists" : 'notConcluded tableLists'} >
              <td className="listTitle tableList">{item.title}</td>
              <td className="listContent tableList">{item.content}</td>
              <td className="listActions tableList">
                {!item.concluded && (
                  <StyledFontAwesomeIconOk
                    icon={faCheckCircle}
                    onClick={() => handleConclude(index)}
                  />
                )}
                <StyledFontAwesomeIconBin
                  icon={faTrash}
                  onClick={() => handleRemove(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StyledFontAwesomeIconOk = styled(FontAwesomeIcon)`
  color: #19c37d;
  transition: transform 0.3s, color 0.3s; 
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledFontAwesomeIconBin = styled(FontAwesomeIcon)`
  color: #9b59b6;
  margin-left: 38%;
  transition: transform 0.3s, color 0.3s; 
  &:hover {
    color: #FF6666;
    transform: scale(1.2);
  }
`;