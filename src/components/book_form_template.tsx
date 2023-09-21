import { useState } from 'react';
import { DefaultButton } from './default_button';
import { InputField } from './input_field';

// TODO
// 編集の際に使用する初期値などの実装は未実装
export const BookFormTemplate = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">本の登録</h2>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <InputField value='本のタイトル' dataName='title'/>
          </div>

          <div>
            <InputField
              value='画像のURL'
              dataName='imageUrl'
              onChange={handleImageUrlChange}
            />
          </div>

          {imageUrl && (
            <div className="mt-4">
              <img src={imageUrl} alt="Book Cover" className="mx-auto w-2/3" />
            </div>
          )}

          <div>
            <div className='mt-2'>
              <DefaultButton value='登録' type='submit'/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
