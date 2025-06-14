import dateAddressBackground from "@/assets/date-address-background.png";
import { Separator } from "@/components/ui/separator";

const Address = () => {
  return (
    <section
      id="venue"
      className="flex flex-col w-full font-display min-h-[550px]"
      style={{
        backgroundImage: `url(${dateAddressBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "0% 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-xl mx-auto mt-12 px-6 md:px-12 text-black">
        <h2 className="uppercase font-medium text-base lg:text-lg text-black/60 mb-4">
          Dates
        </h2>
        <h2 className="font-semibold text-4xl md:text-heading-2">
          26th-27th
          <br />
          September, 2025
        </h2>
        <Separator className="my-10 bg-black/20" />
        <h2 className="uppercase font-medium text-base lg:text-lg text-black/60 mb-4">
          Address
        </h2>
        <h2
          className="font-semibold text-4xl md:text-heading-2 cursor-pointer hover:underline"
          onClick={() =>
            window.open("https://maps.app.goo.gl/oWC7t5cr2ik8VTqdA", "_blank")
          }
          tabIndex={0}
          role="button"
          aria-label="Open Bangalore International Convention Center in Maps"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              window.open(
                "https://maps.app.goo.gl/oWC7t5cr2ik8VTqdA",
                "_blank"
              );
            }
          }}
        >
          Bangalore International Convention Center
        </h2>
      </div>
    </section>
  );
};

export default Address;
