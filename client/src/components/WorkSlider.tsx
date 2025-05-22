
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const projects = [
  {
    id: 'quantum-financial',
    client: 'Quantum Financial',
    category: 'Web Design',
    description: 'A modern banking platform with intuitive user experience.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    id: 'nimble-athletics',
    client: 'Nimble Athletics',
    category: 'Branding',
    description: 'Premium fitness apparel brand identity design.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80'
  },
  {
    id: 'urban-harvest',
    client: 'Urban Harvest',
    category: 'E-Commerce',
    description: 'An organic food marketplace connecting local farmers.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80'
  },
  {
    id: 'global-finance',
    client: 'Global Finance',
    category: 'Web Development',
    description: 'Interactive data visualization platform.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  }
];

export const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.client}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">{project.client}</h3>
              <p className="text-sm text-gray-200">{project.category}</p>
              <p className="mt-2">{project.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
