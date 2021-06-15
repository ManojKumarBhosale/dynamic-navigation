const navItems = [
  {
    label: "Employee",
    path: "/employee",
    key: "employee",
    subNavItems: [
      {
        label: "Dashboard",
        path: "/employee/dashboard",
        key: "dashboard",
      },
      { label: "Project", path: "/employee/project", key: "project" },
      {
        label: "Settings",
        path: "/employee/settings",
        key: "settings",
      },
    ],
  },
  {
    label: "Office",
    path: "/office",
    key: "office",
    subNavItems: [
      {
        label: "Department",
        path: "/office/department",
        key: "department",
      },
      { label: "Location", path: "/office/location", key: "location" },
      {
        label: "Sales",
        path: "/office/sales",
        key: "sales",
      },
    ],
  },
  {
    label: "Company",
    path: "/company",
    key: "company",
    subNavItems: [
      {
        label: "About",
        path: "/company/about",
        key: "about",
      },
      {
        label: "Management",
        path: "/company/management",
        key: "management",
      },
      {
        label: "Jobs",
        path: "/company/jobs",
        key: "jobs",
      },
    ],
  },
  {
    label: "Customer",
    path: "/customer",
    key: "customer",
    subNavItems: [
      {
        label: "Dashboard",
        path: "/customer/dasboard",
        key: "dashboard",
      },
    ],
  },
];

export const getHeaderNavItems = () =>
  navItems.map(({ label, path, key }) => ({ label, path, key }));

export const getSideNavItems = (navItemKey) => {
  const item = navItems.find((item) => item.key === navItemKey);
  return item ? item?.subNavItems : [];
};

export const getDefaultSubNavMap = () => {
  const defaultSubNavMap = {};
  navItems.forEach((item) => {
    defaultSubNavMap[item.key] = item.subNavItems[0].key;
  });
  return defaultSubNavMap;
};
