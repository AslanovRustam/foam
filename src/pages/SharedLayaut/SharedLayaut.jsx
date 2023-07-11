import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Suspense } from "react";
import Container from "../../components/Container/Container";
import FooterProducts from "../../components/Footer/FooterProducts";

export default function SharedLayaut() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Container>
        <FooterProducts />
      </Container>
    </>
  );
}
