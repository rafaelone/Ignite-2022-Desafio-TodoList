import { EmptyTaskContainer } from './styles';

import EmptyIcon from '../../assets/icons/empty.svg';

export function EmptyTask() {
  return (
    <EmptyTaskContainer>
      <img src={EmptyIcon} alt="Sem tarefas" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <strong>Crie tarefas e organize seus itens a fazer</strong>
    </EmptyTaskContainer>
  );
}
