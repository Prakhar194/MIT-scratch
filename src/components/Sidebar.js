import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents"; // Make sure this file exists and is correctly named
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";

// Define categories with color and labels
const categories = [
  { key: "motion", label: "Motion", color: "#4C97FF", components: motionComponents },
  { key: "looks", label: "Looks", color: "#9966FF", components: looksComponents },
  { key: "control", label: "Control", color: "#FFAB19", components: controlComponents },
  { key: "events", label: "Events", color: "#FFD500", components: eventsComponents },
];

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("motion");
  const selected = categories.find(cat => cat.key === selectedCategory);

  return (
    <div className="flex h-full">
      {/* Left category list */}
      <div className="w-20 bg-gray-100 p-2 flex flex-col items-center gap-3 border-r border-gray-300">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`flex flex-col items-center p-1 rounded hover:bg-gray-200 transition-all duration-150 ${
              selectedCategory === cat.key ? "font-bold" : ""
            }`}
          >
            <div
              className="w-5 h-5 rounded-full border border-black"
              style={{ backgroundColor: cat.color }}
            ></div>
            <span className="text-[10px] mt-1 text-center">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Right panel: Smaller width & category-specific color blocks */}
      <div className="flex-1 min-w-[130px] max-w-[160px] overflow-y-auto p-2">
        <h2 className="font-bold mb-3 text-sm" style={{ color: selected.color }}>
          {selected.label}
        </h2>

        <Droppable droppableId={`sideArea-${selected.key}`} type="COMPONENTS">
          {(provided) => (
            <ul
              className="flex flex-col gap-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {selected.components.map((x, i) => (
                <Draggable
                  key={`${x}-sideArea`}
                  draggableId={`${x}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div
                        className="inline-block text-xs px-2 py-1 rounded shadow-sm"
                        style={{
                          backgroundColor: `${selected.color}22`, // light background
                          color: "black",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {getComponent(x)}
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </div>
  );
}
