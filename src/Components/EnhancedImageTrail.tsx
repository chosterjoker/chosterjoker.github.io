import ImageTrail, { ImageTrailItem } from './ImageTrail/image-trail'

// Import images from assets
import img0422 from '../assets/IMG_0422.jpeg'
import img2186 from '../assets/IMG_2186.jpeg'
import img2802 from '../assets/IMG_2802.jpeg'
import danielCaeser from '../assets/daniel_caeser.jpg'
import img7166 from '../assets/IMG_7166.jpeg'
import img8354 from '../assets/IMG_8354.jpeg'
import dsc09241 from '../assets/DSC09241.jpeg'
import cats from '../assets/cats.jpg'
import parasite from '../assets/parasite.jpg'

const EnhancedImageTrail = () => {
  return (
    <ImageTrail
      threshold={60}
      keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 0] }}
      keyframesOptions={{
        opacity: { duration: 1, times: [0, 0.001, 0.9, 1] },
        scale: { duration: 1, times: [0, 0.8, 1] },
      }}
      className="absolute inset-0 w-full h-full z-0"
    >
      {/* Photography Images Only */}
      <ImageTrailItem>
        <div className="w-20 sm:w-28 aspect-square relative overflow-hidden rounded-lg">
          <img
            src={img0422}
            alt="Andrew's Photography"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>

      <ImageTrailItem>
        <div className="w-16 sm:w-20 aspect-square relative overflow-hidden rounded-lg">
          <img
            src={img2186}
            alt="Andrew's Photography"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>

      <ImageTrailItem>
        <div className="w-20 sm:w-28 relative overflow-hidden aspect-[9/16] rounded-lg">
          <img
            src={img2802}
            alt="Andrew's Photography"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>

      <ImageTrailItem>
        <div className="w-16 sm:w-22 aspect-square relative overflow-hidden rounded-lg">
          <img
            src={danielCaeser}
            alt="Daniel Caesar Concert"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>

      <ImageTrailItem>
        <div className="w-20 sm:w-28 aspect-square relative overflow-hidden rounded-lg">
          <img
            src={img7166}
            alt="Andrew's Photography"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>

      <ImageTrailItem>
        <div className="w-18 sm:w-24 aspect-square relative overflow-hidden rounded-lg">
          <img
            src={img8354}
            alt="Andrew's Photography"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>

      <ImageTrailItem>
        <div className="w-20 sm:w-28 aspect-square relative overflow-hidden rounded-lg">
          <img
            src={dsc09241}
            alt="Camera Photography"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>

      <ImageTrailItem>
        <div className="w-16 sm:w-20 aspect-square relative overflow-hidden rounded-lg">
          <img
            src={cats}
            alt="Cats"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>

      <ImageTrailItem>
        <div className="w-20 sm:w-28 aspect-square relative overflow-hidden rounded-lg">
          <img
            src={parasite}
            alt="Parasite Film"
            className="w-full h-full object-cover"
          />
        </div>
      </ImageTrailItem>
    </ImageTrail>
  )
}

export default EnhancedImageTrail 