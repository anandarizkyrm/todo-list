import { useParams } from 'react-router-dom';
import Detail from '../components/templates/Detail/Detail';
import Layout from '../components/templates/Layout/Layout';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Layout>{id ? <Detail id={parseInt(id)} /> : null}</Layout>
    </div>
  );
};

export default DetailPage;
