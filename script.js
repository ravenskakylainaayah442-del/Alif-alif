// Menu Toggle untuk tampilan Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tutup menu otomatis saat salah satu tautan diklik di HP
document.querySelectorAll('.nav-link, .cta-header').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Fungsi Pintasan Kartu Layanan ke Form Kontak
function selectService(serviceName) {
    const selectElement = document.getElementById('jenisKebutuhan');
    selectElement.value = serviceName;
    
    // Scroll mulus ke bagian kontak
    document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' });
}

// Penanganan Formulir Konsultasi & Sambungkan Langsung ke WhatsApp
function handleFormSubmit(event) {
    event.preventDefault();

    // Ambil nilai dari input form
    const nama = document.getElementById('nama').value;
    const kontakUser = document.getElementById('kontakUser').value;
    const jenisKebutuhan = document.getElementById('jenisKebutuhan').value;
    const pesan = document.getElementById('pesan').value;

    // Nomor WhatsApp tujuan
    const nomorWhatsApp = "6281389069532";

    // Format pesan WhatsApp
    const teksPesan = `Halo Alifa Tailor, saya ingin berkonsultasi mengenai pesanan jahitan.%0A%0A` +
                      `*Nama:* ${encodeURIComponent(nama)}%0A` +
                      `*Kontak:* ${encodeURIComponent(kontakUser)}%0A` +
                      `*Jenis Layanan:* ${encodeURIComponent(jenisKebutuhan)}%0A` +
                      `*Catatan/Pesan:* ${encodeURIComponent(pesan)}`;

    // Buka aplikasi WhatsApp secara otomatis
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${teksPesan}`;
    window.open(urlWhatsApp, '_blank');

    // Tampilkan ringkasan di halaman web
    document.getElementById('sumNama').textContent = nama;
    document.getElementById('sumKontak').textContent = kontakUser;
    document.getElementById('sumLayanan').textContent = jenisKebutuhan;
    document.getElementById('sumPesan').textContent = pesan;

    const summaryCard = document.getElementById('summaryCard');
    summaryCard.style.display = 'block';
}
