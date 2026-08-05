# NoSQL Decision

Bu layihədə MongoDB istifadə etməyə qərar verdim.

## MongoDB-ni niyə seçdim?

Transaction növlərinin məlumatları bir-birindən fərqli ola bilər.

Məsələn, kart ödənişində merchant məlumatı, bank transferində isə alıcının hesab məlumatı ola bilər.

Cihaz və location məlumatları da nested document formasında saxlanıla bilər.

Bir transaction eyni anda bir neçə risk siqnalına sahib ola bilər:

* Yeni cihaz
* Yeni ölkə
* Böyük məbləğ
* Qeyri-adi saat
* Şübhəli IP ünvanı

Bu məlumatları MongoDB-də document və array formasında saxlamaq daha rahatdır.

MongoDB-ni həmçinin aşağıdakı mövzuları öyrənmək üçün istifadə edəcəyəm:

* Document və collection
* Schema validation
* Embedding və referencing
* Index
* Aggregation
* Transaction
* Change stream
* Replication
* Sharding

## MongoDB-də hansı məlumatlar saxlanacaq?

* Transaction event-ləri
* Device session-ları
* Login məlumatları
* IP və location məlumatları
* Risk qaydaları
* Risk siqnalları
* Fraud alert-ləri
* Fraud case-lər
* Audit log-ları

## MongoDB-də hansı məlumatları saxlamazdım?

Bank hesablarının əsas balansını və rəsmi maliyyə ledger məlumatlarını yalnız MongoDB-də saxlamazdım.

Bu məlumatlar üçün PostgreSQL daha uyğun ola bilər. Çünki maliyyə məlumatlarında əlaqələr və məlumat bütövlüyü daha sərt şəkildə qorunmalıdır.

## Nəticə

PostgreSQL əsas maliyyə məlumatlarını idarə edə bilər.

MongoDB isə transaction event-ləri, cihaz fəaliyyəti, risk analizi və fraud alert-ləri üçün istifadə ediləcək.
