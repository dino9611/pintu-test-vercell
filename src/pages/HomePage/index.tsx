import Layout from 'src/components/Layout';
import Table from 'src/components/Table';
import { useMergedata } from 'src/hooks';

function HomePage() {
  // const { mergeData, mergeDataPrev } = useMergedata();

  return (
    <Layout>
      <Table />
    </Layout>
  );
}

export default HomePage;
