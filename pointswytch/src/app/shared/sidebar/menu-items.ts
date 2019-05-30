import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '',
    title: 'ADMIN',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  }
  ,
  {
    path: '',
    title: 'Banks',
    icon: 'mdi mdi-bank',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/admin/bank-list',
        title: 'Manage Banks',
        icon: 'icon icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/add-bank',
        title: 'Add Bank',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Channels',
    icon: 'mdi mdi-bank',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/admin/channels',
        title: 'Payment Channels',
        icon: 'icon icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/add-channel',
        title: 'Add Channel',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Products',
    icon: 'mdi mdi-bank',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/admin/products',
        title: 'Manage Products',
        icon: 'icon icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/add-product',
        title: 'Add Product',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }

  ,
  {
    path: '',
    title: 'Telcos',
    icon: 'mdi mdi-access-point-network',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/admin/telcos',
        title: 'Manage Telcos',
        icon: 'icon icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/add-telco',
        title: 'Add New',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Processors',
    icon: 'mdi mdi-credit-card-multiple',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/admin/processors',
        title: 'Manage Processors',
        icon: 'icon icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/add-processor',
        title: 'Add New',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Roles',
    icon: 'icon icon-layers',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/admin/roles',
        title: 'Manage Roles',
        icon: 'icon icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/add-role',
        title: 'Add Role',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Permissions',
    icon: 'icon icon-menu',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/admin/permissions',
        title: 'Manage Permissions',
        icon: 'icon icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/add-permission',
        title: 'Add Permission',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
      ,
      {
        path: '/admin/edit-permission',
        title: 'Edit Permission',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
      ,
      {
        path: '/admin/add-permission',
        title: 'Delete Permission',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Users',
    icon: 'icon icon-people',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/admin/list-users',
        title: 'Manage Users',
        icon: 'icon icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/admin/add-user',
        title: 'Add User',
        icon: 'icon icon-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },

  {
    path: '',
    title: 'ACQUIRING',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Merchants',
    icon: 'mdi mdi-widgets',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
        icon: 'mdi mdi-equal',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/alert',
        title: 'Alert',
        icon: 'mdi mdi-message-bulleted',
        class: '',
        extralink: false,
        submenu: []
      }

    ]
  },
  {
    path: '',
    title: 'Terminals',
    icon: 'mdi mdi-credit-card-multiple',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/cards/basiccards',
        title: 'Basic Cards',
        icon: 'mdi mdi-layers',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/cards/customcards',
        title: 'Custom Cards',
        icon: 'mdi mdi-credit-card-scan',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/cards/weathercards',
        title: 'Weather Cards',
        icon: 'mdi mdi-weather-fog',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Fees',
    icon: 'mdi mdi-cube-send',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/extra-component/toastr',
        title: 'Toastr',
        icon: 'mdi mdi-poll',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/extra-component/upload',
        title: 'File Upload',
        icon: 'mdi mdi-arrow-up-box',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Fee Sharing',
    icon: 'mdi mdi-chemical-weapon',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/widgets/apps',
        title: 'Widget Apps',
        icon: 'mdi mdi-comment-processing-outline',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/widgets/data',
        title: 'Widget Data',
        icon: 'mdi mdi-calendar',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Payments',
    icon: 'mdi mdi-chemical-weapon',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/widgets/apps',
        title: 'Transactions',
        icon: 'mdi mdi-comment-processing-outline',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/widgets/data',
        title: 'Commissions',
        icon: 'mdi mdi-calendar',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Banking',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Wallets',
    icon: 'mdi mdi-cart-outline',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/banking/wallets',
        title: 'Manage Wallets',
        icon: 'mdi mdi-cards-variant',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/banking/create-wallet',
        title: 'Create Wallet',
        icon: 'mdi mdi-cart',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Transactions',
    icon: 'mdi mdi-account-circle',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/banking/fund-transfer',
        title: 'Fund Transfer',
        icon: 'mdi mdi-account-key',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/banking/bill-payment',
        title: 'Bill Payment',
        icon: 'mdi mdi-account-key',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/banking/bulk-payment',
        title: 'Bulk Payment',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/banking/bulk-airtime',
        title: 'Bulk Airtime',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      },

      {
        path: '/banking/debit-mandate',
        title: 'Debit Mandate',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/banking/deposit',
        title: 'Deposit',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/banking/withdrawal',
        title: 'Withdrawal',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      }
      ,
      {
        path: '/banking/balance-enquiry',
        title: 'Check Balance',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/banking/statement',
        title: 'Transaction History',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Cards',
    icon: 'mdi mdi-file',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/sample-pages/profile',
        title: 'Virtual Cards',
        icon: 'mdi mdi-account-network',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/pricing',
        title: 'Card Services',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/banking/pin-change',
        title: 'Change Pin',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/pricing',
        title: 'Card Constraint',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      }
      ,
      {
        path: '/sample-pages/pricing',
        title: 'Card Exception',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/pricing',
        title: 'Card Control',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      }
      ,
      {
        path: '/sample-pages/pricing',
        title: 'Card Pins',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      }
      ,
      {
        path: '/sample-pages/pricing',
        title: 'Card Products',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/pricing',
        title: 'Card Data Preparation',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      }
      ,
      {
        path: '/sample-pages/pricing',
        title: 'PGP File',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Collections',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Billers',
    icon: 'mdi mdi-cart-outline',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/collections/billers',
        title: 'Manage Billers',
        icon: 'mdi mdi-cards-variant',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/collections/add-biller',
        title: 'Add Biller',
        icon: 'mdi mdi-cart',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Biller Category',
    icon: 'mdi mdi-account-circle',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/collections/biller-categories',
        title: 'Biller Categories',
        icon: 'mdi mdi-account-key',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/collections/add-category',
        title: 'Add Category',
        icon: 'mdi mdi-account-key',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Biller Fees',
    icon: 'mdi mdi-file',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/collections/biller-fees',
        title: 'Biller Fee',
        icon: 'mdi mdi-account-network',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/collections/add-new',
        title: 'Add New',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Agency',
    icon: 'mdi mdi-file',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/collections/agents',
        title: 'Agents',
        icon: 'mdi mdi-account-network',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/collections/add-new',
        title: 'Add New',
        icon: 'mdi mdi-file-export',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
  ,
  {
    path: '',
    title: 'Operations',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Technical Supports',
    icon: 'mdi mdi-cart-outline',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/operations/incidents',
        title: 'Manage Incidents',
        icon: 'mdi mdi-cards-variant',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/operations/log-incident',
        title: 'Log Incidents',
        icon: 'mdi mdi-cart',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Customer Support',
    icon: 'mdi mdi-account-circle',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/operations/tickets',
        title: 'Manage Tickets',
        icon: 'mdi mdi-cart',
        class: '',
        extralink: false,
        submenu: []
      }
      ,
      {
        path: '/operations/create-ticket',
        title: 'Create Ticket',
        icon: 'mdi mdi-account-key',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/operations/disputes',
        title: 'Resolve Disputes',
        icon: 'mdi mdi-account-plus',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
];
