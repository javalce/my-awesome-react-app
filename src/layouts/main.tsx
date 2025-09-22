export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='bg-blue-600 p-4 text-white'>
        <h1 className='text-2xl'>My Awesome React App</h1>
      </header>
      <main className='flex-1'>{children}</main>
      <footer className='bg-gray-200 p-4 text-center'>
        <p>&copy; 2024 My Awesome React App</p>
      </footer>
    </div>
  );
}
