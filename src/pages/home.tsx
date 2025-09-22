import { MoveRight } from 'lucide-react';
import { Link } from 'wouter';

import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <div className='p-4'>
      <h2 className='mb-4 text-xl font-bold'>Welcome to My Awesome React App!</h2>
      <p>This is the home page of your awesome React application.</p>
      <Link asChild href='/a'>
        <Button className='cursor-pointer' variant='link'>
          <MoveRight /> Go to non-existing page
        </Button>
      </Link>
    </div>
  );
}
