import styles from './Success.module.scss';

type SuccessSize = 'Small' | 'Large';

type Props = {
  message: string;
  size?: SuccessSize;
};

const Success = ({ message, size }: Props) => {
  const classNames = size ? `${styles.Success} ${styles[size]}` : styles.Success;

  return <p className={classNames}>{message}</p>;
};

const SassModuleStyling = () => {
  return (
    <div className="Example">
      <h3>Sass module styling</h3>
      <Success message="First success message." />
      <Success message="Second success message" size="Small" />
      <Success message="Third success message" size="Large" />
    </div>
  );
};

export { SassModuleStyling };
