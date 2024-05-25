import { data } from "./data";
import Card from "./components/Card";

function App() {
  return (
    <>
      <header>Supper Car Forum</header>
      <main>
        <section className="places-category">
          <ul className="places">
            {data.map((item) => (
              <Card item={item} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;

