
export default function HangmanGame() {
    const expectedOutput = [null, 'e', 'l', null, null, 'e'];

    return (
        <div className="letters">
            <div className="letter">_</div>
            <div className="letter">e</div>
            <div className="letter">l</div>
            <div className="letter">_</div>
            <div className="letter">_</div>
            <div className="letter">e</div>
        </div>
    )

}