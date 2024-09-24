export const header = [
  { 
    href: "/", key: "home", 
    label: "بيت", 
    icon: "fluent:home-48-regular" },
  {
    href: "/awrag",
    key: "paper",
    label: "ورقة",
    icon: "system-uicons:paper",
  },
  {
    href: "/video",
    key: "video",
    label: "فيديو",
    icon: "fluent:video-48-regular",
  },
  {
    href: "/article",
    key: "article",
    label: "مقال",
    icon: "material-symbols-light:article-outline",
  },
  {
    href: "/community",
    key: "community ",
    label: "مجتمع",
    icon: "prime:circle",
  },
  { href: "/search", key: "search ", label: "بحث", icon: "mynaui:search" },
];

export const mobile = [
  { 
    href: "/", key: "home", 
    label: "بيت", 
    icon: "fluent:home-48-regular" },

  {
    href: "/video",
    key: "video",
    label: "فيديو",
    icon: "fluent:video-48-regular",
  },
  {
    href: "/article",
    key: "article",
    label: "مقال",
    icon: "material-symbols-light:article-outline",
  },
 
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
    path: "/awrag",
    icon: "system-uicons:paper",
  },

  {
    title: "المنصة",
    path: "/platform",
    icon: "radix-icons:commit",
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
    title: "الاتصال",
    path: "/",
    icon: "fluent:mail-16-regular",
  },
  {
    title: "المطورين",
    path: "/contribute",
    icon: "bi:code",
  },
];


