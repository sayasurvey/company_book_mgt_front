import { DefaultButton }  from '../components/default_button';
import { InputField } from '../components/input_field';
import { Layout}  from '../components/layout';

const SignupForm = () => {
  return (
    <Layout>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">アカウント作成</h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <InputField value='ニックネーム' dataName='nickname'/>
            </div>

            <div>
              <InputField value='メールアドレス' dataName='email'/>
            </div>

            <div>
              <InputField value='パスワード' dataName='password'/>
            </div>

            <div>
              <div className='mt-2'>
                <DefaultButton value='登録' type='submit'/>
              </div>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            <a href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">サインインはこちら</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default SignupForm;