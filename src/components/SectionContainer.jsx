export default function Container({ children }) {
  return (
    <div 
      className="max-w-[500px] m-[1rem] font-[sans-serif] m-auto p-5">
      {children}
    </div>
  )
}