import MessageCard from "./MessageCard";

function App() {
  return (
    <>
      <MessageCard
        title="Welcome"
        message="This is the first message card."
      />

      <MessageCard
        title="React Props"
        message="Props allow data to be passed to components."
      />

      <MessageCard
        title="Reusable Component"
        message="This card is reused with different data."
      />

      <MessageCard
        title="Success"
        message="You have rendered multiple components!"
      />
    </>
  );
}

export default App;
