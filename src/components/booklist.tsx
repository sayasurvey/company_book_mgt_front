import { ReactElement } from 'react';
import { DefaultButton }  from './default_button';

interface Book {
  imageUrl: string;
  altText: string;
  title: string;
}

interface BookCardProps extends Book {}

function BookCard({ imageUrl, altText, title }: BookCardProps): ReactElement {
  return (
    <div className='border rounded-lg'>
      <a href="#" className="rounded-lg">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-tlg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={imageUrl}
            alt={altText}
            className="h-[30rem] w-full rounded-t-lg object-cover object-center group-hover:opacity-25"
          />
        </div>
      </a>
      <div className='flex rounded-lg'>
        <a href="#" className="py-1 w-full text-center border-r">借りる</a>
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
      altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      title: 'リーダブルコード'
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      altText: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      title: 'Nomad Tumbler'
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      altText: 'Person using a pen to cross a task off a productivity paper card.',
      title: 'Focus Paper Refill'
    },
    {
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      altText: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      title: 'Machined Mechanical Pencil'
    }
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookList;