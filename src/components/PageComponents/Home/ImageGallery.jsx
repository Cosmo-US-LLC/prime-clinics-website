export const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "/gallery-1.jpg",
      alt: "Service image 1",
    },
    {
      id: 2,
      src: "/gallery-2.jpg",
      alt: "Service image 2",
    },
    {
      id: 3,
      src: "/gallery-3.jpg",
      alt: "Service image 3",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-64 sm:h-72 md:h-80"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
