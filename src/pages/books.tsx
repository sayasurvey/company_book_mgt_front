import { Layout }  from '../components/layout';
import BookList  from '../components/booklist';
import {Title}  from '../components/title';

const LoginForm = () => {
  return (
    <Layout>
      <Title value="本一覧"/>
      <BookList />
    </Layout>
  );
}

export default LoginForm;