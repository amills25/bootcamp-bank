"use client";

import Link from "next/link";
import accountData from "/data/accountData.json";
import { useState } from "react";

function AccountsPage() {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex flex-col space-y-4">
      {/* Conditionally rendered button */}
      <button
        className="flex justify-center w-40 py-2 mx-auto rounded-full bg-bank_green"
        onClick={() => setHidden(!hidden)}
      >
        {hidden ? <p>Show Balances</p> : <p>Hide Balances</p>}
      </button>

      {/* Map over all accounts and display them */}
      <div className="px-2 border-2 rounded-md">
        {accountData?.map((account) => (
          <Link key={account.id} href={`account/${account.id - 1}`}>
            <div className="flex justify-between py-1">
              <div>
                <p className="text-bank_green">
                  {account.last_name}, {account.first_name}
                </p>
                <p className="text-xs">{account.account_no}</p>
                <p className="text-xs">{account.phone}</p>
                <p className="text-xs">{account.email}</p>
              </div>

              {/* Only show balances if state is not hidden */}
              {!hidden && (
                <p className="flex items-center">{account.balance}</p>
              )}
            </div>
            <hr />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AccountsPage;
