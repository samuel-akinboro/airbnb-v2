import Image from 'next/image'

function HeroImage() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[607px] 2xl:h-[700px]">
      <Image 
        src="https://links.papareact.com/0fm" 
        layout="fill"
        objectFit='="cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <h1 className='text-sm sm:text-lg font-medium lg:text-2xl'>Not sure where to go? Perfect.</h1>
        <button className='text-purple-500 px-10 py-3 rounded-full shadow-lg bg-white my-6 font-bold cursor-pointer hover:shadow-xl active:scale-90 transition duration-150'>I'm Flexible</button>
      </div>
    </div>
  )
}

export default HeroImage