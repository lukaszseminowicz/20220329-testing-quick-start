# Make this code testable.

> Przed tobą 2 logiki aplikacji.  
> Mają one problem: nie są testowalne. Czas to zmienić i wyodbrębić ich zalezności...

## Przykład `211`-testability-problem:

1. Chcesz przetestować działanie `calculateWeather`
2. Przygotuj odpowiedni plik z testami
3. Dodaj odpowiednie bloki i przypadki testowe

Zauważysz problem związane z wewnętrzną zależnością:

```javascript
const forecast = weatherInfo.getForecast(day);
```

Podejmij decyzję i skorzystaj z jednej z 2 dróg:

#### WAY-1 Mock implementacji dla modułu `weather-info.js`:

- zamockuj implementację i rozpisując przypadki testowe
- uwzględnij odpowiednie testy dla sprawdzenia i pokrycia całości logiki
- znajdź błąd w logice `calculateWeather` i napraw go

#### WAY-2 Zmiana implementacji `calculateWeather` na testowalną:

- wyodrębnij zależność dla `forecast` aby dało się testować `calculateWeather`
- uwzględnij odpowiednie testy dla sprawdzenia i pokrycia całości logiki
- znajdź błąd w logice `calculateWeather` i napraw go

---

## Przykład `212`-monolith-app:

1. Podziel aplikację na osobne moduły tak, aby dało się je testować

2. Głównie przetestuj zachowanie logiki `allCountries` pobierania kolejnego i poprzedniego kraju.

3. Oddziel rysowanie `DOM` od warstwy logicznej aplikacji

4. Napisz odpowiednie testy, tak aby upewnić się, że cały CORE programu — czyli "przechodzenie", kraj po kraju, z wyświetlaniem odpowiedniego _official name_ - działa poprawnie.

W tym zadaniu — możesz, a w niektórych momentach — musisz dołożyć coś od siebie, zmieniając dostęp do logiki.

Twoje główne zadanie to doprowadzenie kodu do _testowalnej_ postaci
