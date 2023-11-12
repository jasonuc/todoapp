import { TypeAnimation } from 'react-type-animation';

const NoTasks = () => {
  return (
    <TypeAnimation 
      sequence={[
        '😬 this is awkward',
        1000, 
        '😬 this is awkward.',
        1000,
        '😬 this is awkward..',
        1000,
        '😬 this is awkward...',
        1000
      ]}
      wrapper="p"
      speed={80}
      deletionSpeed={95}
      repeat={Infinity}
      cursor={false}
      className='text-third italic inline-block'
    />
  );
};

export default NoTasks