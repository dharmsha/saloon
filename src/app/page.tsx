
import Layout from '@/components/Layout/Layout';
import Navbar from "@/components/Header/Navbar";
import Page from "@/components/ImageSlider/page";

import Category from "@/components/Category";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Page />

      <Category />
    </Layout>
  );
}


