import css from './CustomerOpinions.module.css';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import clienteficticio from '../../assets/customer-opinions/cliente-ficticio.svg';

function CustomerOpinions() {

    const swiperRef = useRef(null);

    const images = [
        { "src": clienteficticio, "alt": "Avaliação da []", "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a." },
        { "src": clienteficticio, "alt": "Avaliação da []", "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. See more. " },
        { "src": clienteficticio, "alt": "Avaliação da []", "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a" },
        { "src": clienteficticio, "alt": "Avaliação da []", "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ];

    return (
        <section className={css['fundo-tela']}>
            <div className={css.container}>
                <h2 className={css['titulo-carrossel']}>Qual é a opinião dos nossos clientes?</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={{

                    }}
                    pagination={{ clickable: true }}
                    className={css['meu-carrossel']}
                    onInit={(swiper) => { swiperRef.current = swiper; }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className={css['meu-slide']}>
                            <div className={css['imagem-container']}>
                                <img src={image.src} alt={image.alt} className={css['imagem']} />
                            </div>
                            <p className={css['avaliacao']}>{image.review}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default CustomerOpinions
