import {useFormik} from 'formik';
import './Login.module.scss';
import {Service} from '../../service/Service';
import {useNavigate} from 'react-router-dom';
import {useToast} from '@chakra-ui/react';
import net from '../../assets/images/net.jpg';
import styles from './Login.module.scss';
import {Input} from '../Input/Input';
import LoginForm from '../Forms/Login';
import netImg from '../../assets/images/net.jpg';

const Login = () => {
  const toast = useToast();

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
  const navigate = useNavigate();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.infoSection}>
        <div className={styles.mainTitle}>SHARE</div>
        <div className={styles.description}>School Hub for Action Research
          in Education
        </div>
        <img src={netImg} alt="net" className={styles.img} />
      </div>
      <div className={styles.formSection}>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
