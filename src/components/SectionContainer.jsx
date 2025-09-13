export default function Container({ children }) {
  return (
    <div 
      className="max-w-[500px] font-[sans-serif] m-auto p-5">
      {children}
    </div>
  )
}