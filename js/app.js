// ===== ROUTING =====
// formCategories, getAllForms, getFormById, getCategoryById are defined in data.js

function navigate(hash) {
  window.location.hash = hash;
}

function scrollToForms(e) {
  if (e) e.preventDefault();
  var el = document.getElementById('forms-anchor');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function handleRoute() {
  var hash = window.location.hash.slice(1) || '';
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(p) { p.classList.remove('active'); });

  // Update nav active state
  document.querySelectorAll('.nav-link[data-nav]').forEach(function(l) { l.classList.remove('active'); });

  if (hash === '' || hash === 'home') {
    document.getElementById('page-home').classList.add('active');
    document.querySelector('[data-nav="home"]').classList.add('active');
    renderCategories();
  } else if (hash === 'search') {
    document.getElementById('page-search').classList.add('active');
    document.querySelector('[data-nav="search"]').classList.add('active');
    renderSearchResults();
  } else if (hash === 'dashboard') {
    document.getElementById('page-dashboard').classList.add('active');
    document.querySelector('[data-nav="dashboard"]').classList.add('active');
    renderDashboard();
  } else if (hash === 'about') {
    document.getElementById('page-about').classList.add('active');
    document.querySelector('[data-nav="about"]').classList.add('active');
    renderAbout();
  } else if (hash.indexOf('form/') === 0) {
    var formId = hash.replace('form/', '');
    document.getElementById('page-form-detail').classList.add('active');
    renderFormDetail(formId);
  } else if (hash.indexOf('category/') === 0) {
    var catId = hash.replace('category/', '');
    document.getElementById('page-category').classList.add('active');
    renderCategory(catId);
  } else {
    document.getElementById('page-404').classList.add('active');
  }

  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', handleRoute);

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('mobileNav').classList.remove('open');
}

