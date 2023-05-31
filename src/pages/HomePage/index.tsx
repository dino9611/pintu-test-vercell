import Layout from 'src/components/Layout';
import Navbar from 'src/components/Navbar';
import SearchSection from 'src/components/SearchSection';
import Table from 'src/components/Table';

function HomePage() {
  // const { mergeData, mergeDataPrev } = useMergedata();

  return (
    <Layout>
      <Navbar />
      <SearchSection />
      <Table />
    </Layout>
  );
}

export default HomePage;
