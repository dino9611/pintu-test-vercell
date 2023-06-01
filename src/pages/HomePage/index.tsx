import Layout from 'src/components/Layout';
import Navbar from 'src/components/Navbar';
import SearchSection from 'src/components/SearchSection';
import Table from 'src/components/Table';
import TopMovers from 'src/components/TopMoversSection';

function HomePage() {
  // const { mergeData, mergeDataPrev } = useMergedata();

  return (
    <Layout>
      <Navbar />
      <SearchSection />
      <TopMovers />
      <Table />
    </Layout>
  );
}

export default HomePage;
