import { Droppable } from "react-beautiful-dnd";
import Tasks from "./Tasks";

export default function Column({ title, tasks, id, color }) {
  return (
    <div className="bg-gray-100 rounded-xl h-min border w-full columClass">
      <div
        className="inline-flex items-center mx-4 border-b-4 w-11/12"
        style={{ borderColor: `${color}` }}
      >
        <span
          style={{ backgroundColor: `${color}` }}
          className="w-2 h-2 rounded-full"
        ></span>
        <h3 className="p-4 items-center sticky top-0">{title}</h3>
        <p className="bg-gray-300 text-[#737277] text-xs p-3 h-3 w-3 flex items-center justify-center rounded-full">
          3
        </p>
      </div>

      <Droppable droppableId={id} key={id}>
        {(provided, snapshot) => {
          return (
            <div
              className="pt-2 duration-300 grow min-h-[100px]"
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {/* provide your task */}

              {tasks.map((task, index) => (
                <Tasks key={index} task={task} index={index} id={id} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}
