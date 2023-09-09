import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar></Navbar>
      <div className="">{children}</div>
      <Footer></Footer>
    </>
  );
}
