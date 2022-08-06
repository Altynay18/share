import {Requests} from './Requests';
import {MeetingData} from '../types/services';

export class MeetingService extends Requests {
  createMeeting(data: MeetingData) {
    const path = '/zoom/create-meeting';
    return this.post(path, data);
  }

  getNotifications() {
    const path = '/notification?page=0';
    return this.get(path);
  }

  getStatus() {
    const path = '​/notification​/check';
    return this.get(path);
  }
}