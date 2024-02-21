import { useState } from 'react';
import InputField from './InputField.tsx';
import ValidationControls from './ValidationControls.tsx';

const App = () => {

  const [numberToValidate, setNumberToValidate] = useState<string>('0');
  const [result, setResult] = useState<string>('');


  return (<>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col">
          <InputField numberToValidate={numberToValidate} setNumberToValidate={setNumberToValidate} />
          <ValidationControls numberToValidate={numberToValidate} setNumberToValidate={setNumberToValidate} setResult={setResult} />
          <div className="text-lg mt-4" id="result"></div>
        </div>
      </div>
      <div>
        <div>Result: {result}</div>
      </div>
    </>
  );
};

export default App;