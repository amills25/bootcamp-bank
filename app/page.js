import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // This is just a fun little JS kata for some different functionality
  // In this case we know there's 50 items coming back in the JSON, but you could change that to a data.length
  const accountNo = Math.floor(Math.random() * 50);

  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <div className="flex justify-center">
        <PageHeader header="HOME PAGE" />
      </div>

      {/* FUNNY GIF */}
      <div className="flex justify-center">
        {/* NEXT IMAGE DOCS: https://nextjs.org/docs/pages/api-reference/components/image */}
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
          {/* NEXT LINK DOCS: https://nextjs.org/docs/pages/api-reference/components/link */}
          <Link className="underline" href={`/account/${accountNo}`}>
            account
          </Link>
        </p>
      </div>
    </div>
  );
}
