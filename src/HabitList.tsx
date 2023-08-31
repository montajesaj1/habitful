import React from "react";
import { Habit } from "./types";
import HabitItem from "./HabitItem";

interface HabitListProps {
  habits: Habit[];
  setHabits: React.Dispatch<React.SetStateAction<Habit[]>>;
}

const HabitList: React.FC<HabitListProps> = ({ habits, setHabits }) => {
  return (
    <ul>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} setHabits={setHabits} />
      ))}
    </ul>
  );
};

export default HabitList;
