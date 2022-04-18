import Image from 'next/image'

function MediumCard ({title, img}){
  return (
    <div className="cursor-pointer hover:scale-[1.02] transform transition duration-300 ease-out">
      <div className="relative w-80 h-80 overflow-hidden rounded-xl">
        <Image 
          src={img}
          layout="fill"
        />
      </div>
      <h2 className="mt-2 text-2xl">{title}</h2>
    </div>
  )
}

export default MediumCard