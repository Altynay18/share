import styles from './Training.module.scss';
import PageHeader from '../../components/PageHeader';

const Training = () => {
  const handleSearch = () => {

  };
  return (
    <div className={styles.training}>
      <PageHeader title={'Training'} handleSearch={handleSearch}/>
    </div>
  );
};
export default Training;
