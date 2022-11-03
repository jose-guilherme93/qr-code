import qrcode from '/src/qr-code.svg'
function App() {

  return (
      <main className="bg-[#D5E1EF] h-screen flex items-center justify-center ">
        <section className="flex flex-col items-center bg-zinc-100 w-[320px] h-[497px] p-4 rounded-[20px] ">
          <div className="flex items-center justify-center w-[288px] h-[288px] bg-[#3685FF] rounded-[20px]">
            <img className="" src={qrcode} alt="código qr da página frontend mentor" />
          </div>
          <h1 className="w-72 font-bold text-center text-2xl mb-4 text-[#1F314F] h-auto">Improve your front-end skills by building projects</h1>
          <p className="text-center w-[256px] font-semibold text-[#7D889E]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </section>
      </main>
  )
}
export default App
