import { FormEvent, useMemo, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { EmptyTask } from '../../components/EmptyTask';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TaskCount } from '../../components/TaskCount';
import { AddButton, HomeContainer } from './styles';
import { localFunctions } from '../../utils/localStorage';
import { Task } from '../../components/Task';

type Tasks = {
  id: number;
  description: string;
  done: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Tasks[]>(() => {
    const localTasks = localFunctions.get('tasks');
    if (localTasks) {
      return localTasks;
    }
    return [];
  });
  const [text, setText] = useState<string>('');

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = { description: text, done: false, id: Math.random() };
    if (text.length) {
      setTasks((state) => [...state, newTask]);
      setText('');
      localFunctions.set('tasks', [...tasks, newTask]);
    }
  }

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.done).length;
  }, [tasks]);

  function handleChangeTask(id: number) {
    const changedTask = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            done: !task.done,
          }
        : task,
    );

    setTasks(changedTask);
    localFunctions.set('tasks', changedTask);
  }

  function handleRemoveTask(id: number) {
    const changedTask = tasks.filter((task) => task.id !== id);
    setTasks(changedTask);
    localFunctions.set('tasks', changedTask);
  }

  return (
    <>
      <Header />
      <HomeContainer>
        <form onSubmit={handleAddNewTask}>
          <Input
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <AddButton data-testid="newTask">
            <strong>Criar</strong>
            <IoMdAddCircleOutline size={20} color="#fff" />
          </AddButton>
        </form>
        <TaskCount
          createdTasks={tasks.length}
          completedTasks={completedTasks}
        />
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <Task
                key={task.id}
                description={task.description}
                done={task.done}
                id={task.id}
                handleChangeTask={handleChangeTask}
                handleRemoveTask={handleRemoveTask}
              />
            ))}
          </ul>
        ) : (
          <EmptyTask />
        )}
      </HomeContainer>
    </>
  );
}
