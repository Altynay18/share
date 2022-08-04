// @flow
import * as React from 'react';
import AddPost from '../../../components/Forms/AddPost';
import {ReflectionPostService} from '../../../services/ReflectionPostService';

type Props = {};

export function AddPostPage(props: Props) {
  const postService = new ReflectionPostService();
  const onSubmit = async (data) => {
    const res = await postService.addPost(data);
  };
  return (
    <div>
      <AddPost onSubmit={onSubmit}/>
    </div>
  );
};