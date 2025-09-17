export default function Container({ children }) {
  return (
    <div className='w-full aspect-[210/297] font-[sans-serif] flex flex-col bg-gray-50 rounded-lg shadow-md space-y-3'>
      {children}
    </div>
  );
}
