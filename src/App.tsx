import StringTest from "../components/StringTest";
import ArrayTest from "../components/ArrayTest";
import ChildrenTest from "../components/ChildrenTest";
export default function App() {
  return (
    <div>
      <StringTest>masdfasd</StringTest>
      <ChildrenTest>
        <ArrayTest data={["a", "b", "c"]}></ArrayTest>
      </ChildrenTest>
    </div>
  );
}
