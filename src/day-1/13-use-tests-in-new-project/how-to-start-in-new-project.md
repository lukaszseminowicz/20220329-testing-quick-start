# Jak zacząć testować w nowym projekcie ?

1. Nowy projekt to nowy `package.json`.
2. Zaczynamy od komendy `npm init -y` w nowym folderze.
3. Później czas doinstalować swój ulubiony _testing framework_
4. Na przykład `npm install -D jest @types/jest`
5. Flaga `-D` sprawi, że instalacja odbędzie się do `devDependencies`
6. potrzebny nam skrypt do uruchamiania testów w `package.json`

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll"
  }
}
```

7. jeśli chcemy używać składnie `esm` (Ecma Script Modules) warto dodać `"type":"module"`. do `package.json`

```json
{
  "type": "module"
}
```

8. Tworzymy pliki z testami: np. `feature.spec.js` dla odpowiadających plików `.js` z funkcjonalnościami: `feature.js`
9. Jeśli chcemy korzystać z `esm` (Ecma Script Modules) w testach tj. składnia `import` / `export` potrzebujemy jeszcze instalacji paczek:

```
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-jest
```

9. Żeby wszystko działało w głównym katalogu projektu tworzymy plik `.babelrc` z konfiguracją pod `babel`'a:

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

dzięki `@babel/plugin-transform-runtime` będzie nam np. działała składnia `async` / `await`

## Co, jeśli już mamy tzw. _scaffold_ projektu ?

Wystarczy, że rozpoczniemy przygodę z testowaniem od kroku nr.`4`.

Może się również okazać, że _testing framework_ jest już zainstalowany w naszym projekcie. Warto sprawdzić, czy jest już w nim opisany skrypt z nazwą: `"test"`
