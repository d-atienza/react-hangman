export default function HangmanGame() {
  const inputArray = [null, "E", "L", null, null, "E"];
  //how can you make that from 'feline' and guessLetters from ['e', 'l', 'b']?

  return (
    <div className="letters">
      {inputArray.map((element, index) => (
        <div className="letter" key={index}>{element === null ? '_' : element}</div>
      ))}
    </div>
  );
}
