import { FormEvent, useEffect, useState } from "react";
import Main from "../../components/Main";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSymbols = "!@#$%^&*()_+-";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);

  const copyText = async (coupon: string): Promise<void> => {
    // this below thing returns a promise
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };
  const submitHndler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!includeNumbers && !includeCharacters && !includeSymbols) {
      // later replace it with message toast
      return alert("Please select at least one validation");
    } else {
      let result: string = prefix;
      const looplength: number = size - result.length;
      let entrireString: string = "";
      if (includeCharacters) entrireString += allLetters;
      if (includeNumbers) entrireString += allNumbers;
      if (includeSymbols) entrireString += allSymbols;

      for (let i = 0; i < looplength; i++) {
        const randomNum: number = ~~(Math.random() * entrireString.length);
        result += entrireString[randomNum];
      }
      setCoupon(result);
    }
  };

  return (
    <Main className="dashboard-app-container">
      <h1>Coupon</h1>
      {/* <Clock /> */}
      <section>
        <form className="coupon-form" onSubmit={submitHndler}>
          <input type="text" placeholder="Text to include" value={prefix} onChange={(e) => setPrefix(e.target.value)} maxLength={size} />
          <input type="number" placeholder="Coupon Length" value={size} onChange={(e) => setSize(Number(e.target.value))} min={8} max={25} />
          <fieldset>
            <legend>Include</legend>
            <span>
              <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers((prev) => !prev)} maxLength={size} />
              <span>Numbers</span>
            </span>
            <span>
              <input type="checkbox" checked={includeCharacters} onChange={() => setIncludeCharacters((prev) => !prev)} maxLength={size} />
              <span>Characters</span>
            </span>
            <span>
              <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols((prev) => !prev)} maxLength={size} />
              <span>Symbols</span>
            </span>
          </fieldset>
          <button type="submit">Generate</button>
        </form>
        {coupon && (
          <code>
            {coupon} <span onClick={() => copyText(coupon)}>{isCopied ? "Copied" : "Copy"}</span>
          </code>
        )}
      </section>
    </Main>
  );
};

export default Coupon;
