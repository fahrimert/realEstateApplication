#  Emlak Şirketi Web Sitesi

Bu proje, özellikle yerel bir şehir için geliştirilmiş bir emlak şirketi web sitesidir. Örnek olarak Ankara için yapılmıştır, ancak herhangi bir şehir için özelleştirilebilir. Site, admin ve danışman yönetimi, ilan yönetimi ve müşteri tarafında ilan arama gibi özellikler sunmaktadır.

## Özellikler

### Admin Paneli
- **Kullanıcı Yönetimi**:
  - Admin ve danışman olmak üzere iki farklı kullanıcı türü bulunmaktadır.
  - Admin, danışmanları ekleyebilir, silebilir ve görüntüleyebilir.
  - Admin ve danışmanlar profil bilgilerini (fotoğraf, isim, tanıtım bilgileri) güncelleyebilir.
- **İlan Yönetimi**:
  - İlanlar eklenebilir, düzenlenebilir ve silinebilir.
  - İlanlara fotoğraflar eklenebilir (Cloudinary entegrasyonu ile).
  - İlanlara **ilan tipi** (satılık, kiralık vb.) ve **ilan türü** (villa, bahçeli vb.) atanabilir.
  - İlanlara ek özellikler eklenebilir (ilçe, mahalle, metrekare vb.).
- **Grafik Gösterimi**:
  - Aylara göre ilan sayısını gösteren grafik.
  - Danışmanların ilan sayılarını ilan tiplerine göre gösteren grafik.
- **Site Yönetimi**:
  - Fotoğraf galerisine resimler ekleyebilir.
  - İletişim sayfasındaki bilgileri güncelleyebilir.
  - Ana sayfadaki logoları değiştirebilir.

### Müşteri Tarafı (Client)
- **Ana Sayfa**:
  - Ana vitrin ilanları, acil vitrin ilanları ve fırsat vitrini ilanları.
  - Ana sayfada arama butonu.
  - Şirketin sloganı ile başlangıç.
- **İlanlar Sayfası**:
  - İlanlar mahalle ve ilçeye göre filtrelenebilir.
  - İlanlar ilan tipi ve ilan türüne göre filtrelenebilir.
  - Her ilan için özel sayfa bulunur, burada ilan özellikleri, fiyatı, konumu ve danışman bilgileri gösterilir.
- **Danışmanlar Sayfası**:
  - Danışmanlar listelenir.
  - Her danışmanın kendine ait tanıtım sayfası bulunur ve burada danışmana ait ilanlar gösterilir.
- **Hakkımızda Sayfası**:
  - Şirket hakkında bilgiler bulunur (müşteri isteğine göre özelleştirilebilir).
- **Fotoğraf Galerisi**:
  - Admin tarafından eklenen fotoğraflar listelenir.
- **İletişim Sayfası**:
  - Şirketin iletişim bilgileri yer alır.

## Kullanılan Teknolojiler

### Frontend
- **Next.js**: React tabanlı framework.
- **TailwindCSS**: Modern UI tasarımı için.
- **shadcn/ui**: Kullanıcı arayüzü bileşenleri.
- **Zod**: Form doğrulama için.
- **React Hook Form**: Form yönetimi için.
- **Chart.js**: Grafikler için.
- **Embla**: Carouseller için.

### Backend
- **Next.js API Routes**: Sunucu tarafı işlemler için.
- **PostgreSQL**: İlişkisel veri tabanı.
- **Prisma**: ORM olarak veri tabanı yönetimi.
- **Docker**: PostgreSQL için container yönetimi.

### Authentication
- **JWT**: Admin ve danışman girişlerini yönetmek için.
- **Next.js Middleware & Cookies**: Authentication işlemleri için.

### Medya Yönetimi
- **Cloudinary**: Fotoğraf yükleme ve yönetme.

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Proje Deposu**: Bu repoyu klonlayın.
   ```bash
   git clone https://github.com/kullanici/repo-adi.git
   ```

2. **Bağımlılıkları Yükleyin**:
   ```bash
   npm install
   ```

3. **.env Dosyasını Oluşturun**:
   Gerekli ortam değişkenlerini içeren bir `.env` dosyası oluşturun.
   
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/dbname
   CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
   JWT_SECRET=your_jwt_secret
   ```

4. **Docker Containerlarını Çalıştırın**:
   ```bash
   docker-compose up -d
   ```

5. **Prisma ile Veri Tabanını Migrasyon Yapın**:
   ```bash
   npx prisma migrate dev
   ```

6. **Uygulamayı Başlatın**:
   ```bash
   npm run dev
   ```

## Kullanım

1. **Admin Girişi**: Admin paneline giriş yaparak ilan, danışman ve site yönetimi işlemlerini gerçekleştirin.
2. **Danışman Girişi**: İlan ekleyebilir ve düzenleyebilirsiniz.
3. **Müşteri Kullanımı**: İlanları inceleyin, filtreleyin ve danışmanlarla iletişime geçin.

## Katkıda Bulunma

Bu projeye katkıda bulunmak için aşağıdaki adımları takip edebilirsiniz:

1. Fork yapın.
2. Kendi branch'inizi oluşturun: `git checkout -b yeni-ozellik`.
3. Değişikliklerinizi commit edin: `git commit -m 'Yeni özellik eklendi'`.
4. Branch'inizi push edin: `git push origin yeni-ozellik`.
5. Pull request gönderin.

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.
