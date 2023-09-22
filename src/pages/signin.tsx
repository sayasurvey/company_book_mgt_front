import { DefaultButton }  from '../components/default_button';
import { InputField } from '../components/input_field';
import { Layout}  from '../components/layout';

const SigninForm = () => {
  return (
    <Layout>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">サインイン</h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <InputField value='メールアドレス' dataName='email'/>
            </div>

            <div>
              <InputField value='パスワード' dataName='password'/>
            </div>

            <div>
              <div className='mt-2'>
                <DefaultButton value='サインイン' type='submit'/>
              </div>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            <a href="/signup" className="font-semibold leading-6 text-gray-600 hover:text-gray-500">新規会員登録はこちら</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default SigninForm;