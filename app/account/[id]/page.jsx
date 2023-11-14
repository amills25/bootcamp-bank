import PageHeader from "@/components/PageHeader";
import accountData from "/data/accountData.json";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import NotFound from "./not-found";

function AccountPage({ params }) {
  const accountId = params.id;
  const user = accountData[accountId];

  if (!user?.first_name) {
    NotFound();
  }

  return (
    <div className="flex flex-col space-y-6">
      {/* Page Header */}
      <div className="flex justify-center text-center">
        <PageHeader header={`${user.first_name}'s Account`} />
      </div>

      {/* Account Data */}
      <div className="flex flex-col px-5 mx-auto md:flex-row md:space-x-60">
        <div>
          <p className="text-2xl">
            {user.last_name}, {user.first_name}
          </p>
          <span className="flex items-center">
            <UserIcon className="w-4 h-4 mr-2" /> {user.account_no}
          </span>
        </div>

        <div>
          <span className="flex items-center">
            <EnvelopeIcon className="w-4 h-4 mr-2" /> {user.email}
          </span>
          <span className="flex items-center">
            <PhoneIcon className="w-4 h-4 mr-2" /> {user.phone}
          </span>
        </div>
      </div>

      <hr className="border-2 border-bank_green" />

      {/* Account Balance */}
      <div className="flex flex-col justify-center space-x-4 text-4xl text-center">
        <p>Current Balance:</p>
        <p>{user.balance}</p>
      </div>
    </div>
  );
}

export default AccountPage;
