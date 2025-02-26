// Превью факультетов
import vetFac from "../assets/images/vetFac.png";
import zooFac from "../assets/images/photo_mumu.jpg";
import kinCollege from "../assets/images/kin.jpg";

//Превьюхи кафедр
///ФВМ
import anat from "../assets/images/kafedry/fvm/anat.jpg"
import vetMed from "../assets/images/kafedry/fvm/vet-med.jpg"
import bolezni from "../assets/images/kafedry/fvm/bolezni.jpg"
import patolog from "../assets/images/kafedry/fvm/patolog.png"
import parazit from "../assets/images/kafedry/fvm/parazit.jpg"
import farma from "../assets/images/kafedry/fvm/fizio-farma.png"
import filosof from "../assets/images/kafedry/fvm/filosof.jpeg"
import epizot from "../assets/images/kafedry/fvm/epizot.jpg"
import biobez from "../assets/images/kafedry/fvm/biobez.jpg"
import ldvc from "../assets/images/kafedry/fvm/ldvc.jpg"

///ФБИЭ
import imun from "../assets/images/kafedry/fbie/imun.jpg"
import himia from "../assets/images/kafedry/fbie/himia.jpg"
import virus from "../assets/images/kafedry/fbie/virus.jpg"
import radiobio from "../assets/images/kafedry/fbie/radiobio.png"
import bioteh from "../assets/images/kafedry/fbie/bazbioteh.jpg"
import zoologia from "../assets/images/kafedry/fbie/zoolog.jpg"
import tehkaf from "../assets/images/kafedry/fbie/tehnologii.jpg"
import fizra from "../assets/images/kafedry/fbie/fizra.jpg"

///ФЗТА
import genetika from "../assets/images/kafedry/fzta/genetiki.jpeg"
import zoogigiena from "../assets/images/kafedry/fzta/zoogigiena.jpg"

export interface Store {
  faculties: StoreItem[];
  kafedry: FacultyKafedraList[];
}

export interface StoreItem {
  id: number;
  preview: string;
  videoLink: string;
  name: string;
  description: string;
  optionalDescription?: string;
}

export interface KafedraItem {
  id: number; // Уникальный идентификатор кафедры
  preview: string; // URL изображения превью
  videoLink: string; // Ссылка на видео
  name: string; // Название кафедры
  description: string; // Основное описание кафедры
  optionalDescription?: string; // Дополнительное описание (необязательное)
}

// Интерфейс для списка кафедр одного факультета
export interface FacultyKafedraList {
  facultyName: string; // Название факультета
  kafedraList: KafedraItem[]; // Массив кафедр данного факультета
}

