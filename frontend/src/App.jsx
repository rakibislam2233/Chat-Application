import Chat from "./components/Chat/Chat";
import Conversation from "./components/Conversation/Conversation";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] bg-gray-900 grid grid-cols-12 text-white">
      <Sidebar />
      <Conversation />
      <Chat />
    </div>
  );
};

export default App;
