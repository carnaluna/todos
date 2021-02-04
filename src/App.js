import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1 className="welcome-header">Get Ready To CRUSH YOUR GOALS</h1>
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}

export default App;

// Functionality to Add
// If Streak List Empty - Start Streak?
// Else show - Continue Crushing Your Goals?

// Counter for Days Goals Were Completed

// Comparisons for different "Players"

// Custom Styling

// Save List State So Refresh Doesn't Erase Items

// Per User Logins

// Community Forum
