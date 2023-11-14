import PageHeader from "@/components/PageHeader";

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex justify-center">
        <PageHeader header="ABOUT US" />
      </div>

      {/* About us text */}
      <div className="px-1 pt-6 space-y-2">
        <h2 className="pl-4 text-2xl">Our Mission</h2>
        <p>
          At Bootcamp Bank, we do cool stuff like take your money and then go
          spend it so you can never get it back.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
