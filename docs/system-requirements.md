# System Requirements

## Functional Requirements

Sistem:

1. Transaction və login event-lərini qəbul etməlidir.
2. Cihaz, IP və location məlumatlarını saxlamalıdır.
3. Aktiv risk qaydalarını incoming event-lərə tətbiq etməlidir.
4. Müəyyən edilən risklər əsasında risk score hesablamalıdır.
5. Yüksək riskli fəaliyyət üçün alert yaratmalıdır.
6. Alert-in statusunun dəyişdirilməsinə imkan verməlidir.
7. Alert əsasında fraud case yaradılmasını dəstəkləməlidir.
8. Fraud analyst qeydlərini saxlamalıdır.
9. Müştərinin əvvəlki transaction və login fəaliyyətlərini göstərməlidir.
10. Eyni cihazla əlaqəli fərqli hesabları tapmağa imkan verməlidir.
11. Əsas dəyişiklikləri audit log-da saxlamalıdır.
12. Təkrar göndərilən event-in duplicate məlumat yaratmasının qarşısını almalıdır.
13. Fraud və risk məlumatları üzrə hesabatlar hazırlamalıdır.

## Non-Functional Requirements

1. Sistem artan event həcminə uyğun genişlənə bilməlidir.
2. Tez-tez istifadə olunan sorğular uyğun index-lərlə optimallaşdırılmalıdır.
3. Database yalnız icazəsi olan istifadəçilər üçün əlçatan olmalıdır.
4. Vacib field-lər schema validation ilə yoxlanmalıdır.
5. Əsas əməliyyatlar və dəyişikliklər izlənilə bilməlidir.
6. Backup və məlumatların bərpası üçün plan hazırlanmalıdır.
7. Password və connection məlumatları source code və GitHub repository-də saxlanılmamalıdır.
8. Database və application xətaları log-larda qeyd olunmalıdır.