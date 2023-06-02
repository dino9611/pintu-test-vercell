import Layout from 'src/components/Layout';
import Navbar from 'src/components/Navbar';
import SearchSection from 'src/components/SearchSection';
import Table from 'src/components/Table';
import TagSection from 'src/components/TagSection';
import TopMovers from 'src/components/TopMoversSection';

function HomePage() {
  return (
    <Layout>
      <Navbar />
      <SearchSection />
      <TopMovers />
      <TagSection />
      <Table />
    </Layout>
  );
}

export default HomePage;
