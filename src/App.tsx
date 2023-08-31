import React, { useState, useEffect, FormEvent } from "react";
import { Habit } from "./types";
import { generateUUID } from "./utils";
import HabitList from "./HabitList";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function App() {
  const [newItem, setNewItem] = useState<string>("");
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    console.log("Current habits:", habits);
  }, [habits]);

  // Calculate the number of tasks and checked tasks
  const num_tasks = habits.length;
  const checked_tasks = habits.filter(habit => habit.completed).length;

  // Calculate the percentage of completed tasks
  const percentage = num_tasks === 0 ? 0 : (checked_tasks / num_tasks) * 100;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newId = generateUUID();
    setHabits((currentHabits: Habit[]) => [
      ...currentHabits,
      { id: newId, title: newItem, completed: false }
    ]);
    setNewItem("");
  }

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <label htmlFor="item">Enter a new habit to track:</label>
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
        <button className="btn" type="submit">Add</button>
      </form>
      <h4>TODO LIST</h4>
      <HabitList habits={habits} setHabits={setHabits} />
      <CircularProgressbar value={percentage} text={`${percentage.toFixed(2)}%`} />
    </>
  );
}
