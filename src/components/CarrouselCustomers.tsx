import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/img/altonorte.jpg',
  '/img/alumbrera.jpg',
  '/img/angloamerican.jpg',
  '/img/escondida.jpg',
  '/img/glencore.jpg',
  '/img/lomasbayas.jpg',
  '/img/sierra-gorda.jpg',
]

const CarrouselCustomers: React.FC = () => {
  return (
    <div className="h-[50rem] flex flex-col bg-white py-20 rounded-2xl">
      <div>
        <h2 className="text-4xl text-slate-600 font-extrabold text-start px-8  mb-10">Nuestros principales Clientes</h2>
      </div>
      <div className='flex justify-center mx-auto p-14 w-72'>
        <img src="img/solarwind.jpg" alt="" className='w-64 rounded-tl-2xl' />
        <img src="img/ipswitch.jpg" alt="" className='w-64' />
        <img src="img/fluidmesh.jpg" alt="" className='w-64' />
        <img src="img/cisco.jpg" alt="" className='w-64' />
        <img src="img/fortinet.jpg" alt="" className='w-64 rounded-br-2xl' />
      </div>

      <div className="w-full flex items-center">
        <Swiper
          loop={true}
          freeMode={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={4000}
          breakpoints={{
            320: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 5 },
          }}
          navigation={false}
          className="w-full py-8"
        >
          {images.map((src) => (
            <SwiperSlide key={src}>
              <div className="flex justify-center">
                <img src={src} alt={src.split('/').pop()} className="rounded-xl w-52 object-cover max-h-60" loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="px-8 mt-20 flex justify-end">
        <div className="max-w-[500px] text-right border-t border-b border-slate-300 py-6">
          <p className="text-xl text-slate-600 font-light">
            Trabajamos junto a empresas líderes del sector, entregando soluciones confiables y a medida.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CarrouselCustomers