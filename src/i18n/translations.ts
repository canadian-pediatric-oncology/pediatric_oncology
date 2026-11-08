export type Locale = "en" | "fr" | "zh";

const baseTranslations = {
  en: {
    brandName: "Canadian Pediatric Oncology Resource",
    nav: {
      home: "Home",
      journey: "The Journey",
      tumors: "Tumor Guides",
      symptoms: "Symptom Care",
      support: "Local Care & Support",
      glossary: "Glossary",
      faq: "FAQ",
      checklists: "Checklists",
      skipToMain: "Skip to main content",
      definitionOf: "Definition:",
      medicalDisclaimer: "Medical Disclaimer",
    },
    search: {
      placeholder: "Search tumors, symptoms, journey...",
      buttonLabel: "Search",
      modalTitle: "Search Educational Resources",
      closeLabel: "Close search",
      shortcut: "⌘K",
      noResults: "No results found for",
      pressEsc: "Press ESC to exit",
    },
    home: {
      title: "A Guided Path Forward",
      subtitle:
        "Navigating a pediatric oncology diagnosis can be overwhelming. We provide a step-by-step roadmap tailored for families in the Canadian healthcare system.",
      trustBadge:
        "Developed using guidelines from leading Canadian pediatric oncology centers.",
      startJourneyBtn: "Start The Journey",
      supportBtn: "Local Care & Support",
    },
    tumors: {
      title: "Pediatric Tumor & Cancer Guides",
      subtitle:
        "Comprehensive, compassionate, and medically verified clinical guides for families navigating pediatric oncology in Canada.",
      readGuide: "Read comprehensive guide →",
      incidence: "Incidence",
      guideBadge: "Pediatric Oncology Guide",
      reviewedBy: "Reviewed by:",
      lastReviewed: "Last Reviewed:",
      sources: "Authoritative & Clinical Sources",
      back: "Back to Tumor Guides",
    },
    symptoms: {
      title: "At-Home Symptom Management",
      subtitle:
        "Actionable, medically-verified guidance for managing common side effects during treatment.",
      readGuide: "Read guide →",
      severity: "Severity",
      guideBadge: "Symptom Management",
      reviewedBy: "Reviewed by:",
      lastReviewed: "Last Reviewed:",
      sources: "Authoritative & Clinical Sources",
      back: "Back to Symptom Guides",
    },
    support: {
      title: "Provincial Care & Financial Support",
      subtitle:
        "Select your province or territory to find specialized pediatric oncology centers and financial assistance programs.",
      nationalTitle: "National & International Fallback Resources",
      nationalSubtitle:
        "These programs and institutions provide care and financial benefits applicable across Canada.",
    },
    filter: {
      label: "Select your Province or Territory to see localized support:",
      placeholder: "-- Choose Province/Territory --",
      selectedHeading: "Selected Province Resources",
      hospitalsHeading: "Top Specialized Hospitals & Care Centers",
      financialHeading: "Financial & Drug Coverage Programs",
      notesHeading: "Note on Out-of-Province & Specialized Care:",
      selectedResources: " Resources",
    },
    footer: {
      emergencyTitle: "Medical Emergency & Crisis Support in Canada",
      emergencyBody:
        "For medical emergencies: If your child has a fever while neutropenic or experiences severe distress, call 911 or visit your nearest Emergency Department immediately.",
      kidsHelpPhone:
        "Kids Help Phone: 1-800-668-6868 (or text CONNECT to 686868)",
      suicideHelpline: "Suicide Crisis Helpline: 988",
      cancerSociety: "Canadian Cancer Society: 1-888-939-3333",
      aboutTitle: "Canadian Pediatric Oncology",
      aboutBody:
        "An open-source, trilingual educational resource designed to empower families navigating childhood cancer diagnosis, treatment, and survivorship within Canada's healthcare system.",
      quickNav: "Quick Navigation",
      partnersTitle: "Authoritative Clinical Partners",
      disclaimer:
        "This platform is strictly for educational purposes and does not provide formal medical advice, diagnosis, or treatment planning. Always consult your child's pediatric oncology team.",
      copyright:
        "Canadian Pediatric Oncology Educational Platform. Built with care for Canadian families.",
      licenseInfo:
        "Licensed under CC BY-NC 4.0. You may share and adapt this content for non-commercial purposes.",
    },
    notFound: {
      title: "Page Not Found",
      subtitle:
        "We couldn't find that page, but we're here to help you navigate.",
      description:
        "The page you are looking for may have been moved, renamed, or is temporarily unavailable. Explore our core clinical guides or use the search bar above.",
      homeBtn: "Return to Home",
      journeyBtn: "The Treatment Journey",
      tumorsBtn: "Tumor Guides",
      symptomsBtn: "Symptom Management",
      supportBtn: "Local Care & Support",
      emergencyHelp: "Need Immediate Medical Support?",
      emergencyNote:
        "If your child is experiencing an urgent medical emergency, call 911 or visit your nearest pediatric emergency department immediately.",
    },
    glossary: {
      title: "Medical Terms Explained",
      subtitle:
        "A parent-friendly guide to the medical words you may hear during your child's treatment.",
      searchPlaceholder: "Search for a term...",
      categories: {
        "diagnosis-testing": "Diagnosis & Testing",
        treatment: "Treatment",
        "blood-lab": "Blood & Lab Results",
        "side-effects": "Side Effects",
        "cancer-types": "Cancer Types",
        "healthcare-team": "Your Care Team",
        "canadian-system": "Canadian Healthcare",
      },
      noResults: "No matching terms found.",
      allCategories: "All Categories",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle:
        "Compassionate, evidence-based answers to the questions families ask most.",
      searchPlaceholder: "Search questions...",
      categories: {
        diagnosis: "Diagnosis & Early Days",
        treatment: "Treatment & Procedures",
        "side-effects": "Side Effects & Daily Life",
        financial: "Financial & Practical",
        emotional: "Emotional & Family",
        misconceptions: "Common Misconceptions",
      },
      mythLabel: "Myth",
      factLabel: "Fact",
      expandAll: "Expand All",
      collapseAll: "Collapse All",
      noResults: "No matching questions found.",
    },
  },
  fr: {
    brandName: "Ressource canadienne en oncologie pédiatrique",
    nav: {
      home: "Accueil",
      journey: "Le Parcours",
      tumors: "Guides des tumeurs",
      symptoms: "Symptômes",
      support: "Soins locaux",
      glossary: "Glossaire",
      faq: "FAQ",
      checklists: "Aide-mémoire",
      skipToMain: "Aller au contenu principal",
      definitionOf: "Définition :",
      medicalDisclaimer: "Avis médical",
    },
    search: {
      placeholder: "Rechercher tumeurs, symptômes, parcours...",
      buttonLabel: "Rechercher",
      modalTitle: "Rechercher dans les ressources",
      closeLabel: "Fermer la recherche",
      shortcut: "⌘K",
      noResults: "Aucun résultat trouvé pour",
      pressEsc: "Appuyez sur Échap pour quitter",
    },
    home: {
      title: "Un chemin guidé avec bienveillance",
      subtitle:
        "Recevoir un diagnostic d'oncologie pédiatrique est une épreuve bouleversante. Nous offrons une feuille de route étape par étape conçue spécifiquement pour les familles au sein du système de santé canadien.",
      trustBadge:
        "Développé à l'aide des directives des principaux centres d'oncologie pédiatrique canadiens.",
      startJourneyBtn: "Commencer le parcours",
      supportBtn: "Soins et soutien locaux",
    },
    tumors: {
      title: "Guides des tumeurs et cancers pédiatriques",
      subtitle:
        "Des guides cliniques complets, bienveillants et vérifiés médicalement pour les familles confrontées au cancer infantile au Canada.",
      readGuide: "Lire le guide complet →",
      incidence: "Incidence",
      guideBadge: "Guide d'oncologie pédiatrique",
      reviewedBy: "Révisé par :",
      lastReviewed: "Dernière révision :",
      sources: "Sources cliniques et faisant autorité",
      back: "Retour aux guides des tumeurs",
    },
    symptoms: {
      title: "Gestion des symptômes à domicile",
      subtitle:
        "Conseils pratiques et validés sur le plan médical pour gérer les effets secondaires courants tout au long du traitement.",
      readGuide: "Consulter la fiche →",
      severity: "Gravité",
      guideBadge: "Gestion des symptômes",
      reviewedBy: "Révisé par :",
      lastReviewed: "Dernière révision :",
      sources: "Sources cliniques",
      back: "Retour à la gestion des symptômes",
    },
    support: {
      title: "Soins provinciaux et soutien financier",
      subtitle:
        "Sélectionnez votre province ou territoire pour trouver des centres d'oncologie pédiatrique spécialisés et des programmes d'aide financière.",
      nationalTitle: "Ressources nationales et internationales",
      nationalSubtitle:
        "Ces programmes et institutions offrent des soins et des avantages financiers applicables dans tout le Canada.",
    },
    filter: {
      label:
        "Sélectionnez votre province ou territoire pour voir les ressources locales :",
      placeholder: "-- Choisir une province / territoire --",
      selectedHeading: "Ressources provinciales sélectionnées",
      hospitalsHeading: "Centres hospitaliers et de soins spécialisés",
      financialHeading: "Programmes financiers et couverture des médicaments",
      notesHeading: "Précision sur les soins hors province :",
      selectedResources: " - Ressources",
    },
    footer: {
      emergencyTitle: "Urgences médicales et soutien en cas de crise au Canada",
      emergencyBody:
        "En cas d'urgence médicale : Si votre enfant présente de la fièvre en période de neutropénie ou une détresse aiguë, composez le 911 ou rendez-vous immédiatement aux urgences les plus proches.",
      kidsHelpPhone:
        "Jeunesse, J'écoute : 1-800-668-6868 (ou texter PARLER au 686868)",
      suicideHelpline: "Ligne d'aide en cas de crise de suicide : 988",
      cancerSociety: "Société canadienne du cancer : 1-888-939-3333",
      aboutTitle: "Oncologie pédiatrique canadienne",
      aboutBody:
        "Une ressource éducative trilingue en libre accès conçue pour soutenir les familles à chaque étape : diagnostic, traitements et survie au Canada.",
      quickNav: "Navigation rapide",
      partnersTitle: "Partenaires cliniques faisant autorité",
      disclaimer:
        "Cette plateforme est strictement éducative et ne remplace pas un avis médical, un diagnostic ou un plan de traitement. Consultez toujours l'équipe soignante de votre enfant.",
      copyright:
        "Plateforme éducative canadienne en oncologie pédiatrique. Conçue avec bienveillance pour les familles canadiennes.",
      licenseInfo:
        "Sous licence CC BY-NC 4.0. Vous pouvez partager et adapter ce contenu à des fins non commerciales.",
    },
    notFound: {
      title: "Page non trouvée",
      subtitle:
        "Nous n'avons pas trouvé cette page, mais nous sommes là pour vous guider.",
      description:
        "La page que vous recherchez a peut-être été déplacée ou n'existe pas. Explorez nos guides cliniques ci-dessous ou utilisez la recherche.",
      homeBtn: "Retour à l'accueil",
      journeyBtn: "Le Parcours de soins",
      tumorsBtn: "Guides des tumeurs",
      symptomsBtn: "Gestion des symptômes",
      supportBtn: "Soins et soutien locaux",
      emergencyHelp: "Besoin d'aide médicale immédiate ?",
      emergencyNote:
        "Si votre enfant vit une urgence médicale ou une fièvre en neutropénie, composez le 911 ou rendez-vous immédiatement aux urgences pédiatriques les plus proches.",
    },
    glossary: {
      title: "Termes médicaux expliqués",
      subtitle:
        "Un guide accessible pour comprendre les termes médicaux que vous entendrez pendant le traitement de votre enfant.",
      searchPlaceholder: "Rechercher un terme...",
      categories: {
        "diagnosis-testing": "Diagnostic et examens",
        treatment: "Traitement",
        "blood-lab": "Sang et résultats de laboratoire",
        "side-effects": "Effets secondaires",
        "cancer-types": "Types de cancer",
        "healthcare-team": "Votre équipe soignante",
        "canadian-system": "Système de santé canadien",
      },
      noResults: "Aucun terme correspondant trouvé.",
      allCategories: "Toutes les catégories",
    },
    faq: {
      title: "Questions fréquentes",
      subtitle:
        "Des réponses bienveillantes et fondées sur des données probantes aux questions les plus posées par les familles.",
      searchPlaceholder: "Rechercher des questions...",
      categories: {
        diagnosis: "Diagnostic et premiers jours",
        treatment: "Traitement et procédures",
        "side-effects": "Effets secondaires et vie quotidienne",
        financial: "Finances et aspects pratiques",
        emotional: "Émotions et famille",
        misconceptions: "Idées reçues",
      },
      mythLabel: "Mythe",
      factLabel: "Réalité",
      expandAll: "Tout déplier",
      collapseAll: "Tout replier",
      noResults: "Aucune question correspondante trouvée.",
    },
  },
  zh: {
    brandName: "加拿大儿童肿瘤教育与支持平台",
    nav: {
      home: "首页",
      journey: "治疗旅程",
      tumors: "肿瘤指南",
      symptoms: "症状管理",
      support: "本地医疗与支持",
      glossary: "术语表",
      faq: "常见问题",
      checklists: "清单",
      skipToMain: "跳至主要内容",
      definitionOf: "定义：",
      medicalDisclaimer: "医疗免责声明",
    },
    search: {
      placeholder: "搜索疾病、肿瘤指南、症状护理...",
      buttonLabel: "搜索",
      modalTitle: "搜索科普与护理资源",
      closeLabel: "关闭搜索",
      shortcut: "⌘K",
      noResults: "未找到相关结果：",
      pressEsc: "按 ESC 键退出",
    },
    home: {
      title: "为患儿家庭点亮前行之路",
      subtitle:
        "面对儿童肿瘤的确诊往往令人不知所措。我们专为在加拿大医疗体系中的家庭提供循序渐进、充满关怀且经医学验证的指南与支持。",
      trustBadge: "参照加拿大顶尖儿童肿瘤中心的指南开发。",
      startJourneyBtn: "开启治疗旅程",
      supportBtn: "本地医疗与支持",
    },
    tumors: {
      title: "儿童肿瘤与恶性疾病指南",
      subtitle:
        "针对在加拿大接受治疗的患儿家庭，提供全面、易懂且经过权威医学审核的儿童肿瘤科普指南。",
      readGuide: "阅读详细指南 →",
      incidence: "发病率",
      guideBadge: "儿童肿瘤指南",
      reviewedBy: "审核专家：",
      lastReviewed: "最后审核：",
      sources: "权威临床来源",
      back: "返回肿瘤指南列表",
    },
    symptoms: {
      title: "居家症状与副作用管理",
      subtitle:
        "提供切实可行、经临床验证的居家护理指导，帮助孩子平稳应对治疗过程中的常见副作用。",
      readGuide: "查看护理要点 →",
      severity: "紧急程度",
      guideBadge: "症状管理",
      reviewedBy: "审核专家：",
      lastReviewed: "最后审核：",
      sources: "权威临床来源",
      back: "返回症状护理列表",
    },
    support: {
      title: "各省医疗与财务支持",
      subtitle:
        "请选择您所在的省份或地区，查找专门的儿童肿瘤中心和财务援助项目。",
      nationalTitle: "全国与国际备用资源",
      nationalSubtitle: "这些项目和机构提供适用于全加拿大的医疗和福利支持。",
    },
    filter: {
      label: "选择您所在的省份或地区，查看针对性的医疗与资金支持：",
      placeholder: "-- 请选择省份 / 地区 --",
      selectedHeading: "所选省份/地区支持资源",
      hospitalsHeading: "重点专科医院与儿童治疗中心",
      financialHeading: "省级药物与家庭经济资助项目",
      notesHeading: "跨省转诊与偏远地区就医说明：",
      selectedResources: " 资源",
    },
    footer: {
      emergencyTitle: "加拿大紧急就医与24小时危机援助",
      emergencyBody:
        "紧急医疗状况提示：若孩子在中性粒细胞低下期突发发热或出现急性危急症状，请立即拨打 911 或前往最近的医院急诊部！",
      kidsHelpPhone:
        "儿童与青少年求助热线 (Kids Help Phone): 1-800-668-6868 (或发送 CONNECT 至 686868)",
      suicideHelpline: "全国心理危机援助热线: 988",
      cancerSociety: "加拿大癌症协会服务热线: 1-888-939-3333",
      aboutTitle: "加拿大儿童肿瘤资源平台",
      aboutBody:
        "一个开源、三语（英语/法语/中文）的教育平台，致力于赋能并陪伴在加拿大医疗体系中战胜儿童癌症的每个家庭。",
      quickNav: "快速导航",
      partnersTitle: "权威临床与学术合作机构",
      disclaimer:
        "本平台内容仅供医学科普与教育参考，不构成正式医疗诊断或个体化治疗方案。涉及孩子的具体诊疗，请始终以主管医疗团队指导为准。",
      copyright: "加拿大儿童肿瘤教育平台。倾心陪伴每一个坚强的加拿大患儿家庭。",
      licenseInfo:
        "本平台内容采用 CC BY-NC 4.0 协议授权。您可以出于非商业目的分享和改编本内容。",
    },
    glossary: {
      title: "医学术语解读",
      subtitle: "帮助您理解孩子治疗过程中可能遇到的医学术语。",
      searchPlaceholder: "搜索医学术语...",
      categories: {
        "diagnosis-testing": "诊断与检查",
        treatment: "治疗与方案",
        "blood-lab": "血液与化验指标",
        "side-effects": "副作用与并发症",
        "cancer-types": "肿瘤与癌症类型",
        "healthcare-team": "医疗与护理团队",
        "canadian-system": "加拿大医疗保障体系",
      },
      noResults: "未找到匹配的医学术语。",
      allCategories: "所有分类",
    },
    faq: {
      title: "常见问题解答 (FAQ)",
      subtitle: "为患儿家庭最常提出的疑问提供权威、有据可依且充满关怀的解答。",
      searchPlaceholder: "搜索常见问题...",
      categories: {
        diagnosis: "确诊与初期应对",
        treatment: "治疗与手术护理",
        "side-effects": "副作用与日常生活",
        financial: "经济补助与实际问题",
        emotional: "心理情感与家庭支持",
        misconceptions: "常见误区澄清",
      },
      mythLabel: "误解",
      factLabel: "事实",
      expandAll: "全部展开",
      collapseAll: "全部收起",
      noResults: "未找到匹配的常见问题。",
    },
    notFound: {
      title: "页面未找到",
      subtitle: "未能找到该页面，但我们随时为您提供指引与支持。",
      description:
        "您访问的页面可能已移动、重命名或不存在。请浏览下方核心临床指南，或使用顶部的搜索功能。",
      homeBtn: "返回首页",
      journeyBtn: "全流程治疗旅程",
      tumorsBtn: "儿童肿瘤指南",
      symptomsBtn: "居家症状护理",
      supportBtn: "本地医疗与支持",
      emergencyHelp: "需要紧急医疗帮助？",
      emergencyNote:
        "如果您的孩子在治疗期间突发高热或出现紧急状况，请立即拨打 911 或前往最近的儿童医院急诊室。",
    },
  },
} as const;

type DeepString<T> = {
  readonly [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends object
      ? DeepString<T[K]>
      : string;
};

export type TranslationSchema = DeepString<typeof baseTranslations.en>;
export const translations: Record<Locale, TranslationSchema> = baseTranslations;
