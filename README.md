# Passalingo landing page

Türkçe, mobil uyumlu statik tanıtım sitesi. Build veya kurulum gerekmez.

- `index.html`: tanıtım, özellikler, SSS ve iletişim formu
- `privacy.html`: uygulama ve web sitesi gizlilik politikası
- `terms.html`: kullanım koşulları
- `assets/`: gerçek uygulama logosu, maskotu ve oynanış ekranı

Yerel önizleme: `python3 -m http.server 4173`

İletişim formu `https://formspree.io/f/xqpaobjk` adresine gönderilir. Formspree panelinde formun etkin ve alıcı adresinin doğrulanmış olduğundan emin olun. Başarılı ve başarısız gönderim durumları desteklenir. JavaScript kapalıysa standart HTML POST çalışır.

GitHub Pages, main dalı ve / (root) klasörü üzerinden etkinleştirildi. Ayarlar: Settings → Pages → Source: Deploy from a branch. Main dalına gönderim siteyi yayımlar. Beklenen adres: https://anlavc.github.io/Passalingo/

App Store yayını henüz doğrulanmadığından indirme bağlantısı eklenmedi. Yayın sonrası ana sayfadaki durum yazısı gerçek mağaza bağlantısıyla değiştirilebilir. Politikalar mevcut uygulama davranışlarına göre hazırlanmıştır; veri akışları değiştiğinde güncellenmelidir.

Kameralı oyun görseli: kullanıcı tarafından sağlanan ekran görüntüsü, yerleşik ImageGen ile düzenlendi. İstek: arayüzü ve harf çemberini koruyarak kişiyi doğal görünümlü, kurgusal yetişkin bir kadınla değiştirmek. Web sitesi temsili görsel açıklaması kullanır.

İkinci kameralı görsel: yeni referanstaki kıvırcık koyu saçlı kadın, siyah kazak ve bitkili, sıcak lambalı ev arka planı; gerçek ekran görüntüsündeki oyun yerleşimi, metinler ve kontroller korunarak yerleşik ImageGen ile düzenlendi. Dosya: assets/gameplay-camera-v2.png.
