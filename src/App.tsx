import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Tanjiro", "Eren"];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este el el texto" />
      <List data={list} />
    </Card>
  );
}
export default App;
