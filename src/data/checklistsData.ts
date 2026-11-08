export interface HospitalBagData {
  title: string;
  forChild: string;
  forParent: string;
  importantDocs: string;
  childItems: string[];
  parentItems: string[];
  docItems: string[];
}

export interface EmergencyFeverData {
  title: string;
  warning: string;
  ifTemp: string;
  temp1: string;
  temp2: string;
  doThis: string;
  doItems: string[];
  hospitalWillDo: string;
  hospItems: string[];
  neverWait: string;
}

export interface WeeklyTrackerData {
  title: string;
  weekOf: string;
  days: string[];
  rows: string[];
}

export interface ChecklistPageData {
  title: string;
  subtitle: string;
  printBtn: string;
  homeLabel: string;
  hospitalBag: HospitalBagData;
  fever: EmergencyFeverData;
  tracker: WeeklyTrackerData;
}

export const checklistsData: Record<"en" | "fr" | "zh", ChecklistPageData> = {
  en: {
    title: "Parent Checklists & Printable Guides",
    subtitle:
      "Practical tools to help you stay organized during your child's treatment journey.",
    printBtn: "Print this page",
    homeLabel: "Home",
    hospitalBag: {
      title: "Hospital Bag Checklist — What to Pack",
      forChild: "For Your Child:",
      forParent: "For You (the Parent/Caregiver):",
      importantDocs: "Important Documents:",
      childItems: [
        "Comfort items (favorite stuffed animal, blanket, pillow from home)",
        "Entertainment (tablet/iPad with charger, headphones, coloring books, small toys)",
        "Comfortable loose-fitting clothing (button-front tops are easiest with IV lines)",
        "Slip-on shoes or non-slip socks",
        "Toothbrush and gentle toothpaste (soft-bristle only)",
        "Lip balm (for dry lips from medication)",
        "Small photos of family, pets, or friends",
      ],
      parentItems: [
        "Government-issued ID and provincial health card",
        "A binder or folder for medical documents and appointment schedules",
        "Phone charger and power bank",
        "Change of comfortable clothes and basic toiletries",
        "Snacks and a refillable water bottle",
        "Notebook and pen for writing down questions for the medical team",
        "A list of your child's medications and allergies",
        "Contact information for your employer (for EI/leave paperwork)",
      ],
      docItems: [
        "Provincial health card (e.g., OHIP, RAMQ, MSP)",
        "Referral letters or transfer paperwork",
        "Insurance information (private coverage, if applicable)",
        "Emergency contact list",
      ],
    },
    fever: {
      title: "Emergency Fever Protocol — Grab-and-Go Sheet",
      warning: "⚠️ FEVER DURING TREATMENT IS A MEDICAL EMERGENCY",
      ifTemp: "If your child's temperature reaches:",
      temp1: "38.3°C (101°F) or higher at any single reading, OR",
      temp2: "38.0°C (100.4°F) sustained for 1 hour or more",
      doThis: "DO THIS IMMEDIATELY:",
      doItems: [
        "Do NOT give Tylenol (acetaminophen) before calling — it can mask the fever",
        "Call your oncology clinic's 24-hour emergency line: _______________",
        "If you cannot reach the clinic within 15 minutes, go directly to your nearest Emergency Department",
        'Tell triage: "My child is on chemotherapy and has a fever" — this ensures immediate assessment',
        "Bring: health card, medication list, most recent blood work results",
      ],
      hospitalWillDo: "WHAT THE HOSPITAL WILL DO:",
      hospItems: [
        "Blood cultures will be drawn",
        "IV antibiotics will be started within 60 minutes of arrival",
        "Your child will be monitored closely",
      ],
      neverWait: "NEVER wait and see with a fever during cancer treatment.",
    },
    tracker: {
      title: "Weekly Medication & Temperature Tracker",
      weekOf: "Week of:",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Notes",
      ],
      rows: [
        "Morning Temp",
        "Evening Temp",
        "Medication 1: __________________",
        "Medication 2: __________________",
        "Medication 3: __________________",
        "Medication 4: __________________",
        "Appetite (Good/Fair/Poor)",
        "Energy Level (1-5)",
        "Bowel Movement (Y/N)",
        "Notes/Observations",
      ],
    },
  },
  fr: {
    title: "Aide-mémoire et guides imprimables",
    subtitle:
      "Des outils pratiques pour vous aider à rester organisé pendant le parcours de soins de votre enfant.",
    printBtn: "Imprimer cette page",
    homeLabel: "Accueil",
    hospitalBag: {
      title: "Liste de préparation pour l'hôpital",
      forChild: "Pour votre enfant :",
      forParent: "Pour vous (parent/proche aidant) :",
      importantDocs: "Documents importants :",
      childItems: [
        "Objets de réconfort (animal en peluche préféré, couverture, oreiller de la maison)",
        "Divertissement (tablette/iPad avec chargeur, écouteurs, livres à colorier, petits jouets)",
        "Vêtements amples et confortables (les hauts boutonnés sur le devant sont les plus faciles avec les voies IV)",
        "Chaussures à enfiler ou chaussettes antidérapantes",
        "Brosse à dents et dentifrice doux (poils souples seulement)",
        "Baume à lèvres (pour les lèvres sèches à cause des médicaments)",
        "Petites photos de la famille, des animaux de compagnie ou des amis",
      ],
      parentItems: [
        "Pièce d'identité gouvernementale et carte d'assurance maladie provinciale",
        "Un classeur ou un dossier pour les documents médicaux et les horaires de rendez-vous",
        "Chargeur de téléphone et batterie externe",
        "Vêtements de rechange confortables et articles de toilette de base",
        "Collations et bouteille d'eau réutilisable",
        "Carnet et stylo pour noter les questions pour l'équipe médicale",
        "Une liste des médicaments et des allergies de votre enfant",
        "Coordonnées de votre employeur (pour la paperasse de l'AE/congé)",
      ],
      docItems: [
        "Carte d'assurance maladie provinciale (ex. RAMQ, OHIP, MSP)",
        "Lettres de référence ou documents de transfert",
        "Informations d'assurance (couverture privée, le cas échéant)",
        "Liste de contacts d'urgence",
      ],
    },
    fever: {
      title: "Protocole d'urgence en cas de fièvre",
      warning: "⚠️ LA FIÈVRE PENDANT LE TRAITEMENT EST UNE URGENCE MÉDICALE",
      ifTemp: "Si la température de votre enfant atteint :",
      temp1: "38,3°C (101°F) ou plus en une seule prise, OU",
      temp2: "38,0°C (100,4°F) maintenue pendant 1 heure ou plus",
      doThis: "FAITES CECI IMMÉDIATEMENT :",
      doItems: [
        "Ne donnez PAS de Tylenol (acétaminophène) avant d'appeler — cela peut masquer la fièvre",
        "Appelez la ligne d'urgence 24h/24 de votre clinique d'oncologie : _______________",
        "Si vous ne pouvez pas joindre la clinique dans les 15 minutes, rendez-vous directement au service des urgences le plus proche",
        "Dites au triage : « Mon enfant suit une chimiothérapie et a de la fièvre » — cela assure une évaluation immédiate",
        "Apportez : carte d'assurance maladie, liste de médicaments, résultats des analyses de sang les plus récentes",
      ],
      hospitalWillDo: "CE QUE L'HÔPITAL FERA :",
      hospItems: [
        "Des hémocultures seront prélevées",
        "Des antibiotiques par voie IV seront commencés dans les 60 minutes suivant l'arrivée",
        "Votre enfant sera surveillé de près",
      ],
      neverWait:
        "Ne JAMAIS attendre et voir avec une fièvre pendant un traitement contre le cancer.",
    },
    tracker: {
      title: "Suivi hebdomadaire des médicaments et de la température",
      weekOf: "Semaine du :",
      days: [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
        "Notes",
      ],
      rows: [
        "Température matin",
        "Température soir",
        "Médicament 1 : __________________",
        "Médicament 2 : __________________",
        "Médicament 3 : __________________",
        "Médicament 4 : __________________",
        "Appétit (Bon/Moyen/Faible)",
        "Niveau d'énergie (1-5)",
        "Selles (O/N)",
        "Notes/Observations",
      ],
    },
  },
  zh: {
    title: "家长清单与可打印指南",
    subtitle: "帮助您在孩子治疗过程中保持有序的实用工具。",
    printBtn: "打印此页",
    homeLabel: "首页",
    hospitalBag: {
      title: "住院行李清单",
      forChild: "为了您的孩子：",
      forParent: "为了您（家长/看护者）：",
      importantDocs: "重要文件：",
      childItems: [
        "安抚物品（家里最喜欢的毛绒玩具、毯子、枕头）",
        "娱乐（带充电器的平板电脑/iPad、耳机、填色书、小玩具）",
        "舒适宽松的衣服（带静脉输液管时，前排扣上衣最方便）",
        "一脚蹬鞋或防滑袜",
        "牙刷和温和牙膏（仅限软毛）",
        "润唇膏（用于因药物引起的嘴唇干燥）",
        "家人、宠物或朋友的小照片",
      ],
      parentItems: [
        "政府签发的身份证和省级健康卡",
        "用于存放医疗文件和预约时间表的活页夹或文件夹",
        "手机充电器和充电宝",
        "舒适的换洗衣服和基本洗漱用品",
        "零食和可续杯的水瓶",
        "用于记下向医疗团队提出问题的笔记本和笔",
        "您孩子的药物和过敏清单",
        "您雇主的联系信息（用于 EI/休假文书工作）",
      ],
      docItems: [
        "省级健康卡（例如，OHIP、RAMQ、MSP）",
        "转诊信或转院文件",
        "保险信息（私人保险，如适用）",
        "紧急联系人列表",
      ],
    },
    fever: {
      title: "紧急发热应急方案",
      warning: "⚠️ 治疗期间发热属于医疗紧急情况",
      ifTemp: "如果您的孩子的体温达到：",
      temp1: "单次测量达到 38.3°C (101°F) 或更高，或",
      temp2: "持续 1 小时或更长时间达到 38.0°C (100.4°F)",
      doThis: "请立即采取以下措施：",
      doItems: [
        "在打电话前，请勿给孩子服用泰诺 (Tylenol/对乙酰氨基酚) — 这会掩盖发烧症状",
        "致电您的肿瘤诊所 24 小时紧急热线：_______________",
        "如果您在 15 分钟内无法联系到诊所，请直接前往离您最近的急诊室",
        "告诉分诊护士：“我的孩子正在接受化疗，并且发烧了” — 这能确保孩子立即得到评估",
        "携带：健康卡、药物清单、最近的血液检查结果",
      ],
      hospitalWillDo: "医院将会采取的措施：",
      hospItems: [
        "将会进行血液培养",
        "到达后 60 分钟内开始静脉注射抗生素",
        "您的孩子将被密切监测",
      ],
      neverWait: "在癌症治疗期间，面对发烧，绝对不能抱有“等一等看看”的心态。",
    },
    tracker: {
      title: "每周用药与体温记录表",
      weekOf: "周次：",
      days: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日",
        "备注",
      ],
      rows: [
        "早晨体温",
        "晚上体温",
        "药物 1：__________________",
        "药物 2：__________________",
        "药物 3：__________________",
        "药物 4：__________________",
        "胃口 (好/一般/差)",
        "精力 (1-5)",
        "排便 (是/否)",
        "备注/观察",
      ],
    },
  },
};
