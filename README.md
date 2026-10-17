# Passalingo landing page

Türkçe, mobil uyumlu statik tanıtım sitesi. Build veya kurulum gerekmez.

- `index.html`: tanıtım, oyun akışı, özellikler, Bahçem, Kelimelerim, Sahne, SSS ve iletişim formu
- `privacy.html`: uygulama ve web sitesi gizlilik politikası
- `terms.html`: kullanım koşulları
- `assets/`: uygulama logosu, ışık arkadaşı (`firefly.jpg`) ve `assets/app/` altında uygulamanın güncel ekran görüntüleri

Yerel önizleme: `python3 -m http.server 4173`

İletişim formu `https://formspree.io/f/xqpaobjk` adresine gönderilir. Formspree panelinde formun etkin ve alıcı adresinin doğrulanmış olduğundan emin olun. Başarılı ve başarısız gönderim durumları desteklenir. JavaScript kapalıysa standart HTML POST çalışır.

GitHub Pages, main dalı ve / (root) klasörü üzerinden etkinleştirildi. Ayarlar: Settings → Pages → Source: Deploy from a branch. Main dalına gönderim siteyi yayımlar. Beklenen adres: https://anlavc.github.io/Passalingo/

App Store yayını henüz doğrulanmadığından indirme bağlantısı eklenmedi. Yayın sonrası ana sayfadaki durum yazısı gerçek mağaza bağlantısıyla değiştirilebilir. Politikalar mevcut uygulama davranışlarına göre hazırlanmıştır; veri akışları değiştiğinde güncellenmelidir.

Ekran görüntüleri (15 Ekim 2026): iOS Simülatörü'nde (iPhone 17 Pro) uygulamanın DEBUG önizleme bayraklarıyla
(`--preview-route`, `--preview-game`, `--preview-result`, `--preview-stage`, `--preview-review`, `--preview-study`,
`--preview-badges`, `--preview-preparation`, `--preview-profile --preview-garden-state`) alındı ve 1300 px yüksekliğe
JPEG olarak küçültüldü. Uygulama ekranları değiştiğinde aynı bayraklarla yeniden alınabilir.
