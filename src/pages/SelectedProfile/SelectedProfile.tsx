import {useParams} from 'react-router';
import styles from './SelectedProfile.module.scss';
import PageHeader from '../../components/PageHeader';

type Props = {};

export function SelectedProfile(props: Props) {
  const {userId} = useParams();
  return (
    <div className={styles.selectedProfile}>
      <PageHeader handleSearch={()=>{}} title={'User Profile'}/>
      SelectedProfile
    </div>
  );
};