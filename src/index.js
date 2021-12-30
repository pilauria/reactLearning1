import ReactDOM from 'react-dom';
import { CommentDetail } from './CommentDetail';
import { ApprovalCard } from './ApprovalCard';
import faker from 'faker';

export const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          text='Nice Blog!'
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Mamma'
          timeAgo='Today at 2:42PM'
          text='Nice Post!'
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Mimmo'
          timeAgo='Yesterday at 1:00PM'
          text='Nice!'
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Mommo'
          timeAgo='Yesterday at 3:45AM'
          text='Mamma mia!'
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
