import { useState } from 'react'
import Profilecard from './Profilecard.JSX';
import Header from './Header';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Adlan Kirumira',
      role: 'CEO and Co-Founder',
      bio: 'Scooby Doo, where are you',
      image: './Screenshot 2024-07-07 180510.jpg'
    },
    {
      id: 2,
      name: 'Adlan Kirumira',
      role: 'CEO and Co-Founder',
      bio: 'Scooby Doo, where are you',
      image: './Screenshot 2024-07-07 180510.jpg'
    },
    {
      id: 3,
      name: 'Adlan Kirumira',
      role: 'CEO and Co-Founder',
      bio: 'Scooby Doo, where are you',
      image: './Screenshot 2024-07-07 180510.jpg'
    },
    {
      id: 4,
      name: 'Adlan Kirumira',
      role: 'CEO and Co-Founder',
      bio: 'Scooby Doo, where are you',
      image: './Screenshot 2024-07-07 180510.jpg'
    },
    {
      id: 5,
      name: 'Adlan Kirumira',
      role: 'CEO and Co-Founder',
      bio: 'Scooby Doo, where are you',
      image: './Zoe shem emma audry.jpg'
    },
    {
      id: 6,
      name: 'Adlan Kirumira',
      role: 'CEO and Co-Founder',
      bio: 'Scooby Doo, where are you',
      image: './Zoe shem emma audry.jpg'
    }

  ]; return (
    <div>
      <Header />
      <div className='Profile-card-gallery'>
        {users.map(user => (
          <Profilecard
            key={user.id}
            name={user.name}
            role={user.role}
            bio={user.bio}
            image={user.image}  
          >
            <button>For More Info</button>
          </Profilecard>
        ))}
      </div>
    </div>
  );   
}
export default App;

   