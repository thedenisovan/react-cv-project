export default function Container({ children }) {
  return (
    <div className='w-full aspect-[210/297] font-[sans-serif] p-5 flex flex-col'>
      {children}
    </div>
  );
}
