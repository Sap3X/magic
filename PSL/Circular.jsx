import CircularGallery from './Gallery';


export default function Image(){
    return(
        <div className="relative h-[350px] sm:h-[500px] md:h-[700px]">
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
    )
}

