function Person({children}){
return <>{children}</>};
Person.First = function First(){
  return (
    <span>
      Jeff
    </span>
  );
};

Person.Second = function Second() {
  return (
    <span>
      Storer
    </span>
  );
};

export default function Home() {
  return (
    <main>
      <Person>
        <h1><Person.First /> <Person.Second/></h1>
        </Person>
        <p>Now let's put some text under the heading.</p>
    </main>
  );
}