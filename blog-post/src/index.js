import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/1.png';
import profile2 from './image/2.png';
import profile3 from './image/3.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <div>Hello my name is Sarah, and I am live in Istabul</div>
      </UserCard>
      <UserCard>
        <SingleComment
          name="Alex"
          date="Today at 5:00PM"
          text="It's amazing"
          picture={profile1}
        />
      </UserCard>{' '}
      <UserCard>
        <SingleComment
          name="Jack"
          date="Today at 6:00PM"
          text="Great Job"
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Sarah"
          date="Today at 7:00PM"
          text="Thanks..."
          picture={profile3}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
