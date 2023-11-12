import { TypeAnimation } from 'react-type-animation';

const NoTasks = () => {
  return (
    <TypeAnimation
      sequence={[
        '😴 you have no tasks to complete',
        1000,
        '😴 you have no tasks to complete.',
        1000,
        '😴 you have no tasks to complete..',
        1000,
        '😴 you have no tasks to complete...',
        1000
      ]}
      wrapper="p" speed={80} deletionSpeed={95} repeat={Infinity} cursor={false}
      className='text-third italic inline-block'
    />
  );
};

export default NoTasks