import styles from './Success.module.css';

type SuccessSize = 'Small' | 'Large';

type Props = {
  message: string;
  size?: SuccessSize;
};

const Success = ({ message, size }: Props) => {
  const classNames = size ? `${styles.Success} ${styles[size]}` : styles.Success;

  return <p className={classNames}>{message}</p>;
};

const CssModuleStyling = () => {
  return (
    <div className="Example">
      <h3>CSS module styling</h3>
      <Success message="Action was successful." />
      <Success message="Second success message" size="Small" />
      <Success message="Third success message" size="Large" />
    </div>
  );
};

export { CssModuleStyling };
