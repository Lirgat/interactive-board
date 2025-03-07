// Превью факультетов
import vetFac from "../assets/images/vetFac.png";
import zooFac from "../assets/images/photo_mumu.jpg";
import biofac from "../assets/images/biofac.jpg"
import fzao from "../assets/images/fzao.jpg"
// import kinCollege from "../assets/images/kin.jpg";

//Превьюхи кафедр
///ФВМ
import fvmLogo from "../assets/images/kafedry/facLogo/fvm_100.jpg"
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
import fbieLogo from "../assets/images/kafedry/facLogo/fbe_100.jpg"
import imun from "../assets/images/kafedry/fbie/imun.jpg"
import himia from "../assets/images/kafedry/fbie/himia.jpg"
import virus from "../assets/images/kafedry/fbie/virus.jpg"
import radiobio from "../assets/images/kafedry/fbie/radiobio.png"
import bioteh from "../assets/images/kafedry/fbie/bazbioteh.jpg"
import zoologia from "../assets/images/kafedry/fbie/zoolog.jpg"
import tehkaf from "../assets/images/kafedry/fbie/tehnologii.jpg"
import fizra from "../assets/images/kafedry/fbie/fizra.jpg"

///ФЗТА
import fztaLogo from "../assets/images/kafedry/facLogo/fzta_100.jpg"
import genetika from "../assets/images/kafedry/fzta/genetiki.jpeg"
import zoogigiena from "../assets/images/kafedry/fzta/zoogigiena.jpg"
import korm from "../assets/images/kafedry/fzta/korm.jpg"
import zooteh from "../assets/images/kafedry/fzta/zooteh.jpg"
import bazgen from "../assets/images/kafedry/fzta/bazgen.jpg"
import engrus from "../assets/images/kafedry/fzta/engrus.jpg"
import peredteh from "../assets/images/kafedry/fzta/peredteh.jpg"

export interface Store {
  faculties: StoreItem[];
  kafedry: FacultyKafedraList[];
}

export interface StoreItem {
  id: number;
  logo: string;
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
  facLogo: string;
  kafedraList: KafedraItem[]; // Массив кафедр данного факультета
}

