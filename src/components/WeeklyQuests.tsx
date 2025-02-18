import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
  count?: number;
}

export default function WeeklyQuests({ onProgressChange }: { onProgressChange: (progress: number) => void }) {
  const tasks: Task[] = [
    { id: 1, text: "pushups and pullups", count: 100 },
    { id: 2, text: "Try a New HIIT Routine" },
    { id: 3, text: "Achieve a New Personal Best pr" },
    { id: 4, text: "Prepare for a Mock Tech Interview" },
    { id: 5, text: "pushups and pullups", count: 100 },
    { id: 6, text: "Study a New AI Research Paper" },
  ];

  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  const handleCheckboxChange = (taskId: number) => {
    setCheckedTasks((prev) => {
      const newCheckedTasks = prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId];

      // Calculate progress
      const progress = Math.round((newCheckedTasks.length / tasks.length) * 100);
      onProgressChange(progress);

      return newCheckedTasks;
    });
  };

  return (
    <div className="relative w-[390px] mr-32 mt-2">
      {/* Gradient Background */}
      <div className=" absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,255,255,0.1)]" />

      {/* Content Container */}
      <div className="relative h-full p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-white mb-2">
            weekly quests
          </h1>
          <span id="inter" className="text-3xl font-semibold text-white">+</span>

        </div>

        {/* Separator Line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-[rgba(255,255,255,0.77)] to-transparent" />

        {/* Tasks List */}
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {task.count && (
                  <span id='inter' className="font-semibold text-white mt-2">
                    {task.count}
                  </span>
                )}
                <span className="text-white font-normal">
                  {task.text}
                </span>
              </div>
              <input
                type="checkbox"
                checked={checkedTasks.includes(task.id)}
                onChange={() => handleCheckboxChange(task.id)}
                className="w-5 h-5"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
