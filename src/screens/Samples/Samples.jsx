import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import css from './Samples.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import marrocos from '../../assets/samples/marrocos.png';
import tulum from '../../assets/samples/tulum.png';
import grecia from '../../assets/samples/grecia.png';
import bali from '../../assets/samples/bali.png';
import beach from '../../assets/samples/beach.png';
import italia from '../../assets/samples/italia.png';
import colors from '../../assets/samples/colors.png';

function Samples() {
    const swiperRef = useRef(null);

    const images = [
        { "src": tulum, "alt": "Tulum", "name": "TULUM" },
        { "src": marrocos, "alt": "Marrocos", "name": "MARROCOS" },
        { "src": grecia, "alt": "Grécia", "name": "GRÉCIA" },
        { "src": bali, "alt": "Bali", "name": "BALI" },
        { "src": beach, "alt": "Beach", "name": "BEACH" },
        { "src": italia, "alt": "Itália", "name": "ITÁLIA" },
        { "src": colors, "alt": "Colors", "name": "COLORS" },
    ];

    return (
        <section id='espacos' className={css['fundo-tela']}>
            <div className={css.container}>
                <h2 className={css['titulo-carrossel']}>Nossos Espaços</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    navigation={{}}
                    pagination={{ clickable: true }}
                    className={css['meu-carrossel']}
                    onInit={(swiper) => { swiperRef.current = swiper; }}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className={css['meu-slide']}>
                            <div className={css['imagem-container']}>
                                <img src={image.src} alt={image.alt} className={css['imagem']} />
                            </div>
                            <p className={css['nome-imagem']}>{image.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Samples;
