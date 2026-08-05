# Data Dictionary

Bu sənəddə FinCore Sentinel layihəsində istifadə olunacaq collection-lar və onların saxlayacağı məlumatlar göstərilib.

## customers

Müştərinin əsas profil və risk məlumatlarını saxlayır.

| Field         | Type     | Required | Açıqlama                                         | Nümunə            |
| ------------- | -------- | -------- | ------------------------------------------------ | ----------------- |
| `_id`         | ObjectId | Bəli     | MongoDB-də document-in unikal ID-sidir           | MongoDB yaradır   |
| `customer_id` | String   | Bəli     | Müştərinin sistemdəki unikal ID-sidir            | `CUS-1001`        |
| `full_name`   | String   | Bəli     | Müştərinin ad və soyadıdır                       | `Leyla Huseynova` |
| `birth_date`  | Date     | Xeyr     | Müştərinin doğum tarixidir                       | `2005-04-15`      |
| `country`     | String   | Xeyr     | Müştərinin qeydiyyatda olduğu ölkədir            | `Azerbaijan`      |
| `risk_level`  | String   | Bəli     | Müştərinin cari risk səviyyəsidir                | `low`             |
| `is_active`   | Boolean  | Bəli     | Müştəri hesabının aktiv olub-olmadığını göstərir | `true`            |
| `created_at`  | Date     | Bəli     | Müştərinin sistemə əlavə olunduğu tarixdir       | `2026-08-05`      |

Müştərinin yaşı ayrıca saxlanılmır. Yaş `birth_date` əsasında hesablanır, çünki yaş hər il dəyişir.

---

## transaction_events

Bankda baş verən maliyyə əməliyyatlarını saxlayır.

| Field            | Type     | Required | Açıqlama                                                 | Nümunə                      |
| ---------------- | -------- | -------- | -------------------------------------------------------- | --------------------------- |
| `_id`            | ObjectId | Bəli     | MongoDB-də document-in unikal ID-sidir                   | MongoDB yaradır             |
| `transaction_id` | String   | Bəli     | Əməliyyatın bank sistemindəki unikal ID-sidir            | `TRX-2026-1001`             |
| `customer_id`    | String   | Bəli     | Əməliyyatı edən müştərinin ID-sidir                      | `CUS-1001`                  |
| `type`           | String   | Bəli     | Əməliyyatın növünü göstərir                              | `bank_transfer`             |
| `amount`         | Decimal  | Bəli     | Əməliyyatın məbləğini saxlayır                           | `250.50`                    |
| `currency`       | String   | Bəli     | Əməliyyatın valyutasını göstərir                         | `AZN`                       |
| `status`         | String   | Bəli     | Əməliyyatın vəziyyətini göstərir                         | `completed`                 |
| `device`         | Object   | Bəli     | Əməliyyatda istifadə olunan cihaz məlumatlarını saxlayır | Android telefon             |
| `location`       | Object   | Xeyr     | Əməliyyatın edildiyi yer haqqında məlumat saxlayır       | Bakı, Azərbaycan            |
| `risk_signals`   | Array    | Bəli     | Risk yoxdursa boş array saxlanılacaq: []    | `new_device`, 
`high_amount` |
| `created_at`     | Date     | Bəli     | Əməliyyatın baş verdiyi tarix və saatdır                 | `2026-08-05 14:30`          |
| `source`         | String   | Bəli     | Əməliyyatın hansı kanaldan gəldiyini göstərir            | `mobile_app`                |

### device daxilindəki məlumatlar

| Field              | Type   | Required | Açıqlama                     | Nümunə               |
| ------------------ | ------ | -------- | ---------------------------- | -------------------- |
| `device_id`        | String | Bəli     | Cihazın unikal ID-sidir      | `DEV-1001`           |
| `model`            | String | Xeyr     | Cihazın modelidir            | `Samsung Galaxy S24` |
| `device_type`      | String | Bəli     | Cihazın növünü göstərir      | `mobile`             |
| `operating_system` | String | Xeyr     | Cihazın əməliyyat sistemidir | `Android 15`         |
| `browser`          | String | Xeyr     | İstifadə olunan browser-dir  | `Chrome`             |

### location daxilindəki məlumatlar

| Field         | Type   | Required | Açıqlama                                      | Nümunə                |
| ------------- | ------ | -------- | --------------------------------------------- | --------------------- |
| `country`     | String | Xeyr     | Əməliyyatın edildiyi ölkədir                  | `Azerbaijan`          |
| `city`        | String | Xeyr     | Əməliyyatın edildiyi şəhərdir                 | `Baku`                |
| `ip_address`  | String | Xeyr     | Əməliyyat zamanı istifadə olunan IP ünvanıdır | `192.168.1.10`        |
| `coordinates` | Object | Xeyr     | Coğrafi koordinatları saxlayır                | longitude və latitude |

