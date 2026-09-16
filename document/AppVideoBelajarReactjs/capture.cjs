const { chromium } = require('C:/Users/ASUS/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const { courses } = await import('../../src/data/courses.js');
  const { courseDetails } = await import('../../src/data/courseDetails.js');
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, ignoreHTTPSErrors: true });
    const cache = new Map();
    await context.route(/https:\/\/(images\.unsplash\.com|api\.dicebear\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)\//, async (route) => {
      const url = route.request().url();
      try {
        if (!cache.has(url)) {
          const response = await context.request.get(url, { timeout: 30000 });
          if (!response.ok()) throw new Error(`${response.status()} ${url}`);
          cache.set(url, { body: await response.body(), contentType: response.headers()['content-type'] });
        }
        await route.fulfill(cache.get(url));
      } catch (error) { console.log('ASSET:', error.message); await route.abort(); }
    });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
    const name = 'Dicky Adem';
    const orders = courses.slice(0, 3).map((course, index) => ({ id: `VB-2026-00${index + 1}`, slug: course.slug, title: course.title, category: course.category, image: course.image, price: course.priceAmount, total: course.priceAmount + 7000, method: 'bca', status: index === 2 ? 'Belum Bayar' : 'Berhasil', date: '2026-09-16T03:00:00Z' }));
    await page.evaluate(({name, orders, courses, courseDetails}) => {
      localStorage.setItem('videobelajar-user', JSON.stringify({ name, email: 'dicky@example.com', phone: '81234567890', isLoggedIn: true, orders }));
      courses.slice(0, 2).forEach((course, index) => {
        const lessons = courseDetails[course.slug].modules.flatMap((module) => module.lessons.map((lesson) => lesson.title));
        const done = index === 0 ? ['pretest', ...lessons, 'summary', 'quiz', 'exam'] : ['pretest', ...lessons.slice(0, 2)];
        localStorage.setItem(`videobelajar-progress:${name}:${course.slug}`, JSON.stringify(done));
      });
    }, { name, orders, courses, courseDetails });
    await page.reload({ waitUntil: 'domcontentloaded' });
    const report = [];
    async function shot(file, route, mobile = false) {
      await page.setViewportSize(mobile ? { width: 414, height: 896 } : { width: 1440, height: 1000 });
      await page.goto('http://127.0.0.1:5173/#' + route, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1000);
      await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map((img) => img.complete ? Promise.resolve() : new Promise((resolve) => { img.onload = resolve; img.onerror = resolve; }))); });
      await page.screenshot({ path: path.join(__dirname, file + '.png'), fullPage: true });
      const broken = await page.evaluate(() => [...document.images].filter((img) => !img.naturalWidth).map((img) => img.src));
      report.push({file, broken});
      console.log(file, broken.length ? `BROKEN ${broken.length}` : 'OK');
    }
    await shot('01-desktop-beranda', '/');
    await shot('02-desktop-katalog', '/category');
    await shot('03-desktop-detail-kelas', '/course/big-4-auditor-financial-analyst');
    await shot('04-desktop-metode-pembayaran', '/course/design-thinking-praktis/payment');
    await shot('05-desktop-pesanan', '/orders');
    await shot('06-desktop-kelas-saya', '/classes');
    await shot('07-desktop-belajar', '/learn/strategi-marketing-berbasis-data');
    await shot('08-desktop-sertifikat', '/course/big-4-auditor-financial-analyst/certificate');
    await shot('09-mobile-beranda', '/', true);
    await shot('10-mobile-katalog', '/category', true);
    await shot('11-mobile-belajar', '/learn/strategi-marketing-berbasis-data', true);
    await shot('12-mobile-pesanan', '/orders', true);
    fs.writeFileSync(path.join(__dirname, 'capture-report.json'), JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch((error) => { console.error(error); process.exit(1); });
