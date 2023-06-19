/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import AvatarGroup from "../common/avatar/AvatarGroup";
import OutlinedButton from "../common/buttons/OutlinedButton";
import Column from "./Column";

import Filter from "../common/icons/Filter";
import Calender1 from "../common/icons/Calender1";
import Users from "../common/icons/Users";
import Seperator from "../common/icons/Seperator";
import Menu from "../common/icons/Menu";
import Home from "../common/icons/Home";

export default function KanbanBoard() {
  const [completed, setCompleted] = useState([]); // todo state
  const [incomplete, setIncomplete] = useState([]); // done state

  const [done, setDone] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setCompleted(
          json.filter((task) => task.completed && task.userId !== 1)
        );
        setIncomplete(
          json.filter((task) => !task.completed && task.userId !== 1)
        );
        setDone(json.filter((task) => task.userId == 1));
      });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    // remove from source array
    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    }
    if (source.droppableId == 3) {
      setDone(removeItemById(draggableId, done));
    } else {
      setIncomplete(removeItemById(draggableId, incomplete));
    }

    // get item
    const task = findItemById(draggableId, [
      ...incomplete,
      ...done,
      ...completed,
    ]);

    // add item
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    }
    if (destination.droppableId == 3) {
      setDone([{ ...task, completed: task.completed }, ...done]);
    } else {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }
  };

  function findItemById(id, arr) {
    return arr.find((item) => item.id == id);
  }

  function removeItemById(id, arr) {
    return arr.filter((item) => item.id != id);
  }
  return (
    <div className="bg-white h-auto w-auto py-10 px-4 xl:px-28">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-medium">Mobile App</h1>
          <div>
            <AvatarGroup />
          </div>
        </div>
        <div className="flex justify-between items-center pt-6">
          <div className="flex gap-4">
            <OutlinedButton name="Filter" icon={<Filter />} dropdown={true} />
            <OutlinedButton name="Today" icon={<Calender1 />} dropdown={true} />
          </div>
          <div className="flex gap-2 items-center">
            <OutlinedButton name="Share" icon={<Users />} dropdown={false} />
            <Seperator />
            <Menu />
            <Seperator />
            <Home />
          </div>
        </div>
        <div className="flex gap-6 pt-8">
          <Column color="#8945d1" title={"To Do"} tasks={incomplete} id="1" />
          <Column
            color="#FFA500"
            title={"On Progress"}
            tasks={completed}
            id="2"
          />
          <Column color="#7AC555" title={"Done"} tasks={done} id="3" />
        </div>
      </DragDropContext>
    </div>
  );
}
