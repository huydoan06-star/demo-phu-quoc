/* ===== CẤU HÌNH — đổi thông tin liên hệ / món tại đây ===== */
const CONFIG = {
  shopName: 'Huy Demo',
  zalo: 'https://zalo.me/0337031198',
  phone: 'tel:0337031198',
  phoneText: '0337 031 198',
  telegram: 'https://t.me/DHUYHEHE', // demo — thay bằng bot của tiệm
  menu: [
    { name: 'Ghẹ hấp sả', note: 'Ghẹ Hàm Ninh, chấm muối tiêu chanh', price: 180000, unit: '/ con', img: 'p-ghe' },
    { name: 'Mực lá nướng muối ớt', note: 'Mực câu đêm, nướng nguyên con', price: 220000, unit: '/ phần', img: 'p-muc' },
    { name: 'Sò điệp nướng mỡ hành', note: 'Sáu con, đậu phộng rang', price: 120000, unit: '/ đĩa', img: 'p-so' },
    { name: 'Hàu sống mù tạt', note: 'Sáu con, chanh + rau thơm', price: 150000, unit: '/ đĩa', img: 'p-hau' },
    { name: 'Tôm hùm bơ tỏi', note: 'Cân tại quầy, nướng bơ tỏi', price: 1450000, unit: '/ kg', img: 'p-tomhum' },
    { name: 'Cá bớp nướng lá chuối', note: 'Ướp nghệ, sả, ớt hiểm', price: 260000, unit: '/ phần', img: 'p-ca' },
    { name: 'Mâm hải sản Gió Biển', note: '3–4 người: ghẹ, mực, sò, tôm', price: 890000, unit: '/ mâm', img: 'p-mam' },
    { name: 'Tiêu đỏ Phú Quốc', note: 'Hũ 100g làm quà', price: 95000, unit: '/ hũ', img: 'p-tieu' }
  ]
};

const fmt = n => n.toLocaleString('vi-VN') + 'đ';
const grid = document.getElementById('menuGrid');
grid.innerHTML = CONFIG.menu.map((m, i) => `
  <article class="dish reveal" style="--d:${(i % 2) * 90}ms">
    <div class="dish__img"><img src="assets/${m.img}.webp" alt="${CONFIG.shopName} — ${m.name}" loading="lazy" width="640" height="800"></div>
    <div class="dish__meta"><span class="dish__no">${String(i + 1).padStart(2, '0')}</span>
      <h3>${m.name}</h3><p>${m.note}</p>
      <p class="dish__price">${fmt(m.price)} <small>${m.unit}</small></p></div>
  </article>`).join('');

document.querySelectorAll('[data-link]').forEach(a => { a.href = CONFIG[a.dataset.link]; });
document.querySelectorAll('[data-text]').forEach(a => { a.textContent = CONFIG[a.dataset.text]; });

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');

/* Reveal-on-scroll, có stagger theo nhóm */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i, all) => {
  if (!el.style.getPropertyValue('--d')) {
    const sib = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.setProperty('--d', sib.indexOf(el) * 110 + 'ms');
  }
  reduce ? el.classList.add('in') : io.observe(el);
});
requestAnimationFrame(() => document.body.classList.add('ready'));

/* Parallax nhẹ cho hero + đổi nền thanh tiêu đề */
const media = document.querySelector('[data-parallax]');
const mast = document.querySelector('.mast');
let ticking = false;
addEventListener('scroll', () => {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => {
    const y = scrollY;
    if (!reduce && y < innerHeight * 1.2) media.style.transform = `translate3d(0,${y * 0.28}px,0) scale(1.08)`;
    mast.classList.toggle('solid', y > innerHeight * 0.6);
    ticking = false;
  });
}, { passive: true });
