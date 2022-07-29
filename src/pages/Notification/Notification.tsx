import styles from './Notification.module.scss';

type Props = {};

export function Notification(props: Props) {
  const arr = new Array(5).fill(0);
  return (
    <div className={styles.notification}>
      {arr.map((el,i)=>(
        <div className={styles.item}>notification el</div>
      ))}
    </div>
  );
};