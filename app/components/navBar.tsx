import { Edu_NSW_ACT_Foundation } from 'next/font/google'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const edu_nsw = Edu_NSW_ACT_Foundation({
      subsets: ['latin'],
      display: 'swap',
      variable:"--edu_nsw-"
});

function NavBar() {
  return (
<header className={edu_nsw.className}>
<div className='flex justify-end items-center mt-10 '>
      <div className='flex items-center justify-center text-lg font-semibold text-yellow-100'>
      <Link className='mr-10' href="/">Home</Link>
      <Link className='mr-10' href="./about">About Me</Link>
      <Link className='mr-10' href="./services">My Services</Link>
      <Link className='mr-10' href="./contact">Contact Me</Link>
    </div>
<Button className='ml-44 mr-32 text-lg' variant="outline" size="default">Contact</Button>
   
</div>
</header>
  )
}

export default NavBar
