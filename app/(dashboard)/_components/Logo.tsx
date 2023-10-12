import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
          height={130}
          width={130}
          alt="Logo"
          src="/logo.png"
      />
    </Link>
  )
}
