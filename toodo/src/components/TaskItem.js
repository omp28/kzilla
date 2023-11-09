import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className=" flex-col justify-around mx-12 ">
      <li className=" flex justify-around ">
        <li className=" py-2 w-full  list-decimal border-b-[0.5px] border-black">
          {task.text}
        </li>
        <button className="" onClick={() => onDelete(task.id)}>
          <MdOutlineDeleteOutline className=" text-3xl text-red-900" />
        </button>
      </li>
    </div>
  );
};

export default TaskItem;
