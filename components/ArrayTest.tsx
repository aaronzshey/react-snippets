export default function ArrayTest({ data }: { data: string[] }) {
  return (
    <div style={{ backgroundColor: "red", height: "auto", width: "auto" }}>
      {data.map((x: string) => {
        return <div>{x}</div>;
      })}
    </div>
  );
}
