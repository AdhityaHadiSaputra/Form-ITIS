// ===== FORMS DATA =====
var formCategories = [
  {
    id: 'access-management',
    name: 'Access & User Management',
    description: 'Manajemen akses dan pengguna sistem',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>',
    forms: [
      {
        id: 'itis-akses',
        title: 'ITIS Akses',
        description: 'Form permintaan akses sistem ITIS dan hak akses pengguna',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"/></svg>',
        fields: ['Nama Employee', 'NIP', 'Sistem yang Diminta', 'Tanggal Dimulai', 'Manager Approval'],
        sla: '2 business days',
        fileSize: '81.9 KB',
        lastModified: '26 Januari'
      },
      {
        id: 'itis-mutasi',
        title: 'ITIS Mutasi',
        description: 'Form mutasi/perubahan data user di sistem ITIS',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/></svg>',
        fields: ['Nama Employee', 'NIP', 'Departemen Baru', 'Posisi Baru', 'Tanggal Efektif'],
        sla: '3 business days',
        fileSize: '80.6 KB',
        lastModified: '6 days ago'
      }
    ]
  },
  {
    id: 'it-operations',
    name: 'IT Operations',
    description: 'Operasional IT dan troubleshooting sistem',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/></svg>',
    forms: [
      {
        id: 'form-cr-it-operation',
        title: 'Form CR IT Operation',
        description: 'Change Request untuk operasional IT dan maintenance',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"/></svg>',
        fields: ['Nomor CR', 'Deskripsi Perubahan', 'Sistem Terdampak', 'Tanggal Implementasi', 'Manager Approval'],
        sla: '5 business days',
        fileSize: '256 KB',
        lastModified: '21 Januari'
      },
      {
        id: 'form-cancel-mtc',
        title: 'Form Cancel MTC',
        description: 'Form pembatalan Maintenance dan Testing request',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
        fields: ['Nomor MTC', 'Alasan Pembatalan', 'Sistem Terkait', 'Tanggal Pembatalan', 'Approval'],
        sla: '1 business day',
        fileSize: '8.36 KB',
        lastModified: '4 November 2025'
      },
      {
        id: 'form-permintan-delete-sro',
        title: 'Form Permintaan Delete SRO',
        description: 'Form permintaan penghapusan Service Request Order',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg>',
        fields: ['Nomor SRO', 'Alasan Penghapusan', 'Approval Manager', 'Tanggal Request', 'Keterangan'],
        sla: '3 business days',
        fileSize: '3.50 MB',
        lastModified: '11 Desember 2025'
      },
      {
        id: 'form-report-it-operation',
        title: 'Form Report IT Operation',
        description: 'Laporan operasional IT bulanan atau periodic',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>',
        fields: ['Periode Laporan', 'Aktivitas IT', 'Metrics Sistem', 'Issues Terjadi', 'Rekomendasi'],
        sla: '10 business days',
        fileSize: '1.27 MB',
        lastModified: '10 September 2025'
      }
    ]
  },
  {
    id: 'asset-management',
    name: 'Asset Management',
    description: 'Manajemen aset IT dan hardware',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>',
    forms: [
      {
        id: 'form-bak-kerusakan',
        title: 'Form BAK Kerusakan atau Kehilangan',
        description: 'Form pelaporan barang rusak atau hilang dengan dokumentasi',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>',
        fields: ['Nomor Inventaris', 'Nama Barang', 'Kondisi Saat Ini', 'Nilai Barang', 'Bukti Rusaknya'],
        sla: '5 business days',
        fileSize: '79.4 KB',
        lastModified: '11 Desember 2025',
        link: 'https://ptpatria-my.sharepoint.com/:x:/r/personal/sap_helpdesk2_triatra_co_id/_layouts/15/Doc.aspx?sourcedoc=%7BA426D104-1035-4C59-B332-7501A9B21434%7D&file=Form%20BAK%20Kerusakan%20atau%20Kehilangan.xlsx&action=default&mobileredirect=true'
      },
      {
        id: 'form-penghapusan-asset',
        title: 'Form Penghapusan Asset',
        description: 'Form permintaan penghapusan aset dari sistem inventory',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>',
        fields: ['Nomor Aset', 'Jenis Aset', 'Alasan Penghapusan', 'Nilai Aset', 'Approval Finance'],
        sla: '7 business days',
        fileSize: '133 KB',
        lastModified: '11 Desember 2025'
      },
      {
        id: 'form-transfer-asset',
        title: 'Form Transfer Asset',
        description: 'Form pemindahan kepemilikan aset antar department',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>',
        fields: ['Nomor Aset', 'Department Asal', 'Department Tujuan', 'Tanggal Transfer', 'Approval'],
        sla: '5 business days',
        fileSize: '135 KB',
        lastModified: '11 Desember 2025'
      }
    ]
  },
  {
    id: 'finance-procurement',
    name: 'Finance & Procurement',
    description: 'Forms untuk keuangan dan procurement',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/></svg>',
    forms: [
      {
        id: 'form-sa-payment',
        title: 'FORM SA PAYMENT',
        description: 'Form Service Agreement dan pembayaran vendor',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
        fields: ['Nomor SA', 'Vendor', 'Jumlah Pembayaran', 'Periode Layanan', 'Approval Finance'],
        sla: '5 business days',
        fileSize: '44 KB',
        lastModified: '4 Juni 2024'
      },
      {
        id: 'form-integrasi-po-ut-tsp',
        title: 'Form Integrasi PO UT-TSP',
        description: 'Form integrasi Purchase Order dengan sistem UT-TSP',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"/></svg>',
        fields: ['Nomor PO', 'Vendor', 'Item Barang', 'Jumlah', 'Total Harga'],
        sla: '7 business days',
        fileSize: '11.6 KB',
        lastModified: '29 Januari'
      }
    ]
  },
  {
    id: 'claims-insurance',
    name: 'Claims & Insurance',
    description: 'Forms untuk klaim dan asuransi karyawan',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>',
    forms: [
      {
        id: 'form-klaim-triatra',
        title: 'Form KLAIM TRIATRA',
        description: 'Form klaim asuransi TRIATRA untuk karyawan dengan supporting docs',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>',
        fields: ['Nomor Klaim', 'Nama Karyawan', 'Jenis Klaim', 'Tanggal Kejadian', 'Nominal Klaim'],
        sla: '10 business days',
        fileSize: '19.1 KB',
        lastModified: '4 Januari'
      }
    ]
  },
  {
    id: 'documentation',
    name: 'Documentation & Meetings',
    description: 'Forms untuk dokumentasi dan rapat',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>',
    forms: [
      {
        id: 'form-notulensi',
        title: 'Form Notulensi',
        description: 'Form pencatatan notulensi rapat dan meeting official',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/></svg>',
        fields: ['Tanggal Rapat', 'Peserta Rapat', 'Topik Diskusi', 'Keputusan yang Diambil', 'Action Items'],
        sla: '3 business days',
        fileSize: '309 KB',
        lastModified: '21 Januari'
      }
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    description: 'Forms untuk infrastruktur IT dan jaringan',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"/></svg>',
    forms: [
      {
        id: 'itis-infrastruktur',
        title: 'ITIS Infrastruktur',
        description: 'Form manajemen infrastruktur ITIS dan network monitoring',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"/></svg>',
        fields: ['Tipe Infrastruktur', 'Lokasi', 'Spesifikasi', 'Status', 'Maintenance Schedule'],
        sla: '5 business days',
        fileSize: '79.7 KB',
        lastModified: '11 Desember 2025'
      }
    ]
  }
];

// ===== HELPER FUNCTIONS =====
function getAllForms() {
  var all = [];
  for (var i = 0; i < formCategories.length; i++) {
    for (var j = 0; j < formCategories[i].forms.length; j++) {
      all.push(formCategories[i].forms[j]);
    }
  }
  return all;
}

function getFormById(id) {
  for (var i = 0; i < formCategories.length; i++) {
    var cat = formCategories[i];
    for (var j = 0; j < cat.forms.length; j++) {
      if (cat.forms[j].id === id) {
        return { form: cat.forms[j], category: cat };
      }
    }
  }
  return null;
}

function getCategoryById(id) {
  for (var i = 0; i < formCategories.length; i++) {
    if (formCategories[i].id === id) return formCategories[i];
  }
  return null;
}
