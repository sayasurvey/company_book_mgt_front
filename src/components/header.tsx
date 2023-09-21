export const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center z-50">
      <div>
        <a href="/books" className="text-2xl font-bold">Booking</a>
      </div>
      <div className="flex">
        <div>
          <a href="/books" className='mr-3 hover:text-gray-400'>本の一覧</a>
        </div>
        <div>
          <a href="/books/register" className='mr-3 hover:text-gray-400'>本の登録</a>
        </div>
        <div>
          <a href="/signin" className='hover:text-gray-400'>サインイン</a>
        </div>
      </div>
    </header>
  );
};
