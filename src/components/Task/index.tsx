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
      <Button type="button" onClick={() => handleChangeTask(id)}>
        {done ? (
          <CheckCircle>
            <AiOutlineCheck size={10} color="#fff" />
          </CheckCircle>
        ) : (
          <Circle />
        )}
        <p>{description}</p>
      </Button>
      <RemoveButton onClick={() => handleRemoveTask(id)}>
        <BsTrash size={20} color="#808080" />
      </RemoveButton>
    </TaskContainer>
  );
}
