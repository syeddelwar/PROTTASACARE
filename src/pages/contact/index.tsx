import RootLayout from "@/components/Layout/RootLayout";
import styles from "../../styles/home.module.css";
import ContactInfo from "@/components/Contact/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <div className={`${styles.contact_bg}`}>
        <div className="flex custom-container pt-[40%] lg:pt-[10%]">
          <div className="l">
            <h2 className="uppercase leading-10 font-black text-cyan-300 text-2xl lg:text-4xl">
              Get
            </h2>
            <h2 className="uppercase font-black text-white text-3xl lg:text-6xl">
            Prottasa  Care
            </h2>
            <p className="text-white max-w-xl my-10">
              Stay in the comfort of your own home.
            </p>
          </div>
        </div>
      </div>
      <ContactInfo></ContactInfo>
    </>
  );
};

export default ContactPage;
ContactPage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
