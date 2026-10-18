// Single source of truth for business details and content (English + Arabic).
// Update SITE_URL once the domain is live — it drives canonical URLs, sitemap and Open Graph.
import type { Locale } from "./i18n";

export const SITE_URL = "https://alnazhatours.com";

export const business = {
  nameEn: "Al Nazha Tours",
  nameAr: "النزهة للسياحة",
  phone: "09 238 3055",
  phoneHref: "tel:+97192383055",
  mobile: "050 367 4950",
  mobileHref: "tel:+971503674950",
  whatsapp: "971503674950",
  email: "alnazhatours@gmail.com",
  poBox: "10500",
  mapQuery: "Cinema Road, Khorfakkan, Sharjah, UAE",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  keywords: string[];
};

const en = {
  name: "Al Nazha Tours",
  altName: "النزهة للسياحة",
  tagline: "Umrah, visas, flights & tours from Khorfakkan",
  description:
    "Al Nazha Tours is a travel agency in Khorfakkan, Sharjah offering Umrah packages, UAE & international visit visas, air tickets, hotel booking, travel insurance and holiday tours across the UAE.",
  keywords: ["travel agency Khorfakkan", "Umrah package UAE", "UAE visit visa", "air tickets Sharjah", "Al Nazha Tours"],
  address: {
    street: "Opp. Hassan Trading, Cinema Road",
    cityLine: "Khorfakkan, Sharjah, UAE",
    poBox: `P.O. Box ${business.poBox}`,
  },
  services: [
    {
      slug: "umrah-packages",
      title: "Umrah Packages",
      short: "Visa, flights, hotels near the Haram and transport — arranged as one package.",
      intro:
        "Perform Umrah with peace of mind. We handle the Umrah visa, return flights from the UAE, hotels in Makkah and Madinah, and ground transport, so you can focus on worship.",
      includes: [
        "Umrah visa processing",
        "Return flights from Sharjah, Dubai or Abu Dhabi",
        "Hotels in Makkah & Madinah close to the Haram",
        "Airport and intercity transport",
        "Family and group packages",
        "Ziyarat tours on request",
      ],
      keywords: ["Umrah package from UAE", "Umrah from Sharjah", "Umrah Khorfakkan"],
    },
    {
      slug: "visit-visa",
      title: "Visit Visas",
      short: "UAE visit visas and tourist visas for popular destinations worldwide.",
      intro:
        "Whether you are bringing family to the UAE or travelling abroad, we prepare your application, check your documents and keep you updated until the visa is issued.",
      includes: [
        "UAE 30 and 60 day visit visas",
        "Tourist visas for GCC, Asia & Europe",
        "Document checklist and form filling",
        "Visa status follow-up",
      ],
      keywords: ["UAE visit visa Sharjah", "tourist visa Khorfakkan"],
    },
    {
      slug: "air-tickets",
      title: "Air Tickets",
      short: "Competitive fares on all major airlines, one-way, return and multi-city.",
      intro:
        "We compare fares across major airlines to find the best price and timing for your trip — from quick hops within the GCC to long-haul family travel.",
      includes: ["All major airlines", "One-way, return & multi-city", "Group and family bookings", "Date changes and re-issues"],
      keywords: ["air tickets Khorfakkan", "cheap flights Sharjah"],
    },
    {
      slug: "hotel-booking",
      title: "Hotel Booking",
      short: "Hotels worldwide, including Makkah & Madinah, at agency rates.",
      intro: "From hotels steps from the Haram to beach resorts, we book stays that match your budget and itinerary.",
      includes: ["Makkah & Madinah hotels", "City and resort hotels worldwide", "Family rooms and suites", "Confirmed vouchers"],
      keywords: ["hotel booking Makkah", "hotel booking UAE"],
    },
    {
      slug: "holiday-tours",
      title: "Holiday Tours",
      short: "Tailored holiday packages abroad and tours within the UAE.",
      intro: "Let us plan your next holiday — flights, hotels, transfers and sightseeing combined into a single, easy itinerary.",
      includes: ["International holiday packages", "UAE city tours & desert safaris", "Honeymoon and family trips", "Custom itineraries"],
      keywords: ["holiday packages UAE", "tour packages Sharjah"],
    },
    {
      slug: "travel-insurance",
      title: "Travel Insurance",
      short: "Cover for medical emergencies, delays and lost baggage.",
      intro: "Travel with confidence. We arrange travel insurance that meets visa requirements and protects you on the road.",
      includes: ["Schengen-compliant policies", "Medical and emergency cover", "Trip delay and cancellation", "Single trip and annual plans"],
      keywords: ["travel insurance UAE", "Schengen insurance Sharjah"],
    },
  ] as Service[],
  steps: [
    { title: "Tell us your plan", text: "Message us on WhatsApp or visit our Khorfakkan office." },
    { title: "Get a clear quote", text: "We share options and a transparent price — no hidden fees." },
    { title: "Travel stress-free", text: "We handle bookings and paperwork and stay reachable throughout." },
  ],
  faqs: [
    { q: "Where is Al Nazha Tours located?", a: "Our office is on Cinema Road, opposite Hassan Trading, in Khorfakkan, Sharjah, UAE." },
    {
      q: "How long does an Umrah visa take?",
      a: "Processing times vary by season. Contact us with your travel dates and we will advise on the current timeline.",
    },
    {
      q: "Can I book over WhatsApp?",
      a: "Yes. Send us your requirements on WhatsApp at 050 367 4950 and we will reply with options and a quote.",
    },
    {
      q: "Do you arrange visas for family members visiting the UAE?",
      a: "Yes, we process UAE visit visas for family and friends. We will share the document checklist when you get in touch.",
    },
  ],
  ui: {
    nav: { services: "Services", umrah: "Umrah", contact: "Contact", whatsapp: "WhatsApp", home: "home" },
    switchLabel: "العربية",
    hero: {
      h1a: "Travel made simple, ",
      h1em: "from Khorfakkan",
      h1b: " to the world.",
      lead: "Umrah packages, visit visas, air tickets and holidays — planned by a local team you can call, message or visit.",
      cta: "Get a free quote",
      meta: [
        ["Umrah", "packages"],
        ["Visas", "UAE & worldwide"],
        ["Flights", "all major airlines"],
        ["Office", "Cinema Road, Khorfakkan"],
      ],
    },
    servicesSection: {
      eyebrow: "Services",
      title: "Everything your trip needs, in one place.",
      text: "One team for your visa, ticket, hotel and insurance — no running between offices.",
      more: "Learn more →",
    },
    umrahSection: { eyebrow: "Umrah", title: "Your Umrah, carefully arranged.", cta: "Ask about Umrah", details: "Details" },
    stepsSection: {
      eyebrow: "How it works",
      title: "Three steps to your trip.",
      text: "Simple, personal service — the way a neighbourhood travel agency should be.",
    },
    faqSection: { eyebrow: "FAQ", title: "Common questions" },
    ctaSection: {
      title: "Planning a trip?",
      text: "Send us your dates and destination — we'll come back with options and a clear price.",
      whatsapp: "Chat on WhatsApp",
      visit: "Visit our office",
    },
    servicePage: {
      home: "Home",
      titleSuffix: "in Khorfakkan, Sharjah",
      enquire: "Enquire on WhatsApp",
      includedEyebrow: "What's included",
      includedTitle: "How we help",
      quoteTitle: "Request a quote",
      moreEyebrow: "More services",
      moreTitle: "We can also help with",
    },
    contactPage: {
      metaTitle: "Contact Us — Travel Agency on Cinema Road, Khorfakkan",
      metaDescription:
        "Visit Al Nazha Tours on Cinema Road, Khorfakkan, Sharjah, or call 050 367 4950. WhatsApp us for Umrah, visas, flights and tours.",
      eyebrow: "Contact",
      title: "Let's plan your journey.",
      text: "Message us on WhatsApp, give us a call, or drop by our office in Khorfakkan.",
      mobile: "Mobile & WhatsApp",
      tel: "Telephone",
      email: "Email",
      office: "Office",
      formTitle: "Send an enquiry",
      mapTitle: "Al Nazha Tours location map",
    },
    form: {
      name: "Full name",
      service: "Service",
      general: "General enquiry",
      date: "Travel date",
      travellers: "Travellers",
      message: "Message",
      placeholder: "Tell us about your trip",
      submit: "Send on WhatsApp",
      note: "Opens WhatsApp with your details filled in — just press send.",
      msgHello: "Hello Al Nazha Tours,",
      msgName: "Name",
      msgService: "Service",
      msgDate: "Travel date",
      msgTravellers: "Travellers",
    },
    footer: {
      about: "Your local travel partner in Khorfakkan for Umrah, visas, flights and holidays.",
      services: "Services",
      contact: "Contact",
      tel: "Tel",
      mobile: "Mobile",
      rights: "All rights reserved.",
    },
    wa: {
      general: "Hello Al Nazha Tours, I'd like to enquire about",
      umrah: "Hello Al Nazha Tours, I'd like an Umrah package quote.",
      service: (title: string) => `Hello Al Nazha Tours, I'd like to enquire about ${title}.`,
      floatLabel: "Chat with us on WhatsApp",
    },
    notFound: { title: "Page not found", text: "The page you're looking for doesn't exist.", back: "Back to home" },
  },
};

