"use client";

import React, { useState } from "react";
import Layout from "../components/Layout";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-lg w-5/12 justify-center flex-col px-8 py-8 text-black">
        <h1 className="text-2xl justify-center flex font-bold mb-4">
          To-Do App
        </h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </Layout>
  );
};

export default Home;
