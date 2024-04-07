import './App.css';

import {useState} from 'react';

export default function App() {
  const initialState = {
    name: 'Alice',
    address: {
      country: 'Austria',
      coords: [1, 2],
    },
  };
  const [employee, setEmployee] = useState(initialState);

  const updateNestedProps = () => {
    setEmployee(current => {
      // 👇️ using spread syntax (...)

      return {
        ...current,
        address: {
          ...current.address,

          // 👇️ override value for nested country property
          country: 'Germany',
        },
      };
    });
  };

  return (
    <div>
      <button onClick={updateNestedProps}>Click</button>

      <h4>{JSON.stringify(employee, null, 4)}</h4>
    </div>
  );
}
