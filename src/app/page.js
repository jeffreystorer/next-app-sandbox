const Person = ({children}) =>  {
Person.displayName = 'Person';
return <>{children}</>};
Person.First = () => {
  return (
    <span>
      Jeff
    </span>
  );
};

Person.Second = () => {
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
