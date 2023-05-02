type FormState = {
  country: string;
  city: string;
  products: string[];
};

enum FormActionType {
  ChangeCountry = 'ChangeCountry',
  ChangeCity = 'ChangeCity',
  ChangeProducts = 'ChangeProducts',
}

type FormAction =
  | { type: FormActionType.ChangeCountry; payload: string }
  | { type: FormActionType.ChangeCity; payload: string }
  | { type: FormActionType.ChangeProducts; payload: string[] };

const initialFormState: FormState = {
  country: '',
  city: '',
  products: [],
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  const { type, payload } = action;

  switch (type) {
    case FormActionType.ChangeCountry: {
      return {
        ...state,
        country: payload,
        city: '',
      };
    }
    case FormActionType.ChangeCity: {
      return {
        ...state,
        city: payload,
      };
    }
    case FormActionType.ChangeProducts: {
      return {
        ...state,
        products: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { formReducer, initialFormState, FormActionType };