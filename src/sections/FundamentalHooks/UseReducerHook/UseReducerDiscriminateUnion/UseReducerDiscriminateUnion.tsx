import { ChangeEvent, useReducer } from 'react';
import { FormActionType, formReducer, initialFormState } from './formReducer';

const products = [
  {
    name: 'Product A',
    price: 9.99,
  },
  {
    name: 'Product B',
    price: 19.99,
  },
];

const CheckoutForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const isProductChecked = (name: string) => {
    return !!state.products.find((product) => product === name);
  };

  const onProductsChange = (event: ChangeEvent<HTMLInputElement>) => {
    let products;
    if (event.target.checked) {
      products = [...state.products, event.target.value];
    } else {
      products = state.products.filter((product) => product !== event.target.value);
    }

    dispatch({
      type: FormActionType.ChangeProducts,
      payload: products,
    });
  };

  return (
    <div>
      <div>
        <label>Products</label>
        {products.map(({ name, price }) => {
          return (
            <li key={name}>
              <label htmlFor={name}>
                <input
                  id={name}
                  type="checkbox"
                  name={name}
                  value={name}
                  checked={isProductChecked(name)}
                  onChange={onProductsChange}
                />
                {name} ($ {price})
              </label>
            </li>
          );
        })}
      </div>
      <div>
        <label>Country</label>
        <select
          name="country"
          value={state.country}
          onChange={(event) =>
            dispatch({
              type: FormActionType.ChangeCountry,
              payload: event.target.value,
            })
          }
        >
          <option value="">Select...</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={state.city}
          onChange={(event) =>
            dispatch({
              type: FormActionType.ChangeCity,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h5>Data in state</h5>
        {state.products.length > 0 && <p>Products: {state.products.join(', ')}</p>}
        {state.country && <p>Country: {state.country}</p>}
        {state.city && <p>City: {state.city}</p>}
      </div>
    </div>
  );
};

const UseReducerDiscriminateUnion = () => {
  return (
    <div className="Example">
      <h4>Form with TypeScript discriminate union</h4>
      <CheckoutForm />
    </div>
  );
};

export { UseReducerDiscriminateUnion };
