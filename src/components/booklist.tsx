import { ReactElement } from 'react';
import { DefaultButton }  from './default_button';

interface Book {
  imageUrl: string;
  title: string;
  author: string;
  loanable: boolean;
}

interface BookCardProps extends Book {}

function BookCard({ imageUrl, title, author, loanable }: BookCardProps): ReactElement {
  return (
    <div className='border rounded-lg'>
      <a href="#" className="rounded-lg">
        <div className="group relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={imageUrl}
            className="h-[20rem] w-full rounded-t-lg object-cover object-center group-hover:opacity-25"
          />
          <div className='absolute top-5 left-5 opacity-0 group-hover:opacity-100'>
            <p>タイトル:</p>
            <p>　{title}</p>
            <p>著者: {author}</p>
          </div>
        </div>
      </a>
      <div className='flex rounded-lg'>
        <a href="#" className={`py-1 w-full text-center border-r ${loanable ? '' : 'text-gray-400 cursor-not-allowed'}`}>借りる</a>
        <a href="#" className="py-1 w-full text-center">借りたい</a>
      </div>
    </div>
  );
}

function BookList(): ReactElement {
  const books: Book[] = [
    {
      imageUrl:
        'https://www.oreilly.co.jp/books/images/picture_large978-4-87311-565-8.jpeg',
      title: 'リーダブルコード',
      author: 'Dustin Boswell',
      loanable: false
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      title: 'Nomad Tumbler',
      author: 'Dustin Boswell',
      loanable: true
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      title: 'Focus Paper Refill',
      author: 'Dustin Boswell',
      loanable: true
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      title: 'Machined Mechanical Pencil',
      author: 'Dustin Boswell',
      loanable: true
    }
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookList;