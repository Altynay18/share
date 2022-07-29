import {Requests} from './Requests';
import {MeetingData} from '../types/services';

export class MeetingService extends Requests {
  createMeeting(data: MeetingData) {
    const path = '/generateMeetingAndSend';
    return this.post(path, data);
  }
}