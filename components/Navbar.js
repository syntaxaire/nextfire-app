import Image from 'next/image';
import Link from 'next/link';

// Top navbar
export default function Navbar() {
    const user = true;
    const username = true;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                { /* user is signed-in and has username */ }
                {username && (
                    <>
                    <li className="push-left">
                        <Link href="/admin">
                            <button className="btn-blue">Write posts</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${username}`}>
                            {
                            // </Link><Image alt="Profile picture" src={user?.photoURL}></Image> }
                            }
                            <img src={user?.photoURL} />
                        </Link>
                    </li>
                    </>
                )}
                { /* user is not signed in, or they have not created a username yet */ }
                {!username && (
                    <Link href="/enter">
                        <button className="btn-blue">Log in</button>
                    </Link>
                )}
            </ul>
        </nav>
    )
}