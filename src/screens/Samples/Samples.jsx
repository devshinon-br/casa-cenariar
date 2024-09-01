import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import css from './Samples.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import imagem1 from '../../assets/samples/IMG_1.png';

function Samples() {
    const swiperRef = useRef(null);

    const images = [
        { "src": imagem1, "alt": "Marrocos", "name": "MARROCOS" },
        { "src": imagem1, "alt": "Tulum", "name": "TULUM" },
        { "src": imagem1, "alt": "Grécia", "name": "GRÉCIA" },
        { "src": imagem1, "alt": "Tulum", "name": "TULUM" }
    ];

    return (
        <section id='espacos' className={css['fundo-tela']}>
            <div className={css.container}>
                <h2 className={css['titulo-carrossel']}>Nossos Espaços</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={{
                        
                    }}
                    pagination={{ clickable: true}}
                    className={css['meu-carrossel']}
                    onInit={(swiper) => { swiperRef.current = swiper; }}
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
