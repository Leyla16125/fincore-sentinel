# NoSQL Decision

FinCore Sentinel layihəsində əsas database olaraq MongoDB istifadə ediləcək.

## Seçim səbəbi

Sistem transaction, login, cihaz və risk məlumatları ilə işləyəcək. Bu məlumatların strukturu həmişə eyni olmaya bilər.

Məsələn, kart ödənişində merchant məlumatı, bank transferində isə alıcı hesabı ilə bağlı məlumatlar ola bilər. Cihaz və location məlumatları da bir neçə field-dən ibarət olduğu üçün nested document formasında saxlanıla bilər.

Bir transaction eyni anda bir neçə risk siqnalı yarada bilər. Bu məlumatları array formasında saxlamaq MongoDB document modelinə uyğundur.

Layihədə MongoDB-nin aşağıdakı imkanlarından istifadə olunacaq:

- Schema validation
- Index-lər
- Aggregation pipeline
- TTL index
- Change stream
- Transaction
- Replication və sharding anlayışları

## MongoDB-də saxlanacaq məlumatlar

MongoDB əsasən aşağıdakı məlumatları saxlayacaq:

- Transaction event-ləri
- Login və cihaz session-ları
- Risk qaydaları
- Risk siqnalları
- Fraud alert-ləri
- Fraud case-lər
- Audit log-ları

## MongoDB-nin istifadə olunmayacağı hissələr

Bank hesablarının əsas balansı və maliyyə ledger məlumatları bu sistemin məsuliyyətinə daxil deyil.

Belə məlumatlar daha sərt əlaqə və consistency tələb etdiyi üçün PostgreSQL kimi relational database-də saxlanıla bilər.

## Nəticə

MongoDB fraud monitorinqi və event məlumatları üçün istifadə ediləcək. PostgreSQL isə əsas maliyyə məlumatları üçün daha uyğun seçim olaraq qalacaq.