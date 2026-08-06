# Problem Statement

Bank və fintech sistemlərində hər gün çoxlu transaction və login fəaliyyəti baş verir. Bu fəaliyyətlərin hamısını əməkdaşların əl ilə yoxlaması mümkün deyil.

Bəzi əməliyyatlar normal görünsə də, cihaz, IP ünvanı, location və istifadəçi davranışı nəzərə alındıqda şübhəli ola bilər.

Məsələn:

- Yeni cihazdan böyük məbləğli əməliyyat
- Qısa müddətdə çoxlu transaction
- Fərqli ölkələrdən ardıcıl login
- Çoxlu uğursuz ödəniş cəhdi
- Eyni cihazdan bir neçə hesabın istifadəsi
- Müştərinin əvvəlki davranışından fərqli fəaliyyət

FinCore Sentinel bu məlumatları toplayaraq riskli fəaliyyəti müəyyən etməyə kömək edəcək.

Şübhəli hal aşkar edildikdə alert yaradılacaq. Fraud analyst həmin alert-i araşdıracaq və fəaliyyətin fraud olub-olmadığına qərar verəcək.

Sistemdə edilən əsas dəyişikliklər audit log-da saxlanılacaq. Bununla alert və fraud case-lər üzərində kimin, nə vaxt və hansı dəyişiklik etdiyi izlənilə biləcək.

## İstifadəçilər

### Fraud analyst

Alert-ləri araşdırır, qeyd əlavə edir və nəticə haqqında qərar verir.

### Risk manager

Risk qaydalarını və onların limitlərini idarə edir.

### Auditor

Sistemdə aparılan dəyişiklikləri və istifadəçi fəaliyyətlərini yoxlayır.

### System administrator

Database təhlükəsizliyi, istifadəçi icazələri və backup proseslərini idarə edir.