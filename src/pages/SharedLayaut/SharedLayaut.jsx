import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Suspense } from "react";
import Container from "../../components/Container/Container";

export default function SharedLayaut() {
  return (
    <>
      {/* <Container> */}
      <Header />
      {/* </Container> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
