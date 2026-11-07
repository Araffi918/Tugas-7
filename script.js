// Menu navigasi untuk tampilan layar kecil.
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });
  }

  // Form biodata hanya menampilkan konfirmasi; tidak menyimpan data ke server.
  const biodataForm = document.getElementById('form-biodata');
  if (biodataForm) {
    biodataForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('nama').value.trim();
      const message = document.getElementById('biodata-message');
      message.textContent = 'Terima kasih, ' + name + '! Formulir berhasil diperiksa. Data ini belum disimpan ke server.';
      biodataForm.reset();
    });
  }
}
