import { useFormField } from './hooks';

const UserForm = () => {
  const firstNameProps = useFormField('');
  const lastNameProps = useFormField('');

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>

      {firstNameProps.value && lastNameProps.value && (
        <p>
          Hello, {firstNameProps.value} {lastNameProps.value}.
        </p>
      )}
    </>
  );
};

const FormFieldCustomHook = () => {
  return (
    <div className="Example">
      <h4>useFormField() custom Hook</h4>
      <UserForm />
    </div>
  );
};

export { FormFieldCustomHook };