export const store: Store = {
  faculties: [
    {
      id: 1,
      logo: `${fvmLogo}`,
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
      logo: `${fztaLogo}`,
      preview: `${zooFac}`,
      videoLink: "https://vk.com/video_ext.php?oid=-103477801&id=456239691&hd=2&autoplay=1",
      name: "Факультет зоотехнологий и агробизнеса",
      description:
        "В настоящее время факультет зоотехнологий и агробизнеса готовит бакалавров по направлению 36.03.02 – «Зоотехния» на базе фундаментальных биологических и зоотехнических дисциплин. Срок обучения в бакалавриате 4 года очно и 5 лет заочно.",
      optionalDescription:
        "На всех кафедрах факультета работают научные студенческие кружки. Это позволяет студентам раньше приобщаться к научно-исследовательской работе и впоследствии выполнить выпускную квалификационную работу на актуальную тему",
    },
    {
      id: 3,
      logo: `${fzao}`,
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
      logo: `${fbieLogo}`,
      preview: `${biofac}`,
      videoLink: "https://vk.com/video_ext.php?oid=-103477801&id=456239710&hd=2&autoplay=1",
      name: "Факультет биотехнологии и экологии",
      description: "Сегодня факультет биотехнологии и экологии имеет все необходимые ресурсы для успешного развития образовательного потенциала.",
      optionalDescription: "Факультет обладает современной материально-технической базой.  Специализированные лаборатории факультета оборудованы современными приборами и установками. Кафедры и аудитории оснащены компьютерами с выходом в Интернет с мультимедийным оборудованием.",
    },
    // {
    //   id: 5,
    //   logo: ,
    //   preview: `${kinCollege}`,
    //   videoLink: "https://vk.com/video_ext.php?oid=-103477801&id=456239710&hd=2&autoplay=1",
    //   name: "Кинологический колледж",
    //   description:
    //     "Кинологический колледж готовит высококвалифицированных специалистов по специальностям среднего профессионального образования 35.02.15 Кинология, 36.02.01 Ветеринария.",
    //   optionalDescription:
    //     "«Одним из важных условий успешной деятельности в кинологии и ветеринарии является любовь к животным.»",
    // },
  ],
  kafedry: [
    {
      facultyName: "Кафедры факультета ветеринарной медицины",
      facLogo: `${fvmLogo}`,
      kafedraList: [
        {
          id: 1,
          preview: `${anat}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239671&hd=2&autoplay=1",
          name: "Анатомии и гистологии животных имени профессора А.Ф. Климова",
          description: "Кафедра анатомии домашних животных была основана в 1919 году крупнейшим отечественным анатомом – профессором Алексеем Филипповичем Климовым, который руководил ей до 1937 года и был первым деканом ветеринарного факультета.",
          optionalDescription: "Кафедра гистологии была создана в 1922 году. У ее истоков стояли профессор Алексей Филиппович Климов и профессор гистологии Николай Лаврентьевич Юстов. В январе 2007 года кафедра анатомии животных была объединена с кафедрой цитологии, гистологии и эмбриологии и получила название кафедра анатомии и гистологии животных.",
        },
        {
          id: 2,
          preview: `${vetMed}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239672&hd=2&autoplay=1",
          name: "Ветеринарной хирургии",
          description: "На сегодняшний день кафедра представляет собой современный учебный и научный центр, имеющий необходимое оборудование для проведения как фундаментальных исследований, так и освоения студентами практических навыков. Кафедра располагает четырьмя хирургическими операционными (одной для сельскохозяйственных животных), оснащенной аппаратами искусственной вентиляции легких, кардиомониторами, наркозными аппаратами. Эндоскопическое оборудование, имеющееся на кафедре ветеринарной хирургии, позволяет обучать студентов методам лапароскопии, торакоскопии, гастроэзофагоскопии и другим малоинвазивным операциям.",
          optionalDescription: "В своей работе сотрудники кафедры ветеринарной хирургии также используют оборудование, находящиеся в структурном подразделении академии – лчебно-диагностическом лечебно-профилактическом ветеринарном центре, а также филиале кафедры ЗАО «Совхоз имени В.И. Ленина». Все преподаватели активно используют в учебном процессе компьютерное сопровождение, интерактивные средства обучения. На базе УДЛП ВЦ студенты осваивают навыки применения компьютерной томографии при лечении животных с хирургическими патологиями.",
        },
        {
          id: 3,
          preview: `${bolezni}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239673&hd=2&autoplay=1",
          name: "Диагностики болезней, терапии, акушерства и репродукции животных",
          description: "Обучение студентов диагностике незаразных болезней, лечению животных, проведению акушерско-гинекологических манипуляций, оказанию животным акушерской помощи проводится как в академии, так и в условиях производства. В академии ведущие специалисты читают студентам лекции, проводят лабораторные и практические занятия. Кроме теоретической подготовки на кафедре студенты получают практические навыки по выявлению болезней и терапии больных животных. В виварии, в клинике кафедры постоянно содержатся лошади, коровы, козы, овцы, собаки, которые используются в учебном процессе. Осваивают методы выполнения терапевтических процедур. Изучают технику проведения инструментальных исследований.",
          optionalDescription: "Кафедра оснащена необходимыми современными приборами для проведения диагностики и лечения животных, в том числе: электрокардиографом, аппаратом для ультразвуковых исследований, аппаратом для гастроскопии.",
        },
        {
          id: 4,
          preview: `${patolog}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239668&hd=2&autoplay=1",
          name: "Общей патологии имени В.М. Коропова",
          description: "На кафедре реализуется подготовка обучающихся по дисциплинам профессионального цикла на очной, заочной и очно-заочной форме обучения. Кафедра является выпускающей по направлению подготовки 36.05.01 «Ветеринария», осуществляется подготовка по научному профилю аспирантуры 4.2.1. «Патология животных, морфология, физиология, фармакология и токсикология» по группе научных специальностей: Зоотехния и ветеринария.",
          optionalDescription: "Комплексный подход при реализации дисциплин «Патологическая физиология животных», «Патологическая анатомия животных», «Секционный курс и судебная ветеринарная медицина» направлен на получение теоретических знаний и освоение практических навыков студентами.",
        },
        {
          id: 5,
          preview: `${parazit}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239669&hd=2&autoplay=1",
          name: "Паразитологии и ветеринарно-санитарной экспертизы",
          description: "В образовательной деятельности кафедра использует современные методики обучения и формы организации учебного процесса. Применяются новые информационные технологий соответствующие учебно-лабораторной базе образовательных программ. Реализуются формы взаимодействия и интеграции с предприятиями (организациями).",
          optionalDescription: "За последние 5 лет на кафедре издано 56 учебно-методических пособий для студентов, аспирантов, ветеринарных врачей по преподаваемым специальностям. Всего публикаций кафедры за последние 5 лет- более 120.",
        },
        {
          id: 6,
          preview: `${farma}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239667&hd=2&autoplay=1",
          name: "Физиологии, фармакологии и токсикологии им. А.Н. Голикова и И.Е. Мозгова",
          description: "На кафедре функционирует 2 студенческих научных кружка: «Фармакологический кружок» и «Физиологический кружок», в рамках которых студенты имеют возможность расширить и укрепить базовые знания дисциплин, а также принять участие в написании научных статей и выступить с докладами на конференциях различного уровня.",
          optionalDescription: "Идет активное сотрудничество с крупнейшими фармацевтическими производителями лекарственных средств для ветеринарного применения, ознакомительные экскурсии на производство для студентов и привлечения специалистов-производственников для чтения факультативных лекций.",
        },
        {
          id: 7,
          preview: `${filosof}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239674&hd=2&autoplay=1",
          name: "Философии и социально-гуманитарных наук",
          description: "Кафедра проводит занятия на всех факультетах академии, заочном и очно-заочном отделениях, также в кинологическом колледже и преподает основы таких гуманитарных дисциплин, как философия, история (История России), правоведение, психология и педагогика, философские аспекты биологии, культурология, деонтология, этика ветеринарной медицины.",
          optionalDescription: "Кафедра оказывает помощь аспирантам и соискателем в подготовке к вступительным и кандидатским экзаменам, консультирует при работе с рефератами и рецензирует их. В учебном процессе участвует ежегодно около 70 аспирантов и соискателей.",
        },
        {
          id: 8,
          preview: `${epizot}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239670&hd=2&autoplay=1",
          name: "Эпизоотологии и организация ветеринарного дела",
          description: "В образовательной деятельности кафедра использует современные методики обучения и формы организации учебного процесса. Применяются новые информационные технологий соответствующие учебно-лабораторной базе образовательных программ. Реализуются формы взаимодействия и интеграции с предприятиями (организациями).",
          optionalDescription: "Учебный процесс на кафедре является основным делом и занимает у преподавателей максимум времени. В настоящее время преподаватели кафедры читают лекции и проводят лабораторно - практические занятия многим дисциплинам со студентами 1, 4 и 5 курсов очного и вечернего отделений а также 1, 5 и 6 курсов заочного отделения ФВМ по специальности ветеринария; а также 3 и 4 курсов по специальности ветеринарно-санитарнаяэкспертиза; ФЗТА по дисциплине – основы ветеринарии.",
        },
        {
          id: 9,
          preview: `${biobez}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра биологической безопасности объектов ветеринарного надзора и обращения лекарственных средств в ветеринарии",
          description: "На базе ветеринарной академии и ФГБУ «ВГНКИ» создалась базовая кафедра биологической безопасности объектов ветеринарного надзора и обращения лекарственных средств в ветеринарии с целью получения студентами практических навыков в области лабораторных исследований пищевой продукции, кормовых добавок, лекарственных средств для ветеринарии и углубленных и актуальных знаний законодательства. Как отметил ректор академии Сергей Позябин, подобное сотрудничество – это уникальное событие в отечественной ветеринарной медицине.",
          optionalDescription: "Преподавать на кафедре будут ведущие научные сотрудники и высококвалифицированные специалисты учреждения, в том числе к образовательному процессу будут привлечены сотрудники службы Россельхознадзора.",
        },
        {
          id: 10,
          preview: `${ldvc}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра инновационной ветеринарной медицины мелких домашних животных на базе ООО «ЛДВЦ МВА»",
          description: "Цель освоения дисциплины - Помочь обучающимся в освоении и закреплении теоретических и практических знаний, необходимых для работы с мелкими домашними животными в ветеринарной клинике: освоение базовых знаний, умений и навыков, необходимых для работы с мелкими домашними животными. Изучение методов диагностики и лечения мелких домашних животных с использованием современного оборудования, отвечающего мировым стандартам образования.",
          optionalDescription: "Научно-образовательный центр ЛДВЦ - МВА - интегрирует академическую науку, передовые образовательные технологии и практическую ветеринарию, для того чтобы повысить уровень профессиональных знаний и навыков у студентов и ветеринарных врачей.",
        },
      ],
    },
    {
      facultyName: "Кафедры факультета биотехнологии и экологии",
      facLogo: `${fbieLogo}`,
      kafedraList: [
        {
          id: 11,
          preview: `${imun}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239702&hd=2&autoplay=1",
          name: "Иммунологии и биотехнологии",
          description: "Кафедра иммунологии и биотехнологии организована на базе слияния кафедр иммунологии факультета ветеринарной медицины (создана 2003 г, зав. д.биол.н., профессор, член-корр.РАН Д.А. Девришов) и биотехнологии ветеринарно-биологического факультета (создана в декабре 1998, зав. д.мед.н., профессор И.В. Тихонов) и функционирует в структуре ветеринарно-биологического факультета с 2014 года.",
          optionalDescription: "В настоящее время кафедра реализует многовекторные научные исследования в рамках фундаментально-прикладной темы: «Фундаментальные и поисковые исследования в области иммунологии, эпизоотологии, микробиологии, паразитологии и санитарии для обоснования и разработки биологических средств и методов биологического контроля, лечения и профилактики болезней животных, обеспечения эпизоотического и санитарного благополучия и биологической безопасности».",
        },
        {
          id: 21,
          preview: `${himia}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239707&hd=2&autoplay=1",
          name: "Химии имени профессоров С.И. Афонского, А.Г. Малахова",
          description: "Кафедра химии имени профессоров С.И. Афонского, А.Г. Малахова была образована в 2012 г. объединением двух кафедр – кафедры органической и биологической химии имени профессоров С.И. Афонского, А.Г. Малахова и кафедры неорганической и аналитической химии, каждая из которых была организована с первых дней существования академии, с 1919 г.",
          optionalDescription: "Название органической и биологической химии кафедра носила с 1948 г., но уже в 1919 г. одной из первых в Московском ветеринарном институте была организована кафедра биохимии профессором Демяновским С.Я. (руководил ею до 1925 г.) .",
        },
        {
          id: 31,
          preview: `${virus}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239705&hd=2&autoplay=1",
          name: "Вирусологии и микробиологии имени академика В.Н. Сюрина",
          description: "Кафедра вирусологии и микробиологии имени академика В.Н. Сюрина была создана в результате реорганизации кафедр радиобиологии и вирусологии имени академиков А.Д. Белова и В.Н. Сюрина, кафедры эпизоотологии и организации ветеринарного дела и микробиологии в 2021 г. Каждая кафедра имеет богатую историю, берущую начало в середине XX века, огромный опыт учебной и научно-исследовательской деятельности.",
          optionalDescription: "На сегодняшний день кафедра представляет собой современный учебный и научный центр, имеющий необходимое оборудование для проведения, как фундаментальных исследований, так и приобретения обучающимися практических навыков. Кафедра оснащена современным оборудованием, интерактивными средствами обучения, компьютерами.",
        },
        {
          id: 41,
          preview: `${radiobio}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239708&hd=2&autoplay=1",
          name: "Радиобиологии и биофизики имени академика А.Д. Белова",
          description: "Кафедра радиобиологии и биофизики имени академика А.Д. Белова была создана в сентябре 2021 года в результате реорганизации кафедр радиобиологии и вирусологии имени академиков А.Д. Белова и В.Н. Сюрина, частной зоотехнии и информационных технологий, математики и физики. Каждая из перечисленных кафедр имеет богатую историю, берущую начало в середине XX века, огромный опыт учебно-методической и научно-исследовательской деятельности.",
          optionalDescription: "Цель кафедры радиобиологии и биофизики имени академика А.Д. Белова - обеспечить профессиональную подготовку биологов, биотехнологов, технологов пищевого сырья и ветеринарных врачей, способных решать поставленные задачи в соответствии с полученной квалификацией, интересами работодателей и международными требованиями в определенной научной и профессиональной области.",
        },
        {
          id: 51,
          preview: `${bioteh}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра по биотехнологии",
          description: "Создание базовой кафедры биотехнологии будет способствовать практико-ориентированному обучению студентов Академии, ранней профессиональной ориентации, а также проведению научных исследований и экспериментальных разработок.",
          optionalDescription: "Кафедра ориентирована на обеспечение обучающихся факультета биотехнологии и экологии теоретическими знаниями, практическими умениями для формирования целостной системы универсальных знаний по направлению биотехнология. Ознакомление обучающихся с современными технологиями производства препаратов для ветеринарного применения, со стандартами GMP на всех участках производства лекарственных средств, с прикладными исследованиями и разработками.",
        },
        {
          id: 61,
          preview: `${zoologia}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239706&hd=2&autoplay=1",
          name: "Зоологии, экологии и охраны природы имени А.Г. Банникова",
          description: "Кафедра зоологии, экологии и охраны природы имени А.Г. Банникова в процессе обучения применяет следующие образовательные технологии: Технологии дифференцированного и универсального биологического образования, а также современные образовательные технологии (технология уровневой дифференциации, технология проблемного обучения, компьютерные технологии, игровые технологии, технологии развивающего обучения, технология воспитывающего обучения, технология обучения в сотрудничестве).",
          optionalDescription: "С марта 2023 по август 2024 гг. кафедрой руководила кандидат биологических наук, доцент Елена Александровна Макарова. При её активном участии музейная коллекция кафедры приобрела наиболее презентабельный и этический вид современного зоологического музея. С сентября 2024 г. по сегодняшний день кафедру возглавляет кандидат сельскохозяйственных наук, доцент Александр Михайлович Коновалов.",
        },
        {
          id: 71,
          preview: `${tehkaf}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239703&hd=2&autoplay=1",
          name: "Технологии и управления качеством продукции АПК имени С.А. Каспарьянца",
          description: "Одним из основных учебных, методических и научно-исследовательских подразделений факультета биотехнологии и экологии ФГБОУ ВО МГАВМиБ – МВА имени К.И. Скрябина является кафедра технологии и управления качеством продукции АПК имени С.А. Каспарьянца.",
          optionalDescription: "Цель кафедры - Подготовка высококвалифицированных, конкурентноспособных специалистов, свободно владеющих профессиональными компетенциями в производственно-технологической, оценочно-аналитической, заготовительно-перерабатывающей практике и научно-исследовательской деятельности, умеющих ориентироваться в современных реалиях, быть готовыми к профессиональному росту и адаптации в постоянно изменяющихся социальных и экономических условиях.",
        },
        {
          id: 81,
          preview: `${fizra}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239709&hd=2&autoplay=1",
          name: "Физического воспитания",
          description: "Основными задачами физического воспитания студентов академии являются: укрепление здоровья; использования разнообразных средств физической культуры, спорта и туризма; развитие физических качеств и жизненно - необходимых двигательных навыков; профессионально-прикладная, психофизическая и теоретическая подготовка; а также спортивное совершенствование.",
          optionalDescription: "В специальном отделении со студентами, имеющими те или иные временные отклонения в состоянии здоровья или хронические заболевания, занимаются преподаватели, имеющие специальное образование в этой области физической культуры.",
        },
      ],
    },
    {
      facultyName: "Кафедры факультета зоотехнологий и агробизнеса",
      facLogo: `${fztaLogo}`,
      kafedraList: [
        {
          id: 12,
          preview: `${genetika}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239694&hd=2&autoplay=1",
          name: "Генетики и разведения животных им. В.Ф. Красоты",
          description: "Сотрудники кафедры являются соавторами учебников, учебных пособий, монографий, рекомендаций, опубликовано более 1000 научных работ. Под их руководством подготовлено около 500 дипломных работ. При кафедре имеется магистратура и аспирантура. Защищено более 100 кандидатских диссертаций и 25 магистерских диссертаций.",
          optionalDescription: "Преподавателями кафедры разработаны учебно-методические комплексы по всем дисциплинам, читаемым на кафедре, включающие рабочую программу по дисциплине, тематический и календарный план проведения лекционных и семинарских занятий, варианты тестов и контрольных вопросов, методические разработки по дисциплине, копии наглядного и раздаточного материала, перечень вопросов для зачётов и экзаменов.",
        },
        {
          id: 22,
          preview: `${zoogigiena}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239692&hd=2&autoplay=1",
          name: "Зоогигиены и птицеводства им. А.К. Даниловой",
          description: "Кафедра зоогигиены была основана в 1924 году в Московском высшем зоотехническом институте. Первым заведующим кафедрой был профессор Н.В. Зеленин. Затем кафедрой руководили профессор К.А. Котляр (1932-1946 гг.), доцент М.В. Калитаев (1947-1949 гг.).",
          optionalDescription: "В феврале 2017 года на кафедре зоогигиены и птицеводства создана Международная лаборатория молекулярной генетики и геномики птицы, основными направлениями работы которой являются: создание современных биотехнологий для оценки экспрессии генов, связанных с продуктивностью и устойивостью птицы к неблагоприятным факторам, разработка системы мониторига бактерий — патогенов на различных стадиях технологического процесса выращивания и содержания кур, оценка воздействия кормовых добавок различных типов на микрофлору кишечника и продуктивность птицы; разработка систем профилактики бактриальных патогенов у кур — несушек.",
        },
        {
          id: 32,
          preview: `${korm}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239696&hd=2&autoplay=1",
          name: "Кормления и кормопроизводства",
          description: "Кафедра кормления и кормопроизводства организована 30 августа 2013 г. в результате объединения двух кафедр: кафедры кормления животных и кафедры кормопроизводства с основами ботаники и агрономии.",
          optionalDescription: "Кафедра кормления сельскохозяйственных животных как структурное подразделение в составе Московского зоотехнического института была открыта в 1921 г. К этому времени значительные достижения по физиологии пищеварения животных и накопленные многочисленные исследования по оценке питательности кормов явились основой признания мировым научным сообществом кормления животных как самостоятельного раздела сельскохозяйственной науки, что определило его особую роль в развитии животноводства в стране.",
        },
        {
          id: 42,
          preview: `${zooteh}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239698&hd=2&autoplay=1",
          name: "Частной зоотехнии",
          description: "Кафедра частной зоотехнии под новым названием существует с 01.04.2020 года. Объединили две кафедры: кафедру мелкого животноводства и кафедру крупного животноводства и механизации. Заведует кафедрой академик РАН, заслуженный деятель науки, доктор сельскохозяйственных наук профессор Н.А. Балакирев",
          optionalDescription: "Преподаватели кафедры ведут обучение студентов на всех факультетах академии. Со студентами проводятся все формы учебной работы, существующие в ВУЗе. Учебная работа осуществляется в соответствии с Федеральными государственными образовательными стандартами, планами и рабочими программами. В ходе освоения нижеперечисленных дисциплин реализуются следующие компетенции: универсальные, общепрофессиональные, обязательные профессиональные и рекомендуемые профессиональные.",
        },
        {
          id: 52,
          preview: `${bazgen}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра генетических технологий в животноводстве",
          description: "Базовая кафедра генетических технологий в животноводстве создана на базе Московской государственной академии ветеринарной медицины и биотехнологии – МВА им. К. И. Скрябина и Федерального исследовательского центра животноводства — ВИЖ имени академика Л.К. Эрнста",
          optionalDescription: "Целью дисциплины (модуля) является предоставление обучающимся теоретических знаний, практических умений для формирования целостной системы универсальных знаний по молекулярно-генетическому анализу (ДНК-диагностике) сельскохозяйственных животных, подготовка обучающихся к научно-исследовательской деятельности в части междисциплинарных областей, приобретение навыков в проведении экспериментальных молекулярно-генетических исследований, интерпретации и анализа полученных результатов.",
        },
        {
          id: 62,
          preview: "https://example.com/kafedra1.jpg",
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239699&hd=2&autoplay=1",
          name: "Экономики и цифровых технологий в АПК",
          description: "Кафедра экономики, менеджмента и маркетинга и кафедра информационных технологий, математики и физики академии решением учёного совета слиты в одну кафедру - кафедру экономики и информационных технологий в АПК.",
          optionalDescription: "Первые два года обучающиеся изучают базовые дисциплины в зависимости от направления. Затем, в соответствии с требованиями рынка труда, работодателей, они могут осуществлять индивидуальную образовательную траекторию за счёт выбора определенных модулей, курсов по выбору, курсовых работ, прохождения практик. Такой подход требует концентрации усилий нескольких кафедр, нескольких факультетов.",
        },
        {
          id: 72,
          preview: `${engrus}`,
          videoLink: "https://vkvideo.ru/video_ext.php?oid=-103477801&id=456239700&hd=2&autoplay=1",
          name: "Кафедра иностранных и русского языков",
          description: "Цель кафедры - Совершенствование профессионально ориентированного обучения иностранным языкам обучающихся в соответствии с требованиями ФГОС ВО с учетом профиля/направления подготовки.",
          optionalDescription: "Задача кафедры - Повышение уровня практического владения языковыми средствами иностранных и русского языков, необходимыми в сферах и ситуациях устного и письменного общения и формирование у обучающихся профессионально ориентированной межкультурной коммуникативной компетенции.",
        },
        {
          id: 82,
          preview: `${peredteh}`,
          videoLink: "https://example.com/kafedra1.mp4",
          name: "Базовая кафедра передовых технологий в птицеводстве",
          description: "Базовая кафедра создана с целью подготовки кадров для отрасли птицеводства, где в настоящее время наблюдается постоянный дефицит специалистов по кормлению: технологии содержания и селекции птицы. В РФ имеются селекционно-генетические центры по курам, индейкам и уткам, а также более 450 племенных и товарных птицефабрик разного направления продуктивности.",
          optionalDescription: "Целью дисциплины (модуля) «Интенсивное и органическое птицеводство» является формирование у студентов базовых знаний теоретических и практических основ воспроизводства, разведения и селекции, кормления и содержания, технологии производства яиц и мяса птицы, а также их переработки и оценки качества производимой продукции в условиях крупных промышленных птицехозяйств. Формирование у студентов практических навыков и умений в области птицеводства.",
        },
      ],
    },
  ],
};
