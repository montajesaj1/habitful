import React from "react";
import { Habit } from "./types";

interface HabitItemProps {
    habit: Habit;
    setHabits: React.Dispatch<React.SetStateAction<Habit[]>>;
  }
  
  const HabitItem: React.FC<HabitItemProps> = ({ habit, setHabits }) => {
    const handleDelete = (id: string) => {
      setHabits((currentHabits) => currentHabits.filter((habit) => habit.id !== id));
    };
  
    const handleCheckboxChange = (id: string) => {
      setHabits((currentHabits) => 
        currentHabits.map((habit) => 
          habit.id === id ? { ...habit, completed: !habit.completed } : habit
        )
      );
    };
  
    return (
      <li key={habit.id}>
        <label>
          <input 
            type="checkbox" 
            checked={habit.completed} 
            onChange={() => handleCheckboxChange(habit.id)}
          />
          {habit.title}
        </label>
        <button className="btn btn-danger" onClick={() => handleDelete(habit.id)}>Delete</button>
      </li>
    );
  };
  
  export default HabitItem;