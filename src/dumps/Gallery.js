// Gallery.js
import Masonry from './Masonry';

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://w.wallhaven.cc/full/zp/wallhaven-zpxjjo.jpg",
    height: 400,
  },
  {
    id: "5",
    img: "https://w.wallhaven.cc/full/zp/wallhaven-zpxjjo.jpg",
    height: 600,
  },
  {
    id: "6",
    img: "https://w.wallhaven.cc/full/zp/wallhaven-zpxjjo.jpg",
    height: 800,
  },
  {
    id: "7",
    img: "https://w.wallhaven.cc/full/zp/wallhaven-zpxjjo.jpg",
    height: 700,
  }
];

const Gallery = () => {
  return (
    <div className="p-4">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default Gallery;
