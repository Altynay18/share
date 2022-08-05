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
  const {register, handleSubmit} = useForm({
    defaultValues: {
      agenda: '',
      start_time: "2022-08-08T00:00:00",
      topic: '',
      users: ['string', 'test']
    }
  });

  const onSubmit = async data => {
    console.log(data);
    const response = await meetingService.createMeeting(data);
    console.log("meeting res:", response)
    afterSubmit();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper label={'Agenda'} error={''} errText={''}>
        <input {...register('agenda', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Topic'} error={''} errText={''}>
        <input {...register('topic', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Time'} error={''} errText={''}>
        <input type={'time'} {...register('start_time', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'User 1'} error={''} errText={''}>
        <input {...register('users', {required: true})} />
      </InputWrapper>
      {/* <InputWrapper label={'User 2'} error={''} errText={''}>
        <input {...register('users', {required: true})} />
      </InputWrapper> */}
      <DefaultButton type={'submit'}>Add Meeting</DefaultButton>
    </form>
  );
};