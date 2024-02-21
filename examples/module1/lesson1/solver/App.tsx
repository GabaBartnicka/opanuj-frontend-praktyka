import React, { useState } from 'react';
import { add, substract, multiply, divide } from './functions';

interface OperationButtonProps {
  operation: (a: number, b: number) => number;
  label: string;
  firstNumber: number;
  secondNumber: number;
  result: React.Dispatch<React.SetStateAction<number | string>>;
}

const OperationButton: React.FC<OperationButtonProps> = ({ operation, label, firstNumber, secondNumber, result }) => {
  const doWork = () => {
    result(operation(firstNumber, secondNumber));
  };

  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={doWork}
    >
      {label}
    </button>
  );
};

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <OperationButton operation={add} label="+" firstNumber={firstNumber} secondNumber={secondNumber} result={setResult} />
        <OperationButton operation={substract} label="-" firstNumber={firstNumber} secondNumber={secondNumber} result={setResult} />
        <OperationButton operation={multiply} label="*" firstNumber={firstNumber} secondNumber={secondNumber} result={setResult} />
        <OperationButton operation={divide} label="/" firstNumber={firstNumber} secondNumber={secondNumber} result={setResult} />
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;