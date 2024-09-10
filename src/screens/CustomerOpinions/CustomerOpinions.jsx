import css from './CustomerOpinions.module.css';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function CustomerOpinions() {

    const swiperRef = useRef(null);

    const images = [
        { "name": "Maria", "alt": "Avaliação da []", "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a." },
        { "name": "Maria", "alt": "Avaliação da []", "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. See more. " },
        { "name": "Maria", "alt": "Avaliação da []", "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a" },
        { "name": "Maria", "alt": "Avaliação da []", "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ];

    return (
        <section id='opiniao-cliente' className={css['fundo-tela']}>
            <div className={css.container}>
                <h2 className={css['titulo-carrossel']}>Qual é a opinião dos nossos clientes?</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    navigation={{

                    }}
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
                            <p className={css['nome-cliente']}>{image.name}</p>
                            <p className={css['avaliacao']}>{image.review}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default CustomerOpinions