export const store: Store = {
  faculties: [
    {
      id: 1,
      preview: `${vetFac}`,
      videoLink:
        "https://vk.com/video_ext.php?oid=-103477801&id=456239665&hd=2&hash=1f1a8af9999f6ae8&autoplay=1",
      name: "Факультет ветеринарной медицины",
      description:
        "подразделение Академии, занимающее особое место в подготовке высококвалифицированных специалистов ветеринарной медицины для предприятий агропромышленного комплекса и перерабатывающей промышленности, частного ветеринарного бизнес-сообщества, государственной ветеринарной службы, зоопарков и других объектов содержания животных и сельскохозяйственного производства, для ветеринарных лабораторий, органов Россельхознадзора, компаний, производящих ветеринарные препараты, корма, оборудование и инструменты для животноводства и медицины.",
      optionalDescription:
        "Цель факультета – укрепление позиций Академии в качестве ведущего центра ветеринарного образования в Российской Федерации, расширение её вклада в агропромышленный комплекс, развитие страны через подготовку конкурентоспособных кадров на основе уникальных педагогических методик и современного материально-технического оснащения.",
    },
    {
      id: 2,
      preview: `${zooFac}`,
      videoLink: "https://example.com/faculty1.mp4",
      name: "Факультет зоотехнологий и агробизнеса",
      description:
        "В настоящее время факультет зоотехнологий и агробизнеса готовит бакалавров по направлению 36.03.02 – «Зоотехния» на базе фундаментальных биологических и зоотехнических дисциплин. Срок обучения в бакалавриате 4 года очно и 5 лет заочно.",
      optionalDescription:
        "На всех кафедрах факультета работают научные студенческие кружки. Это позволяет студентам раньше приобщаться к научно-исследовательской работе и впоследствии выполнить выпускную квалификационную работу на актуальную тему",
    },
    {
      id: 3,
      preview: `${vetFac}`,
      videoLink: "https://example.com/faculty1.mp4",
      name: "Факультет заочного и очно-заочного (вечернего) образования",
      description:
        "Факультет основан в 1956 году и продолжает свою деятельность по настоящее время, накапливая опыт обучения и взаимодействия со студентами, совмещающими учёбу с работой и развитием на производстве в профессиональной среде.",
      optionalDescription:
        "Сегодня основная задача факультета заочного и очно-заочного (вечернего) образования – обеспечение гарантий качества в подготовке высококвалифицированных специалистов в области ветеринарии, зоотехнии и ветеринарно-санитарной экспертизы и содействие при трудоустройстве выпускников.",
    },
    {
      id: 4,
      preview: `${kinCollege}`,
      videoLink: "https://example.com/faculty1.mp4",
      name: "Кинологический колледж",
      description:
        "Кинологический колледж готовит высококвалифицированных специалистов по специальностям среднего профессионального образования 35.02.15 Кинология, 36.02.01 Ветеринария.",
      optionalDescription:
        "«Одним из важных условий успешной деятельности в кинологии и ветеринарии является любовь к животным.»",
    },
  ],
  kafedry: [
    {
      facultyName: "Кафедры факультета ветеринарной медицины",
      kafedraList: [
        {
          id: 1,
          preview: `${anat}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Анатомии и гистологии животных имени профессора А.Ф. Климова",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 2,
          preview: `${vetMed}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Ветеринарной хирургии",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 3,
          preview: `${bolezni}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Диагностики болезней, терапии, акушерства и репродукции животных",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 4,
          preview: `${patolog}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Общей патологии имени В.М. Коропова",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 5,
          preview: `${parazit}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Паразитологии и ветеринарно-санитарной экспертизы",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 6,
          preview: `${farma}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Физиологии, фармакологии и токсикологии им. А.Н. Голикова и И.Е. Мозгова",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 7,
          preview: `${filosof}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Философии и социально-гуманитарных наук",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 8,
          preview: `${epizot}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Эпизоотологии и организация ветеринарного дела",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 9,
          preview: `${biobez}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра биологической безопасности объектов ветеринарного надзора и обращения лекарственных средств в ветеринарии",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 10,
          preview: `${ldvc}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра инновационной ветеринарной медицины мелких домашних животных на базе ООО «ЛДВЦ МВА»",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
      ],
    },
    {
      facultyName: "Кафедры факультета биотехнологии и экологии",
      kafedraList: [
        {
          id: 11,
          preview: `${imun}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Иммунологии и биотехнологии",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 21,
          preview: `${himia}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Химии имени профессоров С.И. Афонского, А.Г. Малахова",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 31,
          preview: `${virus}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Вирусологии и микробиологии имени академика В.Н. Сюрина",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 41,
          preview: `${radiobio}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Радиобиологии и биофизики имени академика А.Д. Белова",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 51,
          preview: `${bioteh}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра по биотехнологии",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 61,
          preview: `${zoologia}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Зоологии, экологии и охраны природы имени А.Г. Банникова",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 71,
          preview: `${tehkaf}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Технологии и управления качеством продукции АПК имени С.А. Каспарьянца",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 81,
          preview: `${fizra}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Физического воспитания",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
      ],
    },
    {
      facultyName: "Кафедры факультета зоотехнологий и агробизнеса",
      kafedraList: [
        {
          id: 12,
          preview: `${genetika}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Генетики и разведения животных им. В.Ф. Красоты",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 22,
          preview: `${zoogigiena}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Зоогигиены и птицеводства им. А.К. Даниловой",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 32,
          preview: "https://example.com/kafedra1.jpg",
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Кормления и кормопроизводства",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 42,
          preview: "https://example.com/kafedra1.jpg",
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Частной зоотехнии",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 52,
          preview: "https://example.com/kafedra1.jpg",
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра генетических технологий в животноводстве",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 62,
          preview: "https://example.com/kafedra1.jpg",
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Экономики и цифровых технологий в АПК",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 72,
          preview: "https://example.com/kafedra1.jpg",
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Кафедра иностранных и русского языков",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
        {
          id: 82,
          preview: "https://example.com/kafedra1.jpg",
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра передовых технологий в птицеводстве",
          description: "Описание кафедры №1",
          optionalDescription: "Дополнительное описание кафедры №1",
        },
      ],
    },
  ],
};
