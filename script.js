const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  const status = document.querySelector('#form-status');
  button.disabled = true;
  button.textContent = 'Gönderiliyor…';
  status.textContent = '';
  try {
    const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('submission_failed');
    status.textContent = 'Mesajın bize ulaştı. Teşekkür ederiz!';
    form.reset();
  } catch {
    status.textContent = 'Mesaj gönderilemedi. Lütfen tekrar dene veya anilavcidev@gmail.com adresine yaz.';
  } finally {
    button.disabled = false;
    button.textContent = 'Mesajı gönder';
  }
});
