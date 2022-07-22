import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons';
// import { Service } from "../../services/Service";
import {useFormik} from 'formik';
import './AddPost.module.scss';

const Profile = () => {
  // const services = new Service();
  const validate = (values: any) => {
    const errors = {};
    const passRegex = /^(.)/g;

    if (!passRegex.test(values.password)) {
      // errors.password = "";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validate,
    onSubmit: (values) => {
      // event.preventDefault();

      console.log(values);
      alert(JSON.stringify(values, null, 2));
      // services.addPost(values);
      values.content = '';
      values.title = '';
    },
  });

  return (
    <>
      coming soon
    </>
  );
};
export default Profile;
