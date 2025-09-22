import { MoveRight } from 'lucide-react';
import { Link } from 'wouter';

import { Button } from '@/components/ui/button';

export function NotFound() {
  return (
    <div className='space-y-4 p-4'>
      <div>
        <h2 className='text-xl font-bold'>404: Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
      <Link asChild href='/home'>
        <Button className='cursor-pointer' variant='link'>
          <MoveRight /> Go to Home
        </Button>
      </Link>
    </div>
  );
}
