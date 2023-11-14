import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const accountNo = Math.floor(Math.random() * 50);

  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <div className="flex justify-center">
        <PageHeader header="HOME PAGE" />
      </div>

      {/* FUNNY GIF */}
      <div className="flex justify-center">
        <Image
          src="https://media.tenor.com/_dzzTAkJ1kwAAAAC/bank-funny.gif"
          height={300}
          width={300}
          alt="funny gif"
        />
      </div>

      {/* RANDOM ACCOUNT VIEWER */}
      <div className="px-1">
        <p>
          Check out a random{" "}
          <Link className="underline" href={`/account/${accountNo}`}>
            account
          </Link>
        </p>
      </div>
    </div>
  );
}
