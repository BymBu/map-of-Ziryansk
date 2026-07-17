export interface LocationPoint {
  id: string;
  name: string;
  coords: [number, number];
  type:
    | "history"
    | "mystery"
    | "nature"
    | "sect"
    | "current"
    | "panorama"
    | "main";
  description?: string;
  images?: string[]; 
  panoramaSrc?: string; 
  confidence?: boolean;
}

export const locations: LocationPoint[] = [
  {
    id: "Kyngora",
    name: "Кынгора",
    coords: [52.266999, 107.790884],
    type: "history",
    description:
      " В XIX — начале XX века здесь стояла одна из трёх часовен. В 1930-х её разрушили. Спустя 70 лет местный житель Геннадий Севергин поставил на этом месте поклонный крест — чтобы место не забыли. Зимой дети частенько скатываются с нее на санях. Сейчас это тихая гора над Итанцей, где раньше молились, а теперь ветер.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kyngora-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kyngora-2.jpg",
    ],
    confidence: true,
  },
  {
    id: "Chasovnya",
    name: "Часовня на горе Кынгора (Утаты)",
    coords: [52.2675899, 107.792959],
    type: "history",
    description:
      "В 1817 году, согласно архивному документу «Описание состоящим по Итанцинской волости часовням» от 21 октября 1817 года, в деревне Утаты (Утатинское) действовала часовня во имя святого Николая Чудотворца. Размеры: в длину 3 аршина 4 вершка, в ширину 2 аршина 12 вершков. В ней находились Животворящий Крест и 4 святых образа. В Зырянске в то же время была часовня Параскевы Пятницы (на месте этой метки) и ещё одна Никольская часовня рядом с местом, где сейчас администрация. После революции все часовни разрушили. Сейчас на горе Кынгора стоит поклонный крест, установленный Геннадием Севергиным. 4-е фото - остатки фундамента от часовни",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/krest.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/krest-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/krest-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784258997/krest-4_cnxqid.jpg",
    ],
    confidence: true,
  },
  {
    id: "GES",
    name: "Зырянская ГЭС",
    coords: [52.269041, 107.792509],
    type: "history",
    description:
      "До ГЭС на этом месте стояла мельница. Саму ГЭС строили в два этапа. Первый — в 1940 году силами трёх колхозов. Второй — после войны: в 1950 году завершили вторую очередь, и свет пришёл в Ангыр, Батурино и Нестерово. Это было сложное гидротехническое сооружение — для наполнения водохранилища даже спрямили устье реки Ангыр. Директором станции был Георгий Михайлович Юртвенсон. Турбина работала недолго — в 1956 году её заменили на дизельную, а в начале 1960-х село подключили к Братской ГЭС, а Зырянскую демонтировали.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ges-6.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784258919/ges-1_hnhlvp.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ges-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ges-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784258932/ges-4_ysjfkm.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784258297/photos/ges-5.jpg",
    ],
    confidence: true,
  },
  {
    id: "old-kladbische",
    name: "Старое кладбище",
    coords: [52.270499, 107.79159],
    type: "history",
    description:
      "Современное кладбище, но уже заполненное. Ближе к входу — свежие захоронения. Дальше, в глубине, — едва заметные бугорки без крестов. Там лежат поколения, которые уже никто не помнит. Когда-то кладбище, скорее всего, было больше — оно начиналось левее и упиралось в то место, где сейчас проложена дорога. Кости, которые до сих пор торчат из стены у дороги, — подтверждение того, что дорога прошла прямо через старые захоронения. Раньше вход на кладбище, вероятно, был с левой стороны. После того как дорога 'разрезала' погост, вход перенесли на нынешнее место.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784259003/kladbische-1_pevsmn.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784259005/kladbische-2_ydb9n3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kladbische-3.jpg",
    ],
    confidence: true,
  },
  {
    id: "bones",
    name: "Кости в стене у дороги",
    coords: [52.271008, 107.791561],
    type: "history",
    description:
      "Это место — самая страшная и самая честная страница истории Зырянска. Кости торчат из стены прямо у дороги. Их вскрыли, когда строили проезд через склон. В 2026 году я заглянул туда, вытащил кость и потрогал её руками. Она была лёгкая, сухая, почти как дерево. Возраст таких костей — примерно 100–200 лет. Они лежат там, где когда-то продолжалось кладбище. Им уже всё равно на дороги.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/bones-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/bones-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/bones-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/bones-4.jpg",
    ],
    confidence: true,
  },
  {
    id: "new-kladbische",
    name: "Новое кладбище",
    coords: [52.272338, 107.790233],
    type: "current",
    description:
      "Современное кладбище, открытое в последние десятилетия. Здесь хоронят тех, кто уходит сейчас — в том числе участников СВО. К истории села почти не относится, но это тоже часть жизни Зырянска.",
    images: [],
    confidence: true,
  },
  {
    id: "miru-mir",
    name: "Надпись «МИРУ МИР»",
    coords: [52.273263, 107.790091],
    type: "history",
    description:
      "Лесники высадили деревья так, чтобы с высоты читалась надпись «МИРУ МИР». Задумка была красивая, но часть букв не прижилась, и теперь в одном месте чернеют пустоты. Если присмотреться, слова всё ещё угадываются — особенно после того, как я дорисовал их чёрным на карте. Получилось, что недописанный лес стал похож на послание, которое никто не дочитал.",
    images: [],
    confidence: true,
  },
  {
    id: "school",
    name: "Зырянская средняя школа",
    coords: [52.26491, 107.775711],
    type: "history",
    description:
      "Первая школа в Зырянске открылась в 1905 году — это было начальное училище. В 1960-е годы построили новое здание, где уже учились все классы. Сейчас школа работает, но учеников стало меньше. Деревня стареет. На первом фото - школа в  2014 году",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/school-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/school-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/school-3.jpg",
    ],
    confidence: true,
  },
  {
    id: "utaty-landings",
    name: "Землянки и силосные ямы (Утаты)",
    coords: [52.277645, 107.784694],
    type: "history",
    description:
      "В полях, на месте бывшей деревни Утаты, сохранились следы хозяйственной жизни. Мы нашли хранилище и несколько землянок — одна из них открыта, внутри шлак и остатки деревянных перекрытий. Судя по конструкции, это было зернохранилище: холм, накрытый целлофаном и землёй. Рядом — огромная траншея силосной ямы — в неё закладывали корм для скота. Всё вместе говорит о том, что Утаты не просто были деревней, а работали как колхозный узел.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/zeml-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784259072/zeml-2_rhnmmx.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/zeml-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/zeml-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/zeml-5.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784259074/zeml-6_wavxir.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/zeml-7.jpg",
    ],
    confidence: true,
  },
  {
    id: "mtf",
    name: "МТФ (молочно-товарная ферма)",
    coords: [52.279499, 107.780627],
    type: "history",
    description:
      "МТФ — это молочно-товарная ферма. В СССР такие были в каждом крупном селе. Держали коров, доили, сдавали молоко государству. На МТФ работала добрая половина деревни — доярки, скотники, водители. В Зырянске МТФ держалась дольше, чем СТФ. Говорят, она работала почти до наших дней. Но недавно сгорела. Сейчас вместо фермы только пепелище и обугленный бетон.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-5.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-6.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-7.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-8.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-9.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-10.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-11.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-12.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-13.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-14.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-15.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-16.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-17.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-18.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-19.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-1-20.jpg",
    ],
    confidence: true,
  },
  {
    id: "mtf2",
    name: "МТФ (молочно-товарная ферма)",
    coords: [52.268629, 107.773011],
    type: "history",
    description:
      "Молочно-товарная ферма. Когда-то здесь было три соединённых строения — коровники, доильные залы, склады. На пике развития в совхозе было 508 коров и 1619 голов молодняка. Ферма давала работу половине села. Здесь работала моя бабушка. Сейчас от фермы остались только руины каркасов, бетонные фундаменты, куски асфальта и разбросанные строительные блоки.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-alpha.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-5.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-6.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-7.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-8.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-9.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-10.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-11.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-12.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mtf-2-13.jpg",
    ],
    confidence: true,
  },
  {
    id: "stf",
    name: "СТФ (свинотоварная ферма)",
    coords: [52.266364, 107.756823],
    type: "history",
    description:
      "В советское время при каждом колхозе строили СТФ — свинотоварные фермы. Это были отдельные комплексы, где держали свиней, кормили их, разводили и сдавали мясо государству. СТФ давала работу местным и была частью колхозной экономики. Сейчас от этой фермы почти ничего не осталось — только фундамент, каркас и поломанные бетонные плиты. Она давно не работает, и даже те, кто жил рядом, уже не помнят, когда там в последний раз хрюкали.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/stf-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/stf-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/stf-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/stf-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/stf-5.jpg",
    ],
    confidence: true,
  },
  {
    id: "unknown-utaty-kladbische",
    name: "Неизвестное кладбище (Утаты)",
    coords: [52.277732, 107.7748],
    type: "history",
    description:
      "На топографической карте 1988 года это место отмечено как кладбище. Однако местные жители утверждают, что ничего такого здесь не было. Ни могил, ни крестов, ни следов захоронений. По другим слухам, здесь мог быть лединик — скотомогильник, куда свозили павших животных. Есть даже версия, что это место расстрела людей, но документальных подтверждений этому нет. Сейчас на этом месте — ровное поле, которое давно пашут. Карта говорит одно, люди — другое. Возможно, ошибка картографов. Возможно, кладбище было, но его заровняли, и о нём забыли. Точного ответа нет.",
    images: [],
    confidence: false,
  },
  {
    id: "utaty",
    name: "Утаты (Утатайская) — исчезнувшая деревня",
    coords: [52.277918, 107.778167],
    type: "history",
    description:
      "Утаты — это не просто поле за рекой. В XIX — начале XX века здесь была целая деревня. Она стояла на правом, возвышенном берегу Итанцы, отдельно от Зырянска. Здесь были дома, три часовни, зернохранилища, фермы. Деревня исчезла в XX веке — скорее всего, в 1930-е, когда началась коллективизация, или позже, в 1950-е, когда мелкие сёла стали укрупнять. Сейчас от Утатов остались только поле, крапива, фундаменты и ямы.",
    images: [],
    confidence: true,
  },
  {
    id: "lovcova",
    name: "Ловцова — исчезнувшая деревня",
    coords: [52.246793, 107.784152],
    type: "history",
    description:
      "Ловцова — ещё одна деревня, которая когда-то существовала рядом с Зырянском. Она стояла на левом берегу Итанцы, напротив Утатов, примерно в полутора верстах от Зырянска. Рядом было небольшое озеро, которое со временем пересохло. Точное местоположение утеряно — она слишком далеко, чтобы быть частью села, и слишком исчезнувшей, чтобы о ней помнили. Сейчас там — поле, и никто уже не скажет, где стояли дома.",
    images: [],
    confidence: false,
  },
  {
    id: "evenki-khutor",
    name: "Эвенкийский хутор",
    coords: [52.250117, 107.790217],
    type: "history",
    description:
      "В лесном массиве напротив западной окраины Зырянска когда-то находился хутор эвенков. В 1980-х ещё можно было разглядеть остатки построек — следы деревянных домов, ямы от чумов. По рассказам старожилов, здесь также содержали японских военнопленных. Сейчас на этом месте — поле, которое давно заросло травой. Сведений о названии хутора не сохранилось.",
    images: [],
    confidence: false,
  },
  {
    id: "zyryansk",
    name: "Зырянск",
    coords: [52.265368, 107.771131],
    type: "main",
    description:
      "Село на берегу реки Итанцы. Известно с 1735 года. Когда-то здесь было три деревни, колхоз, фермы и даже своя ГЭС. Сейчас — тишина, пустые дома и несколько десятков людей, которые ещё помнят, как здесь кипела жизнь. В 2026 году я прошёл по каждому забору, нашёл кости, остатки строений и следы исчезнувших деревень. Это — моя карта памяти. 1-e фото - Собрание колхоза в с Зырянск, 1 ряд в центре сидит Баталов Иван Никанорович, 2-е фото - правление колхоза в Зырянске, 30-е годы, 3-е фото - картина зырянска, 4-е бухгалтера совхоза Зырянский. Эти и остальные фото можно посмотреть на странице библиотеки Зырянска в одноклассниках",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-5.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-6.jpg",
    ],
    confidence: true,
  },
  {
    id: "zyryansk-kic",
    name: "Зырянский КИЦ (культурно-информационный центр)",
    coords: [52.2644, 107.779285],
    type: "current",
    description:
      "Здание местного клуба, построенное в 1965 году. В нём расположены зрительный зал, библиотека, комната боевой славы, кружки и студии. Раньше здесь работал магазин «Весна», была почта, а библиотека и сейчас на месте. В 2011 году открылся культурно-информационный центр. С 2013 года директор — Голубева С. А. В 2025 году клуб вошёл в федеральную программу капремонта — выделили больше 9 миллионов рублей. Жители ждут, что здесь станет тепло, уютно и красиво. Сейчас в клубе плетут маскировочные сети, занимаются дети и взрослые. Это единственное место в селе, где ещё можно собраться всем вместе.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kic-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kic-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kic-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kic-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kic-5.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kic-6.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kic-7.jpg",
    ],
    confidence: true,
  },
  {
    id: "zyryansk-post-office",
    name: "Здание бывшей почты (жилой дом)",
    coords: [52.264158, 107.776846],
    type: "history",
    description:
      "В этом доме раньше находилась почта. Сюда приходили за письмами, посылками и газетами. Мой папа сюда ходил в своё время. Сейчас здесь просто жилой дом — почту закрыли, и людей осталось так мало, что здание продали или отдали под жильё.",
    images: [],
    confidence: true,
  },
  {
    id: "administration",
    name: "Администрация (бывшая часовня и школа)",
    coords: [52.265657, 107.77529],
    type: "history",
    description:
      "На этом месте раньше стояла часовня во имя святого Николая Чудотворца. В 1817 году она числилась в архивных документах. Позже часовню утратили, а на её месте построили здание начальной школы. Здесь же находилась библиотека и жили учителя. В 2005 году здание стало сельской администрацией, которую возглавляет Погорельский Владимир Викторович. У администрации есть место для пожарной машины.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/admin-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/admin-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/admin-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/admin-4.jpg",
    ],
    confidence: true,
  },
  {
    id: "teplitci",
    name: "Теплицы",
    coords: [52.265682, 107.785202],
    type: "history",
    description:
      "Сегодня на этом месте — почти ровное поле, а когда-то здесь стояли теплицы. В советское время в Зырянске выращивали овощи: огурцы, помидоры, лук. Работали круглый год, давали урожай даже зимой. Сейчас от них почти ничего не осталось — только крапива, бугры да редкие осколки стекла и ржавые трубы. Когда я впервые пришёл сюда, я подумал, что это старый погост: слишком ровные бугры и слишком сочная крапива. Но папа сказал — это не кладбище, это просто теплицы, которые никто не убрал. Земля помнит, что здесь что-то росло.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/teplica.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/teplica-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784259064/teplica-3_ufvaix.jpg",
    ],
    confidence: true,
  },
  {
    id: "kapusta-pole",
    name: "Капустные поля (бывшие)",
    coords: [52.266015, 107.784059],
    type: "history",
    description:
      "Рядом с теплицами когда-то была обширная территория, где выращивали капусту. В советское время здесь сажали сотни кочанов — капуста шла в колхозные столовые, в Зырянск, Турунтаево и даже дальше по району. Земля была жирная, урожайная. Сейчас это поле, но очертания грядок ещё угадываются — особенно весной, когда трава только начинает лезть. Капусту здесь не сажают уже лет тридцать, а может и больше.",
    images: [],
    confidence: true,
  },
  {
    id: "pilrama",
    name: "Пилорама (местная)",
    coords: [52.265889, 107.783294],
    type: "history",
    description:
      "Когда-то здесь работала пилорама. Сюда возили лес из окрестных лесов, пилили доски, брус, горбыль. На пилораме трудились мужики, звенели бензопилы, пахло свежей древесиной и опилками. Примерно лет шесть назад она ещё работала — я сам сюда лазил. Сейчас уже не знаю, что там: то ли стоит брошенная, то ли разобрали на металлолом. Следы пилорамы — горы опилок, старые бетонные плиты и ржавые ленты от пил. Деревня, которая жила лесом.",
    images: [],
    confidence: true,
  },
  {
    id: "mini-biblioteka",
    name: "Мини-библиотека (бывшая)",
    coords: [52.265673, 107.775839],
    type: "history",
    description:
      "Рядом с администрацией когда-то была небольшая библиотека. Папа рассказывал, что она работала, когда он был маленьким. Местные брали книги — и взрослые, и дети. В деревне не было интернета, и книги были главным окном в мир. Место, где она стояла, же давно пустое пространство, да и библиотеки нет. Только память о том, что кто-то брал «Трёх мушкетёров» и зачитывался до дыр.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/biblioteka-1.jpg",
    ],
    confidence: true,
  },
  {
    id: "post-office-old",
    name: "Почта (старая)",
    coords: [52.265837, 107.777763],
    type: "history",
    description:
      "По рассказам местных, на месте, где сейчас стоит детская площадка, раньше находилась почта, но сейчас тут пустое место. Сюда приходили за письмами, посылками, газетами. Папа точно не помнит, но говорят, что она действительно была. Сейчас здесь площадка — качели, горка, тишина.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/mail-1.jpg",
    ],
    confidence: true,
  },
  {
    id: "club-burnt",
    name: "Сгоревший клуб (бывший)",
    coords: [52.265295, 107.777844],
    type: "history",
    description:
      "До того как здесь построили детскую площадку, на этом месте стоял местный клуб. В нём собирались жители, смотрели кино, танцевали, праздновали праздники. Клуб был центром жизни села. Потом он сгорел. Дословно — дотла. От него остались только фундамент и угли. Позже площадку выровняли, поставили качели и горку, но старожилы до сих пор показывают рукой и говорят: «Здесь был клуб». Фотографий не сохранилось — только память.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/burn-club-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/burn-club-2.jpg",
    ],
    confidence: true,
  },
  {
    id: "berezka",
    name: "Магазин «Берёзка», Детский сад, Фельдшерский пункт (бывший химсклад)",
    coords: [52.265263, 107.778942],
    type: "history",
    description:
      "Сейчас здесь продуктовый магазин «Берёзка», рядом — детский сад «Одуванчик» и фельдшерский пункт. Раньше в этом здании был химсклад — хранили удобрения, ядохимикаты, семена. Запах был такой, что дети обходили стороной. Потом склад закрыли, здание стояло пустым. Позже в него заехал магазин — я помню, как в детстве мама брала меня с собой, я сидел в коляске и ждал её на улице. Магазин пережил несколько закрытий, но в 2026 году открылся снова — теперь уже как «Берёзка». Детский сад «Одуванчик» работает по направлению экологического воспитания, здесь созданы уголки природы и краеведения. Территория сада благоустроена руками сотрудников и родителей. Весной вся площадка превращается в жёлтое поле — отсюда и название.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/berezka-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/berezka-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/berezka-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/berezka-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/berezka-5.jpg",
    ],
    confidence: true,
  },
  {
    id: "mashinny-dvor",
    name: "Машинный двор (бывший)",
    coords: [52.261761, 107.776146],
    type: "history",
    description:
      "Рядом с трассой, на въезде в село, находился машинный двор. Там стояли тракторы, комбайны, грузовики — вся техника колхоза «Путь социализма». Механики чинили моторы, сваривали детали, меняли колёса. Место гудело от работы. Сейчас здесь тишина, часть техники ушла на металлолом, часть разобрали по частям.",
    images: [],
    confidence: true,
  },
  {
    id: "promtovary",
    name: "Магазин промтоваров (бывший)",
    coords: [52.264164, 107.77756],
    type: "history",
    description:
      "Напротив нынешнего «Магнита», когда-то работал магазин промтоваров. Здесь продавали не еду, а вещи — обувь, одежду, посуду, инструменты, ткани. Местные ходили сюда покупать сапоги, топоры, кастрюли и даже школьную форму. В 90-е он закрылся, как и многое в селе. Сейчас на этом месте — пустота, заросшая травой. Ни здания, ни вывески. Только местные ещё помнят, что здесь можно было купить почти всё, кроме еды.",
    images: [],
    confidence: true,
  },
  {
    id: "magnit",
    name: "Магазин «Магнит» (бывший сельский магазин)",
    coords: [52.263937, 107.777978],
    type: "history",
    description:
      "Сейчас здесь «Магнит», но магазин на этом месте был всегда. Кто-то из старожилов называет его просто «продуктовый», кто-то помнит ещё старую вывеску. Сюда ходили за хлебом, молоком и крупами. Потом сюда заехал «Магнит», и никто уже не помнит, как магазин назывался раньше. Здание то же, но вывески сменились. Как будто память стёрли вместе с названием.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/magnit-1.jpg",
    ],
    confidence: true,
  },
  {
    id: "vesna-magazin",
    name: "Магазин «Весна»",
    coords: [52.264822, 107.777928],
    type: "history",
    description:
      "В этом здании сейчас магазин «Весна». Когда-то давно магазин занимал часть здания КИЦ, а потом его перенесли сюда — увеличение, масштабирование. До «Весны» здесь была гостиница — на втором этаже стояли кровати, и я помню их до сих пор. А слева, в задней части здания, работала пекарня. Я застал её — пахло хлебом, и это был один из тех запахов, которые не забываются.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/vesna-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/vesna-3.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/vesna-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/burn-club-2.jpg",
    ],
    confidence: true,
  },
  {
    id: "raznaryadka",
    name: "Дом разнарядки (бывший)",
    coords: [52.264874, 107.780124],
    type: "history",
    description:
      "Маленький дом у гаражей, сейчас заколоченный и пустой. Раньше в нём была разнарядка — отсюда раздавали задания на день: кому на поле, кому на ферму, кому за руль. В советское время это был центр управления рабочим днём. Именно здесь выписывали путёвки, выдавали наряды, решали, кто куда поедет. Теперь дом забит досками, и только старожилы помнят, как сюда с утра тянулись люди с папками и листочками. 3-е фото - грузотакси. Перевозили людей на сельхозработы.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/raznaryadka-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/raznaryadka-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/raznaryadka-3.jpg",
    ],
    confidence: true,
  },
  {
    id: "ogonok",
    name: "Магазин «Огонёк»",
    coords: [52.264401, 107.780866],
    type: "history",
    description:
      "Раньше здесь стоял дом, где жили две бабушки. Потом в нём открылся магазин «Огонёк». Дом перестроили, он стал двухэтажным. Я помню его ещё до пожара — мы ходили туда за чем-то, но это стёрлось из памяти. Огонёк горел, когда я учился в школе. Это был мой первый звонок в 112. До сих пор помню, как набирал номер и говорил, что горит магазин. Сейчас на этом месте стоит одноэтажный «Огонёк» — тот самый, восстановленный. Он всё ещё работает. И стоит там же.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ogonek-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ogonek-2.jpg",
    ],
    confidence: true,
  },
  {
    id: "magazin-buryaty",
    name: "Магазин (бурятский)",
    coords: [52.264132, 107.784315],
    type: "history",
    description:
      "Маленький магазинчик, совсем небольшой — даже не магазин, а скорее лавка. В этом доме жили буряты, и там же держали магазин. Продавали что-то простое, деревенское — скорее всего продукты. Помню, как папа заходил туда что-то покупать, я стоял рядом и ждал. Магазина давно нет, дом стоит пустой, но этот кадр из детства остался: маленький дом, папа выходит с пакетом.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/shop-bur-1.jpg",
    ],
    confidence: true,
  },
  {
    id: "angyrchik",
    name: "Речка Ангырчик",
    coords: [52.264335, 107.787912],
    type: "nature",
    description:
      "Когда-то Ангырчик был настоящей рекой. Говорят, в нём даже лошади купались — такой он был глубокий и полноводный. Сейчас это просто ручей, который можно перешагнуть. Когда я был маленьким, мы с пацанами бродили по нему, плескались в воде. Помню, как трактором нам выкапывали яму, чтобы было где купаться. Сейчас река обмелела, заросла, но я до сих пор помню её прохладу и тот летний запах воды.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/river-angyr-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/river-angyr-2.jpg",
    ],
    confidence: true,
  },
  {
    id: "azs",
    name: "АЗС (бывшая)",
    coords: [52.256916, 107.780158],
    type: "history",
    description:
      "Бывшая автозаправочная станция, недалеко от места, где когда-то была деревня Ловцова. Когда-то здесь заправлялись машины, тракторы, грузовики. Сейчас от АЗС почти ничего не осталось — пара бетонных плит да ржавые трубы. Возможно, заправка работала, когда колхоз ещё был жив. Сейчас здесь тишина и редкие машины, которым давно не нужно топливо из этого места.",
    images: [],
    confidence: true,
  },
  {
    id: "pionerlager",
    name: "Пионерлагерь (бывший)",
    coords: [52.257485, 107.818629],
    type: "history",
    description:
      "Где-то вдалеке от деревни, у подножия горы, когда-то был пионерлагерь. Звучит как что-то из советских фильмов — горны, костры, отряды. Сейчас, конечно, ничего этого нет. Даже следов почти не осталось — только если знать, куда смотреть. Когда-то сюда привозили детей на лето, они играли, ходили в походы, пели песни. А теперь это место просто тишина и трава. И горы, которые всё помнят.",
    images: [],
    confidence: true,
  },
  {
    id: "ovoshchnoe-pole",
    name: "Овощное поле (бывшее)",
    coords: [52.261382, 107.814499],
    type: "history",
    description:
      "Совсем рядом находилось поле, где выращивали овощи. Сажали капусту, лук, морковь — что-то шло в колхозную столовую, что-то на продажу. Папа вспоминал, что поле было большим, ухоженным — как и всё в советское время. Теперь это просто участок земли, который зарастает травой и кустарником. Но если хорошо приглядеться, до сих пор можно заметить очертания бывших грядок.",
    images: [],
    confidence: true,
  },
  {
    id: "nasosnaya-stantsiya",
    name: "Насосная станция (бывшая)",
    coords: [52.265792, 107.8229992],
    type: "history",
    description:
      "Рядом с полями когда-то работала насосная станция. Качала воду для полива — овощи без воды не вырастить.",
    images: [],
    confidence: true,
  },
  {
    id: "utaty-river",
    name: "Речка Утаты (высохшая)",
    coords: [52.280116, 107.774599],
    type: "nature",
    description:
      "На Яндекс Картах она ещё обозначена, но если приехать на место — её почти нет. Тоненький ручеёк, который пересох в сухое время года. Когда-то она питала поля и поила скот. Сейчас от неё осталась только память в картах и названиях — Утаты, Утатайская. Вода ушла, как и деревня.",
    images: [],
    confidence: true,
  },
  {
    id: "itantsa-river",
    name: "Река Итанца",
    coords: [52.270901, 107.775054],
    type: "nature",
    description:
      "Река Итанца — главная водная артерия Зырянска. Именно на её берегах стояли наши три деревни: Зырянская, Утаты и Ловцова. Когда-то она была полноводной — купались, брали воду, строили запруды. На ней стояла мельница и даже ГЭС! Сейчас Итанца мельче, но всё ещё держит жизнь в селе. Зимой по ней на лыжах катаются, летом — рыбачат. Она видела всё: и колхоз, и ГЭС, и пустые берега.",
    images: [],
    confidence: true,
  },
  {
    id: "gora-marhatai",
    name: "Гора Мархатай",
    coords: [52.272969, 107.764145],
    type: "nature",
    description:
      "Гора Мархатай — та самая, что виднеется с дороги на Турунтаево. Сама гора очень большая, но на приложенном фото лишь часть. До неё от Зырянска всегда казалось далеко: идти через Итанцу, потом через лес, и вот она, уже рядом. В детстве я иногда катался там зимой — санки, горка, ветер в лицо. Я помню этот путь — холод, хруст снега и ощущение, что ты на краю мира. Сейчас — просто гора, с которой видно всё село.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/marxatay-1.jpg",
    ],
    confidence: true,
  },
  {
    id: "child-playground",
    name: "Детская площадка",
    coords: [52.265705, 107.777052],
    type: "current",
    description:
      "Сейчас это довольно приличная площадка с турниками, качелями и горками. Но я помню, как она выглядела до этого. Тогда здесь стояли старые качели, лавочка и всё. Весь класс после уроков бежал сюда — кто первый, тот и качается. В мои школьные годы площадку наконец прокачали: поставили новые турники, качели, покрытие. Помню даже стройку — приходили и смотрели, как что-то меняется. Теперь сюда приходят дети помладше, а мы уже выросли.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ploshadka-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ploshadka-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/ploshadka-3.jpg",
    ],
    confidence: true,
  },
  {
    id: "babushki-lavochka",
    name: "Дом у лавочки",
    coords: [52.26434, 107.78489],
    type: "current",
    description:
      "Обычный деревенский дом, каких в Зырянске много. Но я запомнил его по лавочке у калитки. В моём раннем детстве на ней всегда сидели бабушки и дедушки — старожилы, которые знали всё про село. Они обсуждали погоду, новости, вспоминали, кто где жил и что было раньше. Сейчас лавочка пустая. Стариков уже нет, или они не выходят. Дом стоит, но без тех голосов он кажется другим — тихим и чужим.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/dom-star-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/dom-star-2.jpg",
    ],
    confidence: true,
  },
  {
    id: "most",
    name: "Мост через Итанцу",
    coords: [52.268742, 107.786205],
    type: "history",
    description:
      "Этот мост соединяет две части Зырянска — через реку Итанцу. По нему ездят каждый день. Раньше был ещё один мост, старый, но от него остались только остатки — пара столбов. Мост, по которому ездят сейчас, держится, но и он стареет.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/most-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/v1784259005/most-2_rxwduw.jpg",
    ],
    confidence: true,
  },
  {
    id: "memorial-vov",
    name: "Памятник воинам-землякам (ВОВ)",
    coords: [52.264929, 107.776953],
    type: "history",
    description:
      "Памятник воинам-землякам, павшим на фронтах Великой Отечественной войны. Объект имеет статус памятника истории регионального значения. Мемориал включает в себя стену с именами погибших зырянцев, звезду с Вечным огнём и ограждение из цепей. Когда-то была арка, но она обвалилась. Расположен в центре села. Одно из главных мест памяти для жителей Зырянска.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/memorial-vov-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/memorial-vov-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/memorial-vov-4.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/memorial-vov-3.jpg",
    ],
    confidence: true,
  },
  {
    id: "kotelnaya",
    name: "Котельная",
    coords: [52.265246, 107.777214],
    type: "current",
    description:
      "Отопляет клуб, школу и детский сад. Сначала здесь была котельная, потом здание переделали под гараж, а сейчас снова котельная. Дым идёт, тепло есть — значит, село живёт.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kotelnaya-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/kotelnaya-2.jpg",
    ],
    confidence: true,
  },
  {
    id: "paraskeva-chapel",
    name: "Часовня Параскевы Пятницы",
    coords: [52.264572, 107.777453],
    type: "history",
    description:
      "В XIX веке на горе Кынгора стояла часовня во имя святой великомученицы Параскевы Пятницы. В архивном документе 1817 года указаны её размеры — 3 аршина 4 вершка в длину и 2 аршина 12 вершков в ширину. Внутри хранились Животворящий Крест и четыре святых образа. В 1930-х годах часовню разрушили. В 2012 году на том месте установили поклонный крест. В 2025 году в центре села начали строить новую часовню в честь той же святой — её заложили на новом месте, потому что старое осталось в стороне. Сейчас это главная действующая церковь в Зырянске.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/paraskeva-chapel-1.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/paraskeva-chapel-2.jpg",
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/paraskeva-chapel-3.jpg",
    ],
    confidence: true,
  },
  {
    id: "kupecheskiy-dom",
    name: "Купеческий дом (бывший)",
    coords: [52.26715, 107.767265],
    type: "history",
    description:
      "Раньше здесь стоял еврейский купеческий дом. Дом перешёл к Орлову (бывш. дирекотр совхоза), потом дом перешел в колхоз. В здании сделали детский сад, который работал круглый год. Ясли (для самых маленьких) открывали только на лето. Сейчас в этом доме живёт глава Зырянска — Погорельский.",
    images: [
      "https://res.cloudinary.com/xv01jkbw/image/upload/photos/pogorelsky-1.jpg",
    ],
    confidence: true,
  },

  // =========== ПАНОРАМЫ ===============
  {
    id: "stf-panorama",
    name: "Панорама на СТФ",
    coords: [52.266198, 107.757872],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/stf.JPG",
    confidence: true,
  },

  {
    id: "ysadba",
    name: "Панорама на усадьбу",
    coords: [52.264089, 107.772999],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/ysadba.JPG",
    confidence: true,
  },
  {
    id: "kyngora-panorama",
    name: "Панорама на кынгору",
    coords: [52.267257, 107.791966],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/kyngora-1.JPG",
    confidence: true,
  },
  {
    id: "kyngora-panorama-2",
    name: "Панорама на кынгору",
    coords: [52.266523, 107.791271],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/kyngora-2.JPG",
    confidence: true,
  },
  {
    id: "most-itanca",
    name: "Панорама на мост",
    coords: [52.268387, 107.785819],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/most-2.JPG",
    confidence: true,
  },
  {
    id: "mtf-panorama-1",
    name: "Панорама на МТФ",
    coords: [52.267513, 107.773699],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/mtf-1.JPG",
    confidence: true,
  },
  {
    id: "mtf-panorama-2",
    name: "Панорама на МТФ",
    coords: [52.268623, 107.773875],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/mtf-2.JPG",
    confidence: true,
  },
  {
    id: "street-1",
    name: "Панорама на Трактовую улицу",
    coords: [52.267382, 107.782496],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/street-1.JPG",
    confidence: true,
  },
  {
    id: "street-2",
    name: "Панорама на Трактовую и Хмелева улицы",
    coords: [52.26609, 107.778214],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/street-2.JPG",
    confidence: true,
  },
  {
    id: "rip",
    name: "Панорама на Трактовую улицу",
    coords: [52.271886, 107.791599],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/rip.JPG",
    confidence: true,
  },
  {
    id: "mtf-1",
    name: "Панорама на МТФ. Утаты",
    coords: [52.279154, 107.779599],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/mtf-ytati-1.JPG",
    confidence: true,
  },
  {
    id: "mtf-2",
    name: "Панорама на МТФ. Утаты",
    coords: [52.280976, 107.780555],
    type: "panorama",
    panoramaSrc: "https://3yuzc7gm8wj4kxiu.public.blob.vercel-storage.com/mtf-ytati-2.JPG",
    confidence: true,
  },
];
