# Homework Challenge - day 1
                          
## Wprowadzenie testów do nowego projektu.

> Zostaje Ci przydzielony udział w projekcie z formularzem _Sign Up_  
> Szybko zauważasz, że w projekcie brakuje testów...  
> Czas to zmienić !  
> 
> Decyzja: rozpoczynamy testowanie od [src/validators](src/validators) 

----

### Warm up:

- zorientuj się jak działa aplikacja i jak ją uruchomić.
---
_wskazówka_: pamiętaj o podziale swojej pracy na `commit`'y !

### Krok 1:

- [ ] zainstaluj framework [jest](https://www.npmjs.com/package/jest) i wszelkie potrzebne składniki do obsługi projektu opartego o bundler i `esm`

### Krok 2:

- [ ] zrób "sanity test" - potwierdzenie, że testy działają i podstawowy skrypt testujący w `package.json`
- [ ] dopisz skrypty z tzw. _watch mode_ dla testowania

### Krok 3:

- [ ] rozplanuj i zapisz odpowiednie testy dla [src/validators](src/validators) 
- [ ] pod uwagę bierzesz 2 moduły: 
  - [ ] [form-validators.js](src/validators/form-validators.js)
  - [ ] [form-errors.js](src/validators/form-errors.js)

- [ ]  W pierwszej kolejności napisz odpowiednie przypadki testowe i napisz testy pod: `form-validators.js` 
- [ ]  Później to samo wykonaj dla `form-errors.js`

### Krok 4 (BONUS):

- [ ] Wykonaj refactoring funkcjonalności, pod które masz napisane testy.
