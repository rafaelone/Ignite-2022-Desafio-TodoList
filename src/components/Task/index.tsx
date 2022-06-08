import { BsTrash } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import {
  Button,
  CheckCircle,
  Circle,
  RemoveButton,
  TaskContainer,
} from './styles';

type TaskProps = {
  description: string;
  done: boolean;
  id: number;
  handleChangeTask: (id: number) => void;
  handleRemoveTask: (id: number) => void;
};

export function Task({
  description,
  done,
  id,
  handleChangeTask,
  handleRemoveTask,
}: TaskProps) {
  return (
    <TaskContainer>
      <Button
        type="button"
        onClick={() => handleChangeTask(id)}
        data-testid="btn-change"
      >
        {done ? (
          <CheckCircle data-testid="check-circle">
            <AiOutlineCheck size={10} color="#fff" />
          </CheckCircle>
        ) : (
          <Circle data-testid="circle" />
        )}
        <p>{description}</p>
      </Button>
      <RemoveButton
        onClick={() => handleRemoveTask(id)}
        data-testid="btn-remove"
      >
        <BsTrash size={20} color="#808080" />
      </RemoveButton>
    </TaskContainer>
  );
}
