export const header = [
  { 
    href: "/platform", 
    key: "platform", 
    label: "بيت", 
    icon: "fluent:home-48-regular" },
  {
    href: "/paper",
    key: "paper",
    label: "ورقة",
    icon: "system-uicons:paper",
  },
  {
    href: "/member",
    key: "member",
    label: "فريق",
    icon: "fluent:person-20-regular",
  },
  {
    href: "/club",
    key: "club",
    label: "امانة",
    icon: "fluent:organization-horizontal-20-regular",
  },
  {
    href: "/project",
    key: "project",
    label: "مشروع",
    icon: "iconamoon:folder-thin",
  },
  {
    href: "/task",
    key: "task",
    label: "مهمة",
    icon: "codicon:issues",
  },
  // {
  //   href: "/report",
  //   key: "report",
  //   label: "تقرير",
  //   icon: "material-symbols-light:article-outline",
  // },
  // {
  //   href: "/wallet",
  //   key: "wallet",
  //   label: "مال",
  //   icon: "circum:wallet",
  // },
];


export const hamburger = [
  {
    title: "الدخول",
    path: "/login",
    icon: "ph:sign-in",
  },

  {
    title: "التسجيل",
    path: "/join",
    icon: "iconamoon:profile-light",
  },
  {
    title: "الأوراق",
    path: "/paper",
    icon: "system-uicons:paper",
  },

  {
    title: "التقرير",
    path: "/report",
    icon: "material-symbols-light:article-outline",
    submenu: true,
    submenuItems: [
      {
        title: "Roadmap",
        path: "/",
      },

      {
        title: "Block",
        path: "/",
      },
    ],
  },

  {
    title: "المال",
    path: "/wallet",
    icon: "circum:wallet",
  },
  {
    title: "المطورين",
    path: "/contribute",
    icon: "bi:code",
  },
];

