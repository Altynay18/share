import {useFormik} from 'formik';
import './Auth.module.scss';
import {Service} from '../../services/Service';
import {useLocation, useNavigate} from 'react-router-dom';
import {useToast} from '@chakra-ui/react';
import styles from './Auth.module.scss';
import netImg from '../../assets/images/net.jpg';
import {ROUTES} from '../../constants';
import Login from '../../components/Forms/Login';
import Register from '../../components/Forms/RegisterForm';

const Auth = () => {
  const toast = useToast();
const location = useLocation()
  const navigate = useNavigate();
  const service = new Service();
  const validate = (values: any) => {
    const errors = {};


    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      school: '',
      city: '',

    },
    validate,
    onSubmit: (values) => {
      service.registerUser(values);
    },
  });

  return (
    <div className={styles.authContainer}>
      <div className={styles.infoSection}>
        <div className={styles.mainTitle}>SHARE</div>
        <div className={styles.description}>School Hub for Action Research
          in Education
        </div>
        <img src={netImg} alt="net" className={styles.img} />
      </div>
      <div className={styles.formSection}>
        {location.pathname.includes(ROUTES.LOGIN) ? <Login /> : <Register/>}
      </div>
    </div>
  );
};
export default Auth; 
