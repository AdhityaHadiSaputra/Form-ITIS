<?php
/**
 * IT Forms Collection - API Endpoint
 * 
 * Provides JSON API for forms data.
 * Useful if you want to load data dynamically from PHP backend.
 * 
 * Usage:
 *   api.php?action=forms          - Get all forms
 *   api.php?action=categories     - Get all categories  
 *   api.php?action=form&id=xxx    - Get single form by ID
 *   api.php?action=category&id=xxx - Get single category by ID
 *   api.php?action=search&q=xxx   - Search forms
 *   api.php?action=stats          - Get statistics
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Forms data (same as JS data)
$formCategories = [
    [
        'id' => 'access-management',
        'name' => 'Access & User Management',
        'description' => 'Manajemen akses dan pengguna sistem',
        'forms' => [
            [
                'id' => 'itis-akses',
                'title' => 'ITIS Akses',
                'description' => 'Form permintaan akses sistem ITIS dan hak akses pengguna',
                'fields' => ['Nama Employee', 'NIP', 'Sistem yang Diminta', 'Tanggal Dimulai', 'Manager Approval'],
                'sla' => '2 business days',
                'fileSize' => '81.9 KB',
                'lastModified' => '26 Januari'
            ],
            [
                'id' => 'itis-mutasi',
                'title' => 'ITIS Mutasi',
                'description' => 'Form mutasi/perubahan data user di sistem ITIS',
                'fields' => ['Nama Employee', 'NIP', 'Departemen Baru', 'Posisi Baru', 'Tanggal Efektif'],
                'sla' => '3 business days',
                'fileSize' => '80.6 KB',
                'lastModified' => '6 days ago'
            ]
        ]
    ],
    [
        'id' => 'it-operations',
        'name' => 'IT Operations',
        'description' => 'Operasional IT dan troubleshooting sistem',
        'forms' => [
            [
                'id' => 'form-cr-it-operation',
                'title' => 'Form CR IT Operation',
                'description' => 'Change Request untuk operasional IT dan maintenance',
                'fields' => ['Nomor CR', 'Deskripsi Perubahan', 'Sistem Terdampak', 'Tanggal Implementasi', 'Manager Approval'],
                'sla' => '5 business days',
                'fileSize' => '256 KB',
                'lastModified' => '21 Januari'
            ],
            [
                'id' => 'form-cancel-mtc',
                'title' => 'Form Cancel MTC',
                'description' => 'Form pembatalan Maintenance dan Testing request',
                'fields' => ['Nomor MTC', 'Alasan Pembatalan', 'Sistem Terkait', 'Tanggal Pembatalan', 'Approval'],
                'sla' => '1 business day',
                'fileSize' => '8.36 KB',
                'lastModified' => '4 November 2025'
            ],
            [
                'id' => 'form-permintan-delete-sro',
                'title' => 'Form Permintaan Delete SRO',
                'description' => 'Form permintaan penghapusan Service Request Order',
                'fields' => ['Nomor SRO', 'Alasan Penghapusan', 'Approval Manager', 'Tanggal Request', 'Keterangan'],
                'sla' => '3 business days',
                'fileSize' => '3.50 MB',
                'lastModified' => '11 Desember 2025'
            ],
            [
                'id' => 'form-report-it-operation',
                'title' => 'Form Report IT Operation',
                'description' => 'Laporan operasional IT bulanan atau periodic',
                'fields' => ['Periode Laporan', 'Aktivitas IT', 'Metrics Sistem', 'Issues Terjadi', 'Rekomendasi'],
                'sla' => '10 business days',
                'fileSize' => '1.27 MB',
                'lastModified' => '10 September 2025'
            ]
        ]
    ],
    [
        'id' => 'asset-management',
        'name' => 'Asset Management',
        'description' => 'Manajemen aset IT dan hardware',
        'forms' => [
            [
                'id' => 'form-bak-kerusakan',
                'title' => 'Form BAK Kerusakan atau Kehilangan',
                'description' => 'Form pelaporan barang rusak atau hilang dengan dokumentasi',
                'fields' => ['Nomor Inventaris', 'Nama Barang', 'Kondisi Saat Ini', 'Nilai Barang', 'Bukti Rusaknya'],
                'sla' => '5 business days',
                'fileSize' => '79.4 KB',
                'lastModified' => '11 Desember 2025'
            ],
            [
                'id' => 'form-penghapusan-asset',
                'title' => 'Form Penghapusan Asset',
                'description' => 'Form permintaan penghapusan aset dari sistem inventory',
                'fields' => ['Nomor Aset', 'Jenis Aset', 'Alasan Penghapusan', 'Nilai Aset', 'Approval Finance'],
                'sla' => '7 business days',
                'fileSize' => '133 KB',
                'lastModified' => '11 Desember 2025'
            ],
            [
                'id' => 'form-transfer-asset',
                'title' => 'Form Transfer Asset',
                'description' => 'Form pemindahan kepemilikan aset antar department',
                'fields' => ['Nomor Aset', 'Department Asal', 'Department Tujuan', 'Tanggal Transfer', 'Approval'],
                'sla' => '5 business days',
                'fileSize' => '135 KB',
                'lastModified' => '11 Desember 2025'
            ]
        ]
    ],
    [
        'id' => 'finance-procurement',
        'name' => 'Finance & Procurement',
        'description' => 'Forms untuk keuangan dan procurement',
        'forms' => [
            [
                'id' => 'form-sa-payment',
                'title' => 'FORM SA PAYMENT',
                'description' => 'Form Service Agreement dan pembayaran vendor',
                'fields' => ['Nomor SA', 'Vendor', 'Jumlah Pembayaran', 'Periode Layanan', 'Approval Finance'],
                'sla' => '5 business days',
                'fileSize' => '44 KB',
                'lastModified' => '4 Juni 2024'
            ],
            [
                'id' => 'form-integrasi-po-ut-tsp',
                'title' => 'Form Integrasi PO UT-TSP',
                'description' => 'Form integrasi Purchase Order dengan sistem UT-TSP',
                'fields' => ['Nomor PO', 'Vendor', 'Item Barang', 'Jumlah', 'Total Harga'],
                'sla' => '7 business days',
                'fileSize' => '11.6 KB',
                'lastModified' => '29 Januari'
            ]
        ]
    ],
    [
        'id' => 'claims-insurance',
        'name' => 'Claims & Insurance',
        'description' => 'Forms untuk klaim dan asuransi karyawan',
        'forms' => [
            [
                'id' => 'form-klaim-triatra',
                'title' => 'Form KLAIM TRIATRA',
                'description' => 'Form klaim asuransi TRIATRA untuk karyawan dengan supporting docs',
                'fields' => ['Nomor Klaim', 'Nama Karyawan', 'Jenis Klaim', 'Tanggal Kejadian', 'Nominal Klaim'],
                'sla' => '10 business days',
                'fileSize' => '19.1 KB',
                'lastModified' => '4 Januari'
            ]
        ]
    ],
    [
        'id' => 'documentation',
        'name' => 'Documentation & Meetings',
        'description' => 'Forms untuk dokumentasi dan rapat',
        'forms' => [
            [
                'id' => 'form-notulensi',
                'title' => 'Form Notulensi',
                'description' => 'Form pencatatan notulensi rapat dan meeting official',
                'fields' => ['Tanggal Rapat', 'Peserta Rapat', 'Topik Diskusi', 'Keputusan yang Diambil', 'Action Items'],
                'sla' => '3 business days',
                'fileSize' => '309 KB',
                'lastModified' => '21 Januari'
            ]
        ]
    ],
    [
        'id' => 'infrastructure',
        'name' => 'Infrastructure',
        'description' => 'Forms untuk infrastruktur IT dan jaringan',
        'forms' => [
            [
                'id' => 'itis-infrastruktur',
                'title' => 'ITIS Infrastruktur',
                'description' => 'Form manajemen infrastruktur ITIS dan network monitoring',
                'fields' => ['Tipe Infrastruktur', 'Lokasi', 'Spesifikasi', 'Status', 'Maintenance Schedule'],
                'sla' => '5 business days',
                'fileSize' => '79.7 KB',
                'lastModified' => '11 Desember 2025'
            ]
        ]
    ]
];

// Helper functions
function getAllForms($categories) {
    $forms = [];
    foreach ($categories as $cat) {
        foreach ($cat['forms'] as $form) {
            $form['categoryId'] = $cat['id'];
            $form['categoryName'] = $cat['name'];
            $forms[] = $form;
        }
    }
    return $forms;
}

function getFormById($categories, $id) {
    foreach ($categories as $cat) {
        foreach ($cat['forms'] as $form) {
            if ($form['id'] === $id) {
                return [
                    'form' => $form,
                    'category' => [
                        'id' => $cat['id'],
                        'name' => $cat['name'],
                        'description' => $cat['description']
                    ]
                ];
            }
        }
    }
    return null;
}

function getCategoryById($categories, $id) {
    foreach ($categories as $cat) {
        if ($cat['id'] === $id) return $cat;
    }
    return null;
}

// Route handling
$action = $_GET['action'] ?? 'forms';

switch ($action) {
    case 'forms':
        echo json_encode([
            'success' => true,
            'data' => getAllForms($formCategories)
        ]);
        break;

    case 'categories':
        echo json_encode([
            'success' => true,
            'data' => $formCategories
        ]);
        break;

    case 'form':
        $id = $_GET['id'] ?? '';
        $result = getFormById($formCategories, $id);
        if ($result) {
            echo json_encode(['success' => true, 'data' => $result]);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Form not found']);
        }
        break;

    case 'category':
        $id = $_GET['id'] ?? '';
        $result = getCategoryById($formCategories, $id);
        if ($result) {
            echo json_encode(['success' => true, 'data' => $result]);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Category not found']);
        }
        break;

    case 'search':
        $query = strtolower(trim($_GET['q'] ?? ''));
        $allForms = getAllForms($formCategories);
        if ($query === '') {
            echo json_encode(['success' => true, 'data' => $allForms, 'count' => count($allForms)]);
        } else {
            $results = array_filter($allForms, function($f) use ($query) {
                if (stripos($f['title'], $query) !== false) return true;
                if (stripos($f['description'], $query) !== false) return true;
                foreach ($f['fields'] as $field) {
                    if (stripos($field, $query) !== false) return true;
                }
                return false;
            });
            echo json_encode([
                'success' => true,
                'data' => array_values($results),
                'count' => count($results),
                'query' => $query
            ]);
        }
        break;

    case 'stats':
        $allForms = getAllForms($formCategories);
        $totalFields = 0;
        foreach ($allForms as $f) {
            $totalFields += count($f['fields']);
        }
        echo json_encode([
            'success' => true,
            'data' => [
                'totalForms' => count($allForms),
                'totalCategories' => count($formCategories),
                'totalFields' => $totalFields,
                'uptime' => '99.9%'
            ]
        ]);
        break;

    default:
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Unknown action. Use: forms, categories, form, category, search, stats'
        ]);
}
