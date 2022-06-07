import { Count } from '../Count';
import { TaskCountContainer } from './styles';

type TaskCountProps = {
  createdTasks: number;
  completedTasks: number;
};

export function TaskCount({ createdTasks, completedTasks }: TaskCountProps) {
  return (
    <TaskCountContainer>
      <Count text="Tarefas Criadas" total={createdTasks} color="white" />
      <Count
        text="Concluídas"
        total={completedTasks}
        totalCreated={createdTasks}
        color="purple"
      />
    </TaskCountContainer>
  );
}
