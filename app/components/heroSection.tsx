import Image from "next/image"
import profile from "../../public/profile.jpg"
function HeroSection() {
  return (
<main>
      <Image src={profile} alt="profile" />
</main>
  )
}
export default HeroSection