### coordinates daxilindəki məlumatlar

| Field       | Type    | Required | Açıqlama                          | Nümunə    |
| ----------- | ------- | -------- | --------------------------------- | --------- |
| `longitude` | Decimal | Xeyr     | Şərq və qərb mövqeyini göstərir   | `49.8671` |
| `latitude`  | Decimal | Xeyr     | Şimal və cənub mövqeyini göstərir | `40.4093` |

---

## device_sessions

Müştərinin login və cihaz session məlumatlarını saxlayır.

| Field              | Type     | Required | Açıqlama                                           | Nümunə             |
| ------------------ | -------- | -------- | -------------------------------------------------- | ------------------ |
| `_id`              | ObjectId | Bəli     | MongoDB-də document-in unikal ID-sidir             | MongoDB yaradır    |
| `session_id`       | String   | Bəli     | Session-un unikal ID-sidir                         | `SES-1001`         |
| `customer_id`      | String   | Bəli     | Müştərinin ID-sidir                                | `CUS-1001`         |
| `device_id`        | String   | Bəli     | İstifadə olunan cihazın ID-sidir                   | `DEV-1001`         |
| `device_type`      | String   | Bəli     | Cihazın növünü göstərir                            | `mobile`           |
| `device_model`     | String   | Xeyr     | Cihazın modelidir                                  | `iPhone 16 Pro`    |
| `operating_system` | String   | Xeyr     | Cihazın əməliyyat sistemidir                       | `iOS`              |
| `browser`          | String   | Xeyr     | İstifadə olunan browser-dir                        | `Safari`           |
| `ip_address`       | String   | Bəli     | Login zamanı istifadə olunan IP ünvanıdır          | `192.168.1.10`     |
| `location`         | Object   | Xeyr     | Login olunan yer haqqında məlumat saxlayır         | Bakı, Azərbaycan   |
| `login_at`         | Date     | Bəli     | Login tarixini və saatını saxlayır                 | `2026-08-05 13:10` |
| `expires_at`       | Date     | Bəli     | Session-un bitmə tarixidir                         | `2026-08-06 13:10` |
| `status`           | String   | Bəli     | Session-un vəziyyətini göstərir                    | `active`           |
| `is_new_device`    | Boolean  | Bəli     | Cihazın müştəri üçün yeni olub-olmadığını göstərir | `true`             |

`location` burada nested document kimi saxlanılır. Onun daxilində `country`, `city` və `coordinates` ola bilər.

---

## risk_rules

Şübhəli fəaliyyətləri müəyyən etmək üçün istifadə olunan risk qaydalarını saxlayır.

| Field         | Type     | Required | Açıqlama                                       | Nümunə                                                |
| ------------- | -------- | -------- | ---------------------------------------------- | ----------------------------------------------------- |
| `_id`         | ObjectId | Bəli     | MongoDB-də document-in unikal ID-sidir         | MongoDB yaradır                                       |
| `rule_code`   | String   | Bəli     | Risk qaydasının unikal kodudur                 | `HIGH_AMOUNT_NEW_DEVICE`                              |
| `rule_name`   | String   | Bəli     | Risk qaydasının adıdır                         | `Yeni cihazdan böyük əməliyyat`                       |
| `description` | String   | Bəli     | Qaydanın nəyi yoxladığını izah edir            | Yeni cihazdan yüksək məbləğli əməliyyatı müəyyən edir |
| `category`    | String   | Bəli     | Qaydanın kateqoriyasıdır                       | `transaction`                                         |
| `risk_score`  | Integer  | Bəli     | Qaydanın ümumi risk balına əlavə etdiyi baldır | `40`                                                  |
| `threshold`   | Decimal  | Xeyr     | Qaydanın istifadə etdiyi limitdir              | `1000.00`                                             |
| `is_active`   | Boolean  | Bəli     | Qaydanın aktiv olub-olmadığını göstərir        | `true`                                                |
| `created_at`  | Date     | Bəli     | Qaydanın yaradılma tarixidir                   | `2026-08-05`                                          |
| `updated_at`  | Date     | Xeyr     | Qaydanın son dəyişdirilmə tarixidir            | `2026-08-06`                                          |

### Nümunə risk qaydaları

#### Yeni cihazdan böyük əməliyyat