// ===== RENDER: FORM CARD =====
function renderFormCard(form) {
  var tagsHTML = form.fields.slice(0, 2).map(function(f) {
    return '<span class="form-card-tag">' + f + '</span>';
  }).join('') + (form.fields.length > 2 ? '<span class="form-card-tag">+' + (form.fields.length - 2) + '</span>' : '');

  // If form has an external link, open in new tab; otherwise navigate to detail page
  var clickAction = form.link
    ? 'window.open(\'' + form.link.replace(/'/g, "\\'") + '\', \'_blank\', \'noopener,noreferrer\')'
    : 'navigate(\'form/' + form.id + '\')';
  var externalIcon = form.link
    ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px;vertical-align:middle;margin-left:4px"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>'
    : '';

  return '<a class="form-card" onclick="' + clickAction + '" style="cursor:pointer">' +
    '<div class="form-card-top">' +
      '<div class="form-card-icon">' + form.icon + '</div>' +
      '<div>' +
        '<div class="form-card-title">' + form.title + externalIcon + '</div>' +
        '<div class="form-card-desc">' + form.description + '</div>' +
      '</div>' +
    '</div>' +
    (form.sla ? '<div class="form-card-sla">' + form.sla + '</div>' : '') +
    '<div class="form-card-tags">' + tagsHTML + '</div>' +
    '<div class="form-card-footer">' +
      '<span>' + (form.fileSize || '\u2014') + '</span>' +
      '<span>' + (form.link ? 'Open' : 'View') + ' &rarr;</span>' +
    '</div>' +
  '</a>';
}

// ===== RENDER: CATEGORIES (HOME) =====
function renderCategories() {
  var container = document.getElementById('categoriesList');
  container.innerHTML = formCategories.map(function(cat) {
    return '<div class="category">' +
      '<div class="category-header">' +
        '<div class="category-icon">' + cat.icon + '</div>' +
        '<div>' +
          '<div class="category-name">' + cat.name + '</div>' +
          '<div class="category-desc">' + cat.description + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="forms-grid">' +
        cat.forms.map(renderFormCard).join('') +
      '</div>' +
    '</div>';
  }).join('');
}

// ===== RENDER: SEARCH =====
function renderSearchResults() {
  var input = document.getElementById('searchInput');
  var query = input.value.toLowerCase().trim();
  var allForms = getAllForms();
  var results = query
    ? allForms.filter(function(f) {
        return f.title.toLowerCase().indexOf(query) !== -1 ||
          f.description.toLowerCase().indexOf(query) !== -1 ||
          f.fields.some(function(field) { return field.toLowerCase().indexOf(query) !== -1; });
      })
    : allForms;

  var container = document.getElementById('searchResults');

  if (results.length === 0) {
    container.innerHTML =
      '<div class="search-empty">' +
        '<h3>No forms found</h3>' +
        '<p>Try searching with different keywords or <a style="color:var(--primary);cursor:pointer" onclick="navigate(\'\')">browse all forms</a></p>' +
        '<button class="btn btn-primary btn-sm" onclick="document.getElementById(\'searchInput\').value=\'\';renderSearchResults()">Clear Search</button>' +
      '</div>';
  } else {
    container.innerHTML =
      '<div class="search-count">Found ' + results.length + ' form' + (results.length !== 1 ? 's' : '') + '</div>' +
      '<div class="forms-grid">' + results.map(renderFormCard).join('') + '</div>';
  }
}

// ===== RENDER: FORM DETAIL =====
function renderFormDetail(formId) {
  var result = getFormById(formId);
  var container = document.getElementById('formDetailContent');

  if (!result) {
    container.innerHTML =
      '<button class="btn btn-ghost" onclick="navigate(\'\')">&#8592; Back to Forms</button>' +
      '<div class="sidebar-card" style="text-align:center;padding:48px;margin-top:24px"><p style="color:var(--muted-fg)">Form not found</p></div>';
    return;
  }

  var form = result.form;
  var category = result.category;

  var fieldsHTML = form.fields.map(function(field) {
    var textareaKeywords = ['description', 'justification', 'details', 'plan', 'impact', 'comment', 'rekomendasi', 'keterangan', 'action items', 'keputusan', 'topik diskusi', 'aktivitas it', 'issues terjadi', 'deskripsi perubahan'];
    var isTextarea = textareaKeywords.some(function(kw) { return field.toLowerCase().indexOf(kw) !== -1; });
    var fieldId = 'field-' + field.replace(/\s/g, '-');
    return '<div class="form-group">' +
      '<label class="form-label" for="' + fieldId + '">' + field + '</label>' +
      (isTextarea
        ? '<textarea class="form-textarea" id="' + fieldId + '" name="' + field + '" placeholder="Enter ' + field.toLowerCase() + '" required></textarea>'
        : '<input class="form-input" type="text" id="' + fieldId + '" name="' + field + '" placeholder="Enter ' + field.toLowerCase() + '" required>'
      ) +
    '</div>';
  }).join('');

  var infoRows = [
    { label: 'Form ID', value: form.id, mono: true },
    { label: 'Category', value: category.name },
    { label: 'Number of Fields', value: form.fields.length }
  ];
  if (form.sla) infoRows.push({ label: 'Expected SLA', value: form.sla });
  if (form.fileSize) infoRows.push({ label: 'File Size', value: form.fileSize });
  if (form.lastModified) infoRows.push({ label: 'Last Modified', value: form.lastModified });

  var sidebarInfoRows = infoRows.map(function(r) {
    return '<div class="sidebar-info-row">' +
      '<div class="sidebar-info-label">' + r.label + '</div>' +
      '<div class="sidebar-info-value' + (r.mono ? ' mono' : '') + '">' + r.value + '</div>' +
    '</div>';
  }).join('');

  var fieldsListHTML = form.fields.map(function(f) {
    return '<li class="sidebar-field-item">' + f + '</li>';
  }).join('');

  container.innerHTML =
    '<button class="btn btn-ghost" onclick="navigate(\'\')">&#8592; Back to Forms</button>' +
    '<div class="form-detail-header" style="margin-top:24px">' +
      '<div class="form-detail-icon">' + form.icon + '</div>' +
      '<div style="flex:1">' +
        '<div class="form-detail-badges">' +
          '<span class="badge badge-primary">' + category.name + '</span>' +
          (form.sla ? '<span class="badge badge-secondary">SLA: ' + form.sla + '</span>' : '') +
        '</div>' +
        '<h1 class="form-detail-title">' + form.title + '</h1>' +
        '<p class="form-detail-desc">' + form.description + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="form-detail-grid">' +
      '<div class="form-main">' +
        '<div id="formPanel" class="form-panel">' +
          '<form id="detailForm" onsubmit="handleFormSubmit(event)">' +
            fieldsHTML +
            '<div class="form-actions">' +
              '<button type="submit" class="btn btn-primary btn-lg" style="flex:1">Submit Form</button>' +
              '<button type="button" class="btn btn-outline btn-lg" style="flex:1">Download Template</button>' +
            '</div>' +
          '</form>' +
        '</div>' +
      '</div>' +
      '<div class="form-sidebar">' +
        '<div class="sidebar-card"><h3>Form Information</h3>' + sidebarInfoRows + '</div>' +
        '<div class="sidebar-card"><h3>Required Fields</h3><ul class="sidebar-field-list">' + fieldsListHTML + '</ul></div>' +
        '<div class="sidebar-card sidebar-help"><h3>Need Help?</h3><p>Contact the IT department support team for assistance with this form.</p><button class="btn btn-outline btn-sm" style="width:100%">Contact Support</button></div>' +
      '</div>' +
    '</div>';
}

function handleFormSubmit(e) {
  e.preventDefault();
  var panel = document.getElementById('formPanel');
  panel.innerHTML =
    '<div class="form-success">' +
      '<div class="form-success-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg></div>' +
      '<h3>Form Submitted Successfully!</h3>' +
      '<p>Your form has been submitted. You will receive a confirmation email shortly.</p>' +
      '<button class="btn btn-primary" onclick="navigate(\'\')">Return to Forms</button>' +
    '</div>';
}

// ===== RENDER: CATEGORY PAGE =====
function renderCategory(catId) {
  var category = getCategoryById(catId);
  var container = document.getElementById('categoryContent');

  if (!category) {
    container.innerHTML =
      '<button class="btn btn-ghost" onclick="navigate(\'\')">&#8592; Back to All Forms</button>' +
      '<div style="text-align:center;padding:48px"><p style="color:var(--muted-fg)">Category not found</p></div>';
    return;
  }

  var totalFields = category.forms.reduce(function(a, f) { return a + f.fields.length; }, 0);
  var avgMinutes = Math.ceil(category.forms.reduce(function(a, f) { return a + f.fields.length * 5; }, 0) / 60);

  container.innerHTML =
    '<button class="btn btn-ghost" onclick="navigate(\'\')">&#8592; Back to All Forms</button>' +
    '<div style="margin:24px 0 48px">' +
      '<div style="display:flex;align-items:flex-start;gap:20px;margin-bottom:16px">' +
        '<div class="form-detail-icon">' + category.icon + '</div>' +
        '<div style="flex:1">' +
          '<h1 class="page-title">' + category.name + '</h1>' +
          '<p class="page-desc" style="margin-bottom:0">' + category.description + '</p>' +
        '</div>' +
      '</div>' +
      '<div style="width:48px;height:4px;background:var(--primary);border-radius:2px;margin-top:16px"></div>' +
    '</div>' +
    '<div class="dash-stats" style="margin-bottom:40px">' +
      '<div class="dash-stat-card"><div class="dash-stat-number" style="color:var(--primary)">' + category.forms.length + '</div><div class="dash-stat-desc">Total Forms</div></div>' +
      '<div class="dash-stat-card"><div class="dash-stat-number" style="color:var(--primary)">' + totalFields + '</div><div class="dash-stat-desc">Total Fields</div></div>' +
      '<div class="dash-stat-card"><div class="dash-stat-number" style="color:var(--primary)">100%</div><div class="dash-stat-desc">Digitalized</div></div>' +
      '<div class="dash-stat-card"><div class="dash-stat-number" style="color:var(--primary)">' + avgMinutes + 'm</div><div class="dash-stat-desc">Avg Completion</div></div>' +
    '</div>' +
    '<div class="forms-grid">' + category.forms.map(renderFormCard).join('') + '</div>';
}

// ===== RENDER: DASHBOARD =====
function renderDashboard() {
  var totalForms = getAllForms().length;
  var totalFields = getAllForms().reduce(function(a, f) { return a + f.fields.length; }, 0);
  var categoriesCount = formCategories.length;

  var categoryCardsHTML = formCategories.map(function(cat) {
    var fieldCount = cat.forms.reduce(function(a, f) { return a + f.fields.length; }, 0);
    return '<a class="dash-cat-card" onclick="navigate(\'category/' + cat.id + '\')">' +
      '<div class="dash-cat-icon">' + cat.icon + '</div>' +
      '<div class="dash-cat-name">' + cat.name + '</div>' +
      '<div class="dash-cat-desc">' + cat.description + '</div>' +
      '<div class="dash-cat-stats">' +
        '<div><div class="dash-cat-stat-label">Forms</div><div class="dash-cat-stat-value">' + cat.forms.length + '</div></div>' +
        '<div><div class="dash-cat-stat-label">Fields</div><div class="dash-cat-stat-value">' + fieldCount + '</div></div>' +
      '</div>' +
    '</a>';
  }).join('');

  var topCategories = formCategories.slice().sort(function(a, b) { return b.forms.length - a.forms.length; }).slice(0, 3);
  var topCatHTML = topCategories.map(function(cat) {
    return '<div class="dash-info-item">' +
      '<div class="dash-info-item-left"><div class="category-icon" style="width:32px;height:32px">' + cat.icon + '</div>' + cat.name + '</div>' +
      '<div class="dash-info-item-right">' + cat.forms.length + ' forms</div>' +
    '</div>';
  }).join('');

  var container = document.getElementById('dashboardContent');
  container.innerHTML =
    '<h1 class="page-title">Dashboard</h1>' +
    '<p class="page-desc">Overview of all IT/IS forms and statistics</p>' +
    '<div class="dash-stats">' +
      '<div class="dash-stat-card"><div class="dash-stat-label">Total Forms</div><div class="dash-stat-number">' + totalForms + '</div><div class="dash-stat-desc">Ready to use</div></div>' +
      '<div class="dash-stat-card"><div class="dash-stat-label">Categories</div><div class="dash-stat-number">' + categoriesCount + '</div><div class="dash-stat-desc">Organized by type</div></div>' +
      '<div class="dash-stat-card"><div class="dash-stat-label">Total Fields</div><div class="dash-stat-number">' + totalFields + '</div><div class="dash-stat-desc">Data points</div></div>' +
      '<div class="dash-stat-card"><div class="dash-stat-label">Uptime</div><div class="dash-stat-number">99.9%</div><div class="dash-stat-desc">Service reliability</div></div>' +
    '</div>' +
    '<h2 style="font-size:22px;font-weight:700;margin-bottom:24px">Category Overview</h2>' +
    '<div class="dash-categories-grid">' + categoryCardsHTML + '</div>' +
    '<div class="dash-bottom-grid">' +
      '<div class="dash-info-card"><h3>Most Used Categories</h3>' + topCatHTML + '</div>' +
      '<div class="dash-info-card"><h3>Average SLA</h3><div class="sidebar-info-row"><div class="sidebar-info-label">Across all forms</div><div style="font-size:24px;font-weight:700;color:var(--primary)">3-5 days</div></div><p style="font-size:13px;color:var(--muted-fg);margin-top:8px">SLA varies by form type and priority level</p></div>' +
      '<div class="dash-info-card"><h3>System Status</h3><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><div class="status-dot"></div><span style="font-size:14px">All Systems Operational</span></div><p style="font-size:13px;color:var(--muted-fg)">No incidents or maintenance scheduled</p></div>' +
    '</div>';
}

// ===== RENDER: ABOUT =====
function renderAbout() {
  var container = document.getElementById('aboutContent');

  var features = [
    'Sistem manajemen form terpusat untuk departemen IT/IS',
    '14 form aktif yang siap digunakan',
    'Terorganisir dalam 7 kategori berdasarkan fungsi',
    'Pengajuan form cepat dengan tracking real-time',
    'Pemantauan SLA dan kepatuhan',
    'Penanganan data yang aman'
  ];

  var benefits = [
    { title: 'Pemrosesan Lebih Cepat', desc: 'Pengajuan form yang tersederhanakan mengurangi waktu pemrosesan secara signifikan' },
    { title: 'Organisasi Lebih Baik', desc: 'Form yang diorganisir per kategori memudahkan menemukan form yang Anda butuhkan' },
    { title: 'Pelacakan yang Lebih Baik', desc: 'Pantau status form dan kepatuhan SLA secara real-time' },
    { title: 'Keamanan Lebih Baik', desc: 'Pengajuan form yang aman dengan enkripsi data dan validasi lengkap' }
  ];

  var featuresHTML = features.map(function(f) {
    return '<li><svg class="feature-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>' + f + '</li>';
  }).join('');

  var benefitsHTML = benefits.map(function(b) {
    return '<div class="about-card"><h3>' + b.title + '</h3><p>' + b.desc + '</p></div>';
  }).join('');

  container.innerHTML =
    '<div class="about-hero">' +
      '<h1 class="page-title">Tentang IT Forms Collection</h1>' +
      '<p class="page-desc" style="margin:8px auto 0;max-width:640px">Solusi digital komprehensif untuk mengelola semua formulir departemen IT dan IS</p>' +
    '</div>' +
    '<section style="margin-bottom:64px">' +
      '<h2 style="font-size:28px;font-weight:700;margin-bottom:16px">Yang Kami Tawarkan</h2>' +
      '<p style="color:var(--muted-fg);margin-bottom:24px;max-width:680px;line-height:1.7">IT Forms Collection menyediakan platform terpusat untuk semua kebutuhan IT dan Sistem Informasi Anda. Dari permintaan akses hingga laporan operasional, kami menyediakan 14 formulir yang dirancang dengan cermat untuk mempermudah proses Anda.</p>' +
      '<ul class="feature-list">' + featuresHTML + '</ul>' +
    '</section>' +
    '<section style="margin-bottom:48px">' +
      '<h2 style="font-size:28px;font-weight:700;margin-bottom:24px;text-align:center">Key Benefits</h2>' +
      '<div class="about-grid">' + benefitsHTML + '</div>' +
    '</section>' +
    '<div class="about-stats-bar">' +
      '<h2 style="font-size:28px;font-weight:700;margin-bottom:32px;text-align:center">By The Numbers</h2>' +
      '<div class="about-stats-grid">' +
        '<div><div class="about-stat-number">14</div><div class="about-stat-label">Total Forms</div></div>' +
        '<div><div class="about-stat-number">7</div><div class="about-stat-label">Categories</div></div>' +
        '<div><div class="about-stat-number">70+</div><div class="about-stat-label">Form Fields</div></div>' +
        '<div><div class="about-stat-number">&infin;</div><div class="about-stat-label">Uptime</div></div>' +
      '</div>' +
    '</div>' +
    '<div class="about-cta">' +
      '<h2>Get Started Today</h2>' +
      '<p>Start using our form collection to streamline your IT operations and improve efficiency across your organization.</p>' +
      '<div class="about-cta-btns">' +
        '<button class="btn btn-primary btn-lg" onclick="navigate(\'\')">Browse All Forms</button>' +
        '<button class="btn btn-outline btn-lg">Contact IT Support</button>' +
      '</div>' +
    '</div>';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  handleRoute();

  var searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', renderSearchResults);
  }
});
