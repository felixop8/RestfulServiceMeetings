import React, {PropTypes} from 'react';
import MeetingListRow from './MeetingListRow';

const MeetingList = ({meetings}) => {
  return(
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Time</th>
      </tr>
      </thead>
      <tbody>
      {meetings.map(meeting =>
        <MeetingListRow key={meeting.id} meeting={meeting} />
      )}
      </tbody>
    </table>
  );
};

MeetingList.propTypes = {
  meetings: PropTypes.array.isRequired
};

export default MeetingList;