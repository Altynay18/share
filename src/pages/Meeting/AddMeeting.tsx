// @flow
import * as React from 'react';
import {MeetingService} from '../../services/MeetingService';
import {useForm} from 'react-hook-form';
import InputWrapper from '../../components/InputWrapper';
import DefaultButton from '../../components/DefaultButton';

type Props = {
  afterSubmit: any
};

export function AddMeeting({afterSubmit}: Props) {
  const meetingService = new MeetingService();
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = async data => {
    console.log(data);
    const response = await meetingService.createMeeting(data);
    console.log("meeting res:", response)
    afterSubmit();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper label={'Time'} error={errors.title} errText={''}>
        <input type={'time'} {...register('title', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Users'} error={errors.users} errText={''}>
        <input {...register('users', {required: true})} />
      </InputWrapper>
      <DefaultButton type={'submit'}>Add Meeting</DefaultButton>
    </form>
  );
};