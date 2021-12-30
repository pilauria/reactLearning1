import React from 'react';

export const ApprovalCard = props => {
  // console.log(props.children);
  return (
    <div>
      <div className='ui card'>
        <div className='content'>
          {props.children}
          <div className='extra content'>
            <div className='ui two buttons'>
              <div className='ui basic green button'>Approve</div>
              <div className='ui basic red button'>Reject</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
