import { DefaultButton }  from '../components/default_button';
import { InputField } from '../components/input_field';
import { Layout}  from '../components/layout';

const LoginForm = () => {
  return (
    <Layout>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <InputField value='Email Adress' dataName='email'/>
            </div>

            <div>
              <InputField value='Password' dataName='password'/>
            </div>

            <div>
              <div className='mt-14'>
                <DefaultButton value='Signin' type='submit'/>
              </div>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">新規会員登録はこちら</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default LoginForm;