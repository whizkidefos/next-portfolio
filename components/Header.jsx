import Link from 'next/link';
import { Button } from './ui/button';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const Header = () => {
    return (
        <header className="py-8 text-white xl:py-12">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Efosa<span className="text-accent">.</span></h1>
                </Link>

                {/* Desktop navigation */}
                <div className="items-center hidden gap-8 xl:flex">
                    <Navigation />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile navigation */}
                <div className="xl:hidden">
                    <MobileNavigation />
                </div>

            </div>
        </header>
    )
}

export default Header;