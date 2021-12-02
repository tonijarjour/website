import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-center mt-20 pb-2">
      <span className="text-lg space-x-3">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/donate">
          <a>Donate</a>
        </Link>
        <Link href="https://github.com/tonijarjour">
          <a>Github</a>
        </Link>
      </span>
      <br />
      <small>Made With Love - CC&nbsp;BY&nbsp;4.0</small>
    </footer>
  );
};

export default Footer;
