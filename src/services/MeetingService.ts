import {Requests} from './Requests';
import {MeetingData} from '../types/services';

export class MeetingService extends Requests {
  createMeeting(data: MeetingData) {
    const path = '/zoom/create-meeting';
    return this.post(path, data);
  }
}