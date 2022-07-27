import {useNavigate} from 'react-router-dom';
import {Requests} from './Requests';

export class Service extends Requests {
  navigate = useNavigate();

  // async isAdmin() {
  //   const res = await fetch(
  //     "http://164.92.192.48:8085/admin",
  //     {
  //       method: "GET",
  //     }
  //   );
  //   const getPostRes = await res.text();
  //   console.log("admin check")
  //   return getPostRes;
  // }

  async addProject() {
    // const path = '/fsdfsdf';
    // const response = await this.post(path, data);
  }

  async handleLogin(userData) {

    console.log(userData.username);
    console.log(JSON.stringify(userData));
    const res = await fetch('http://164.92.192.48:8085/authenticate', {
      method: 'POST',
      body: JSON.stringify(userData), //TODO: check this point, maybe they need body
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const resJson = await res.json();

    console.log(resJson);
    console.log(typeof userData.username, typeof '[ROLE_ADMIN]');

    if (res.status === 200) {
      sessionStorage.setItem('access_token', resJson.token);
      // const check =  await this.isAdmin();
      // console.log("role is:", check);
      if (userData.username === 'admin') {
        console.log('true');
        this.navigate('/admin');
      } else {
        this.navigate('/profile');

      }

      console.log(sessionStorage.getItem('access_token'));
    }
  }

  async registerUser(userData) {
    console.log('hey');
    console.log(JSON.stringify(userData));
    const res = await fetch('http://164.92.192.48:8085/full-register', {
      method: 'POST',
      body: JSON.stringify(userData), //TODO: check this point, maybe they need body
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const resJson = await res.json();
    console.log(resJson);

  }

  async logout() {
    sessionStorage.removeItem('access_token');
    this.navigate('/');
  }

  async addPost(postContent) {
    const token = sessionStorage.getItem('access_token');
    console.log(token);
    console.log(JSON.stringify(postContent));
    const res = await fetch(
      'http://164.92.192.48:8085/reflection/create-post',
      {
        method: 'POST',
        body: JSON.stringify(postContent), //TODO: check this point, maybe they need body
        headers: {
          'Content-type': 'application/json',
          Authorization: ` ${token}`,
        },
      },
    );
    const postRes = await res;
    console.log(postRes);
  }

  async getUserPosts() {
    const res = await fetch(
      'http://164.92.192.48:5/reflection/posts?page=0',
      {
        method: 'GET',
      },
    );
    const getPostRes = await res.json();
    console.log(getPostRes);
  }


  async createProject(projectData) {
    console.log('hey');
    const token = sessionStorage.getItem('access_token');

    console.log('names: ', JSON.stringify(projectData));
    const project_name = projectData.project_name;
    console.log('arr', projectData);

    const res = await fetch(
      `http://164.92.192.48:8085/createProject?name=${'gggggg'}&project_name=${project_name}&users=${
        projectData.user1},${projectData.user2},${projectData.user3}`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: ` ${token}`,
        },
      },
    );
    // const resJson = await res.json();
    console.log(res);

    // this.navigate("/profile");
  }

  async addProjectDiscussion(discussion) {
    const token = sessionStorage.getItem('access_token');
    console.log(token);
    console.log(JSON.stringify(discussion));
    const res = await fetch(
      'http://164.92.192.48:8085/science/create-post',
      {
        method: 'POST',
        body: JSON.stringify(discussion), //TODO: check this point, maybe they need body
        headers: {
          'Content-type': 'application/json',
          Authorization: ` ${token}`,
        },
      },
    );
    const postRes = await res;
    console.log(postRes);
  }

  async acceptUser(userID) {
    const token = sessionStorage.getItem('access_token');
    console.log(token);
    const res = await fetch(
      `http://164.92.192.48:8085/activate-user/${userID}`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: ` ${token}`,
        },
      },
    );

    const postRes = await res.text();
    console.log(postRes);
    return postRes;

//     if(postRes === "User activated"){
//       return true;
//     }
// else{
//   return false;
// }

  }

  async startMeeting(participants) {
    console.log('fff', participants);
    const arr = [
      JSON.stringify({email: `${participants.email1}`}),
      JSON.stringify({email: `${participants.email2}`}),
      JSON.stringify({email: `${participants.email3}`}),
    ];
    const token = sessionStorage.getItem('access_token');
    console.log(token);
    const res = await fetch(
      'http://164.92.192.48:8085/generateMeetingAndSend',
      {
        method: 'POST',
        body: arr, //TODO: check this point, maybe they need body
        headers: {
          'Content-type': 'application/json',
          Authorization: ` ${token}`,
        },
      },
    );

    if (res.ok) {
      alert('Приглашения были отправлены участникам');
    }
    const postRes = await res.text();
    console.log(postRes);
    return postRes;

  }

  async sendPhotoRequest(file) {
    try {
      const token = sessionStorage.getItem('access_token');
      const formData = new FormData();
      formData.append('file', file);
      const sendPhotoResponse = await fetch(
        'http://164.92.192.48:8085/generateMeetingAndSend',
        {
          method: 'POST',
          headers: {
            accept: '*/*',
            Authorization: ` ${token}`,
          },
          body: formData,
        },
      );
      if (sendPhotoResponse.status !== 200)
        throw new Error(sendPhotoResponse.status);
      alert('Success!');
    } catch (err) {
      alert(err.message);
      return;
    }
  };

}
