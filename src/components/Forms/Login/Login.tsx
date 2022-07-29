import {useForm} from "react-hook-form";
import {AuthService} from '../../../services/AuthService';

type Props = {};

export function Login(props: Props) {
  const authService = new AuthService();
  const {register, handleSubmit} = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data)
    authService.login(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Логин</label>
      <br></br>
      <input {...register("username")}></input>
      <br></br>
      <label>Почта:</label>
      <br></br>
      <input {...register("password")}></input>

      <br></br>
      <input type="submit" />
    </form>
  );
}
