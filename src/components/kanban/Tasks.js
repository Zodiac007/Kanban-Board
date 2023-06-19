/* eslint-disable eqeqeq */
import { Draggable } from "react-beautiful-dnd";
import AvatarGroup from "../common/avatar/AvatarGroup";
import Dots from "../common/icons/Dots";
import Files from "../common/icons/Files";
import Message from "../common/icons/Message";

export default function Tasks({ task, index, id }) {
  const status = id == "1" ? "Low" : id == "2" ? "High" : "Completed";
  const statusColor = id == "1" ? "#FFA500" : id == "2" ? "#d70b4c" : "#7AC555";

  const randomFiles = Math.floor(Math.random() * 10);
  const randomComments = Math.floor(Math.random() * 16);

  return (
    <Draggable draggableId={`${task.id}`} index={index} key={task.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          className="rounded-lg bg-white p-2 text-black m-4 cursor-pointer flex flex-col justify-between min-h-[100px]"
        >
          <div className="flex justify-between items-center p-2">
            <p
              style={{
                color: `${statusColor}`,
                backgroundColor: `${statusColor}1A`,
              }}
              className="text-xs py-1 px-3 rounded"
            >
              {status}
            </p>
            <Dots />
          </div>

          <div className="px-2">
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p className="text-xs text-[#767486] py-4">
              While it may not be obvious to everyone, there are a number of
              reasons creating random paragraphs
            </p>
          </div>
          <div className="p-2 flex justify-between">
            <div>
              <AvatarGroup size={6} />
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center">
                <Message size={16} />
                <p className="text-xs text-[#767486] pl-1 whitespace-nowrap">
                  {randomComments} Comments
                </p>
              </span>
              <span className="flex items-center">
                <Files />
                <p className="text-xs text-[#767486] pl-1 whitespace-nowrap">
                  {randomFiles} files
                </p>
              </span>
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}
