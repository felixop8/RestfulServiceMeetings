import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const MeetingListRow = ({meeting}) => {
  console.log(meeting);
  return(
    <tr>
      <td><Link to={'/meeting/' + meeting.id}>{meeting.title}</Link></td>
      <td>{meeting.time}</td>
    </tr>
  );
};

// PropTypes validation
MeetingListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default MeetingListRow;
