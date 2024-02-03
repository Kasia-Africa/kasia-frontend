import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
interface HeaderProps {
  logoSrc: string;
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, appName }) => {

  return (
    <header className='flex justify-between pt-4 pb-10'>
      <div>
        <Link href={`/`} title='Home'>
          <Image
          src={logoSrc}
          alt={appName}
          width={200}
          height={50}
        />
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
