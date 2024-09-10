import css from "./CustomerOpinions.module.css";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function CustomerOpinions() {
  const swiperRef = useRef(null);

  const images = [
    {
      name: "@sigoinvictor_",
      alt: "Avaliação da sigoinvictor_",
      review:
        "Admirável sua entrega nos ensaios. Parabéns pelo trabalho incrível, sempre um privilégio participar do backstage com vocês. 👏",
    },
    {
      name: "@lebemfica_",
      alt: "Avaliação da lebemfica_",
      review:
        "Aaaaaaah ❤️ Eu amei tanto e tanto! Não tinha como ser mais minha cara! Totalmente “fora da caixinha” para noivas que querem fazer diferente! Nem eu sabia que precisava tanto dessas fotos aí ❤️ Fui muito bem recebida, a estrutura é impecável e as possibilidades de foro então, nem se fala ❤️ Sucesso para vocês ❤️",
    },
    {
      name: "@lorenavls",
      alt: "Avaliação da lorenavls",
      review:
        "Ahhhh, eu amei demais. Que entrega, que delicadeza... um dia muito especial! Obrigada, equipe.",
    },
    {
      name: "@meirealvs",
      alt: "Avaliação da meirealvs",
      review: "Uallllll quanto bom gosto 👏👏👏👏",
    },
    {
      name: "@larissafernandex_",
      alt: "Avaliação da larissafernandex_",
      review:
        "Eu fiz meu pré-wedding lá e realmente o ambiente é maravilhoso, eu e meu noivo amamos lá. ❤️",
    },
    {
      name: "@eunimarciade",
      alt: "Avaliação da eunimarciade",
      review: "Vcs são simplesmente fantásticos 👏",
    },
    {
      name: "@rayllabm",
      alt: "Avaliação da rayllabm",
      review: "Ameiii executar esse trabalho nesse espaço 🖤",
    },
    {
      name: "@estermenenezesuai",
      alt: "Avaliação da estermenenezesuai",
      review:
        "Espaço completo, com várias possibilidades, apenas vá e solte sua criatividade.",
    },
    {
      name: "@carllyoficiall",
      alt: "Avaliação da carllyoficiall",
      review: "Perfeita de fato! 🖤",
    },
    {
      name: "@leissamoabe",
      alt: "Avaliação da leissamoabe",
      review: "Lugar perfeito em cada detalhe! ❤️",
    },
    {
      name: "@murilo.biasi",
      alt: "Avaliação da murilo.biasi",
      review:
        "Esse lugar é maravilhoso. E o atendimento deles é impecável. Aproveitem.",
    },
    {
      name: "@keillavenceslauuu",
      alt: "Avaliação da keillavenceslauuu",
      review:
        "Achei essa ideia de uma genealogia incrível, uma nova visão para estúdios fotográficos! Parabéns aos idealizadores 👏👏👏",
    },
  ];

  return (
    <section id="opiniao-cliente" className={css["fundo-tela"]}>
      <div className={css.container}>
        <h2 className={css["titulo-carrossel"]}>
          Qual é a opinião dos nossos clientes?
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          navigation={{}}
          pagination={{ clickable: true }}
          className={css["meu-carrossel"]}
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
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
            <SwiperSlide key={index} className={css["meu-slide"]}>
              <p className={css["nome-cliente"]}>{image.name}</p>
              <p className={css["avaliacao"]}>{image.review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CustomerOpinions;
