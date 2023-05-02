import { useReducer } from 'react';
import { FormActionType, formReducer, initialFormState } from './formReducer';

const CheckoutForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <div>
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
        {state.country && <p>Country: {state.country}</p>}
        {state.city && <p>City: {state.city}</p>}
      </div>
    </div>
  );
};

const UseReducerForm = () => {
  return (
    <div className="Example">
      <h4>Form</h4>
      <CheckoutForm />
    </div>
  );
};

export { UseReducerForm };
