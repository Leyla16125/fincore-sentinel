# Problem Statement

Bank və fintech sistemlərində hər gün çoxlu sayda transaction və login fəaliyyəti baş verir.

Bu fəaliyyətlərin bəziləri şübhəli ola bilər. Bütün əməliyyatları əl ilə yoxlamaq mümkün olmadığı üçün avtomatik risk monitorinq sisteminə ehtiyac var.

Layihə aşağıdakı şübhəli halları müəyyən etməyə çalışacaq:

* Yeni cihazdan böyük məbləğli əməliyyat
* Qısa müddətdə çoxlu transaction
* Müxtəlif ölkələrdən qısa vaxt ərzində login
* Çoxlu uğursuz ödəniş cəhdi
* Eyni cihazdan fərqli hesabların istifadəsi
* Qeyri-adi saatda böyük əməliyyat
* Müştərinin əvvəlki davranışından fərqli fəaliyyət

Sistem transaction, cihaz, IP, location və login məlumatlarını toplayacaq.

Şübhəli fəaliyyət müəyyən ediləndə fraud analyst üçün alert yaradılacaq. Analyst məlumatları yoxlayacaq və fəaliyyətin həqiqi fraud olub-olmadığına qərar verəcək.

Sistemdə edilən əsas dəyişikliklər audit log-da saxlanılacaq. Bununla hansı istifadəçinin hansı dəyişikliyi etdiyi məlum olacaq.

## İstifadəçilər

### Fraud analyst

Şübhəli alert-ləri araşdırır və nəticə haqqında qərar verir.

### Risk manager

Risk qaydalarını yaradır və dəyişir.

### Auditor

Sistemdə edilən dəyişiklikləri və istifadəçi fəaliyyətlərini yoxlayır.

### System administrator

Database təhlükəsizliyi, istifadəçi icazələri və backup ilə məşğul olur.