Müştəri əvvəllər istifadə etmədiyi cihazdan 1000 AZN-dən böyük əməliyyat etdikdə risk siqnalı yaranır.

#### Qısa müddətdə çoxlu transaction

Müştəri 10 dəqiqə ərzində çox sayda əməliyyat etdikdə risk siqnalı yaranır.

#### Müxtəlif ölkələrdən login

Müştəri qısa vaxt ərzində fərqli ölkələrdən login etdikdə risk siqnalı yaranır.

---

## alerts

Şübhəli fəaliyyət müəyyən edildikdə yaranan alert-ləri saxlayır.

| Field              | Type     | Required | Açıqlama                                          | Nümunə                      |
| ------------------ | -------- | -------- | ------------------------------------------------- | --------------------------- |
| `_id`              | ObjectId | Bəli     | MongoDB-də document-in unikal ID-sidir            | MongoDB yaradır             |
| `alert_id`         | String   | Bəli     | Alert-in sistemdəki unikal ID-sidir               | `ALT-1001`                  |
| `customer_id`      | String   | Bəli     | Alert-in aid olduğu müştərinin ID-sidir           | `CUS-1001`                  |
| `transaction_id`   | String   | Xeyr     | Alert-in aid olduğu transaction ID-sidir          | `TRX-2026-1001`             |
| `risk_score`       | Integer  | Bəli     | Alert üçün hesablanan risk balıdır                | `85`                        |
| `risk_level`       | String   | Bəli     | Risk səviyyəsini göstərir                         | `high`                      |
| `triggered_rules`  | Array    | Bəli     | Alert-i yaradan risk qaydalarını saxlayır         | `NEW_DEVICE`, `HIGH_AMOUNT` |
| `status`           | String   | Bəli     | Alert-in vəziyyətini göstərir                     | `new`                       |
| `assigned_analyst` | String   | Xeyr     | Alert-i araşdıran analyst-in ID-sidir             | `ANL-1001`                  |
| `created_at`       | Date     | Bəli     | Alert-in yaranma tarixidir                        | `2026-08-05 14:31`          |
| `updated_at`       | Date     | Xeyr     | Alert-in son dəyişdirilmə tarixidir               | `2026-08-05 15:00`          |
| `status_history`   | Array    | Bəli     | Alert status dəyişikliklərini saxlayır            | `new`, `under_review`       |
| `notes`            | Array    | Xeyr     | Analyst tərəfindən əlavə olunan qeydləri saxlayır | Araşdırma davam edir        |

### status_history daxilindəki məlumatlar

| Field        | Type   | Required | Açıqlama                                | Nümunə             |
| ------------ | ------ | -------- | --------------------------------------- | ------------------ |
| `status`     | String | Bəli     | Alert-in həmin andakı statusudur        | `under_review`     |
| `changed_by` | String | Bəli     | Status-u dəyişən istifadəçinin ID-sidir | `ANL-1001`         |
| `changed_at` | Date   | Bəli     | Status dəyişikliyinin tarixidir         | `2026-08-05 15:00` |

## Nested və ayrıca collection qərarları

| Məlumat                           | Qərar           | Səbəb                                                                   |
| --------------------------------- | --------------- | ----------------------------------------------------------------------- |
| Transaction location              | Nested document | Location həmin transaction-a aiddir və birlikdə oxunacaq                |
| Transaction cihaz məlumatı        | Nested document | Əməliyyat anındakı cihaz məlumatı transaction-la birlikdə saxlanmalıdır |
| Alert-in triggered rules məlumatı | Array           | Bir alert bir neçə risk qaydası ilə yarana bilər                        |
| Müştərinin bütün transaction-ları | Ayrı collection | Transaction sayı çox böyüyə bilər                                       |
| Alert status history              | Array           | Status dəyişiklikləri həmin alert-ə aiddir                              |
| Risk qaydaları                    | Ayrı collection | Risk qaydaları ayrıca yaradılır və dəyişdirilir                         |

## Data type seçimləri

* Mətn məlumatları üçün `String` istifadə olunur.
* Məbləğ üçün `Decimal` istifadə olunur.
* Risk balı üçün `Integer` istifadə olunur.
* Aktiv və ya passiv vəziyyət üçün `Boolean` istifadə olunur.
* Tarix və saat üçün `Date` istifadə olunur.
* Bir neçə dəyər saxlamaq üçün `Array` istifadə olunur.
* İçində əlavə field-lər olan məlumat üçün `Object` istifadə olunur.
* MongoDB document ID-si üçün `ObjectId` istifadə olunur.
