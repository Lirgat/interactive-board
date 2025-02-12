import vetFac from "../assets/images/vetFac.png"

export interface Store {
    faculties: StoreItem[]
    kafedry: StoreItem[]
}

export interface StoreItem {
    id: string;
    preview: string;
    videoLink: string;
    name: string;
    description: string;
    optionalDescription?: string;
}

export const store:Store = {
    faculties: [
      {
        id: "1",
        preview: `${vetFac}`,
        videoLink: "https://vkvideo.ru/video-103477801_456239665?list=ln-YvzQmIJcfZ20nkA8FG",
        name: "Факультет ветеринарной медицины",
        description: "подразделение Академии, занимающее особое место в подготовке высококвалифицированных специалистов ветеринарной медицины для предприятий агропромышленного комплекса и перерабатывающей промышленности, частного ветеринарного бизнес-сообщества, государственной ветеринарной службы, зоопарков и других объектов содержания животных и сельскохозяйственного производства, для ветеринарных лабораторий, органов Россельхознадзора, компаний, производящих ветеринарные препараты, корма, оборудование и инструменты для животноводства и медицины.",
        optionalDescription: "Цель факультета – укрепление позиций Академии в качестве ведущего центра ветеринарного образования в Российской Федерации, расширение её вклада в агропромышленный комплекс, развитие страны через подготовку конкурентоспособных кадров на основе уникальных педагогических методик и современного материально-технического оснащения.",
      },
      {
        id: "2",
        preview: `${vetFac}`,
        videoLink: "https://example.com/faculty1.mp4",
        name: "Факультет зоотехнологий и агробизнеса",
        description: "Описание факультета №1",
        optionalDescription: "Дополнительное описание факультета №1",
      },
      {
        id: "3",
        preview: `${vetFac}`,
        videoLink: "https://example.com/faculty1.mp4",
        name: "Факультет заочного и очно-заочного (вечернего) образования",
        description: "Описание факультета №1",
        optionalDescription: "Дополнительное описание факультета №1",
      },
    ],
    kafedry: [
      {
        id: "1",
        preview: "https://example.com/kafedra1.jpg",
        videoLink: "https://example.com/kafedra1.mp4",
        name: "Кафедра №1",
        description: "Описание кафедры №1",
        optionalDescription: "Дополнительное описание кафедры №1",
      },
    ],
  };