export type Content = typeof en;

const ar: Content = {
  name: "النزهة للسياحة",
  altName: "Al Nazha Tours",
  tagline: "عمرة وتأشيرات وطيران ورحلات سياحية من خورفكان",
  description:
    "النزهة للسياحة وكالة سفر في خورفكان، الشارقة، تقدم باقات العمرة وتأشيرات الزيارة للإمارات ودول العالم وتذاكر الطيران وحجز الفنادق وتأمين السفر والرحلات السياحية في جميع أنحاء الإمارات.",
  keywords: ["وكالة سفر خورفكان", "باقات عمرة الإمارات", "تأشيرة زيارة الإمارات", "تذاكر طيران الشارقة", "النزهة للسياحة"],
  address: {
    street: "مقابل حسن للتجارة، شارع السينما",
    cityLine: "خورفكان، الشارقة، الإمارات العربية المتحدة",
    poBox: `ص.ب ${business.poBox}`,
  },
  services: [
    {
      slug: "umrah-packages",
      title: "باقات العمرة",
      short: "التأشيرة والطيران والفنادق القريبة من الحرم والمواصلات — في باقة واحدة.",
      intro:
        "أدِّ العمرة بطمأنينة. نتولى تأشيرة العمرة، ورحلات الطيران ذهاباً وإياباً من الإمارات، والفنادق في مكة المكرمة والمدينة المنورة، والمواصلات، لتتفرغ للعبادة.",
      includes: [
        "إصدار تأشيرة العمرة",
        "طيران ذهاب وعودة من الشارقة أو دبي أو أبوظبي",
        "فنادق في مكة والمدينة قريبة من الحرم",
        "التنقل من المطار وبين المدن",
        "باقات للعائلات والمجموعات",
        "جولات الزيارات عند الطلب",
      ],
      keywords: ["باقات عمرة من الإمارات", "عمرة من الشارقة", "عمرة خورفكان"],
    },
    {
      slug: "visit-visa",
      title: "تأشيرات الزيارة",
      short: "تأشيرات زيارة للإمارات وتأشيرات سياحية لأشهر الوجهات حول العالم.",
      intro:
        "سواء كنت تستقدم عائلتك إلى الإمارات أو تسافر إلى الخارج، نجهز طلبك ونراجع مستنداتك ونطلعك على كل جديد حتى صدور التأشيرة.",
      includes: [
        "تأشيرات زيارة الإمارات لمدة 30 و60 يوماً",
        "تأشيرات سياحية لدول الخليج وآسيا وأوروبا",
        "قائمة المستندات وتعبئة النماذج",
        "متابعة حالة التأشيرة",
      ],
      keywords: ["تأشيرة زيارة الإمارات الشارقة", "تأشيرة سياحية خورفكان"],
    },
    {
      slug: "air-tickets",
      title: "تذاكر الطيران",
      short: "أسعار تنافسية على جميع شركات الطيران الكبرى، ذهاب فقط أو ذهاب وعودة أو وجهات متعددة.",
      intro:
        "نقارن الأسعار بين شركات الطيران الكبرى لنجد لك أفضل سعر وتوقيت — من الرحلات القصيرة داخل الخليج إلى رحلات العائلة الطويلة.",
      includes: ["جميع شركات الطيران الكبرى", "ذهاب فقط، ذهاب وعودة، ووجهات متعددة", "حجوزات المجموعات والعائلات", "تغيير المواعيد وإعادة إصدار التذاكر"],
      keywords: ["تذاكر طيران خورفكان", "رحلات طيران رخيصة الشارقة"],
    },
    {
      slug: "hotel-booking",
      title: "حجز الفنادق",
      short: "فنادق حول العالم، بما فيها مكة والمدينة، بأسعار الوكالات.",
      intro: "من الفنادق القريبة من الحرم إلى المنتجعات الشاطئية، نحجز لك إقامة تناسب ميزانيتك وبرنامج رحلتك.",
      includes: ["فنادق مكة المكرمة والمدينة المنورة", "فنادق ومنتجعات حول العالم", "غرف عائلية وأجنحة", "قسائم حجز مؤكدة"],
      keywords: ["حجز فنادق مكة", "حجز فنادق الإمارات"],
    },
    {
      slug: "holiday-tours",
      title: "الرحلات السياحية",
      short: "باقات عطلات مصممة لك في الخارج وجولات داخل الإمارات.",
      intro: "دعنا نخطط لعطلتك القادمة — الطيران والفنادق والتنقلات والجولات السياحية في برنامج واحد سهل.",
      includes: ["باقات عطلات دولية", "جولات في مدن الإمارات ورحلات السفاري", "رحلات شهر العسل والعائلات", "برامج حسب الطلب"],
      keywords: ["باقات سياحية الإمارات", "رحلات سياحية الشارقة"],
    },
    {
      slug: "travel-insurance",
      title: "تأمين السفر",
      short: "تغطية للطوارئ الطبية وتأخير الرحلات وفقدان الأمتعة.",
      intro: "سافر بثقة. نوفر لك تأمين سفر يلبي متطلبات التأشيرة ويحميك طوال رحلتك.",
      includes: ["وثائق متوافقة مع متطلبات شنغن", "تغطية طبية وطارئة", "تأخير الرحلة وإلغاؤها", "خطط لرحلة واحدة أو سنوية"],
      keywords: ["تأمين سفر الإمارات", "تأمين شنغن الشارقة"],
    },
  ],
  steps: [
    { title: "أخبرنا بخطتك", text: "راسلنا عبر واتساب أو زر مكتبنا في خورفكان." },
    { title: "احصل على عرض سعر واضح", text: "نرسل لك الخيارات وسعراً شفافاً دون رسوم خفية." },
    { title: "سافر براحة بال", text: "نتولى الحجوزات والأوراق ونبقى على تواصل معك طوال الرحلة." },
  ],
  faqs: [
    {
      q: "أين يقع مكتب النزهة للسياحة؟",
      a: "يقع مكتبنا في شارع السينما، مقابل حسن للتجارة، في خورفكان، الشارقة، الإمارات العربية المتحدة.",
    },
    { q: "كم تستغرق تأشيرة العمرة؟", a: "تختلف مدة الإصدار حسب الموسم. تواصل معنا بمواعيد سفرك وسنخبرك بالمدة الحالية." },
    {
      q: "هل يمكنني الحجز عبر واتساب؟",
      a: "نعم. أرسل لنا طلبك عبر واتساب على الرقم 050 367 4950 وسنرد عليك بالخيارات وعرض السعر.",
    },
    {
      q: "هل تصدرون تأشيرات زيارة لأفراد العائلة القادمين إلى الإمارات؟",
      a: "نعم، نصدر تأشيرات زيارة الإمارات للأهل والأصدقاء، وسنرسل لك قائمة المستندات المطلوبة عند تواصلك معنا.",
    },
  ],
  ui: {
    nav: { services: "خدماتنا", umrah: "العمرة", contact: "اتصل بنا", whatsapp: "واتساب", home: "الرئيسية" },
    switchLabel: "English",
    hero: {
      h1a: "السفر أسهل، ",
      h1em: "من خورفكان",
      h1b: " إلى العالم.",
      lead: "باقات عمرة، تأشيرات زيارة، تذاكر طيران وعطلات — يخطط لها فريق محلي يمكنك الاتصال به أو مراسلته أو زيارته.",
      cta: "اطلب عرض سعر مجاني",
      meta: [
        ["العمرة", "باقات متكاملة"],
        ["التأشيرات", "للإمارات والعالم"],
        ["الطيران", "جميع شركات الطيران"],
        ["المكتب", "شارع السينما، خورفكان"],
      ],
    },
    servicesSection: {
      eyebrow: "خدماتنا",
      title: "كل ما تحتاجه رحلتك في مكان واحد.",
      text: "فريق واحد لتأشيرتك وتذكرتك وفندقك وتأمينك — دون التنقل بين المكاتب.",
      more: "اعرف المزيد ←",
    },
    umrahSection: { eyebrow: "العمرة", title: "عمرتك، بترتيب متقن.", cta: "استفسر عن العمرة", details: "التفاصيل" },
    stepsSection: {
      eyebrow: "كيف نعمل",
      title: "ثلاث خطوات إلى رحلتك.",
      text: "خدمة بسيطة وشخصية — كما ينبغي أن تكون وكالة السفر القريبة منك.",
    },
    faqSection: { eyebrow: "الأسئلة الشائعة", title: "أسئلة متكررة" },
    ctaSection: {
      title: "تخطط لرحلة؟",
      text: "أرسل لنا مواعيدك ووجهتك — وسنعود إليك بالخيارات وسعر واضح.",
      whatsapp: "تواصل عبر واتساب",
      visit: "زر مكتبنا",
    },
    servicePage: {
      home: "الرئيسية",
      titleSuffix: "في خورفكان، الشارقة",
      enquire: "استفسر عبر واتساب",
      includedEyebrow: "ما تشمله الخدمة",
      includedTitle: "كيف نساعدك",
      quoteTitle: "اطلب عرض سعر",
      moreEyebrow: "خدمات أخرى",
      moreTitle: "يمكننا أيضاً مساعدتك في",
    },
    contactPage: {
      metaTitle: "اتصل بنا — وكالة سفر في شارع السينما، خورفكان",
      metaDescription:
        "زر النزهة للسياحة في شارع السينما، خورفكان، الشارقة، أو اتصل على 050 367 4950. راسلنا عبر واتساب للعمرة والتأشيرات والطيران والرحلات.",
      eyebrow: "اتصل بنا",
      title: "لنخطط لرحلتك معاً.",
      text: "راسلنا عبر واتساب، أو اتصل بنا، أو زر مكتبنا في خورفكان.",
      mobile: "الجوال وواتساب",
      tel: "الهاتف",
      email: "البريد الإلكتروني",
      office: "المكتب",
      formTitle: "أرسل استفسارك",
      mapTitle: "خريطة موقع النزهة للسياحة",
    },
    form: {
      name: "الاسم الكامل",
      service: "الخدمة",
      general: "استفسار عام",
      date: "تاريخ السفر",
      travellers: "عدد المسافرين",
      message: "الرسالة",
      placeholder: "أخبرنا عن رحلتك",
      submit: "أرسل عبر واتساب",
      note: "يفتح واتساب ببياناتك جاهزة — فقط اضغط إرسال.",
      msgHello: "مرحباً النزهة للسياحة،",
      msgName: "الاسم",
      msgService: "الخدمة",
      msgDate: "تاريخ السفر",
      msgTravellers: "عدد المسافرين",
    },
    footer: {
      about: "شريكك المحلي في خورفكان للعمرة والتأشيرات والطيران والعطلات.",
      services: "خدماتنا",
      contact: "تواصل معنا",
      tel: "هاتف",
      mobile: "جوال",
      rights: "جميع الحقوق محفوظة.",
    },
    wa: {
      general: "مرحباً النزهة للسياحة، أود الاستفسار عن",
      umrah: "مرحباً النزهة للسياحة، أود الحصول على عرض سعر لباقة عمرة.",
      service: (title: string) => `مرحباً النزهة للسياحة، أود الاستفسار عن ${title}.`,
      floatLabel: "تواصل معنا عبر واتساب",
    },
    notFound: { title: "الصفحة غير موجودة", text: "الصفحة التي تبحث عنها غير موجودة.", back: "العودة إلى الرئيسية" },
  },
};

const content: Record<Locale, Content> = { en, ar };

export function getContent(lang: Locale): Content {
  return content[lang];
}

export const serviceSlugs = en.services.map((s) => s.slug);
