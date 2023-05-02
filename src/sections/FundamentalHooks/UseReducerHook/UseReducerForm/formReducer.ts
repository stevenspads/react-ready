type FormState = {
  country: string;
  city: string;
};

enum FormActionType {
  ChangeCountry = 'ChangeCountry',
  ChangeCity = 'ChangeCity',
}

type FormAction = {
  type: FormActionType;
  payload: string;
};

const initialFormState: FormState = {
  country: '',
  city: '',
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
    default: {
      return state;
    }
  }
};

export { formReducer, initialFormState, FormActionType };