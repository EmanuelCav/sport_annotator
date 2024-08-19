import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className='items-center flex'>
      <Image src='/image.png' alt='logo' width={66} height={66} />
      <p className="self-center text-xl font-semibold text-white whitespace-nowrap">Sports Scoreboard</p>
    </Link>
  )
}

export default Logo