/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji
function sortArray() {

    //deklaracja tablicy i przypisanie wartości
    var points = [41, 3, 6, 1, 114, 54, 64];

    //użycie metody sortującej tablicę,
    //jako parametr przekazana funkcja anonimowa
    points.sort(function(a, b){
        //w zależności od tego jaki znak zwroci funkcja anonimowa
        //tak zostanie posortowana tablica (+ liczby rosnąco, - liczby malejąco)
        return a-b;
    });

    //funkcja zwraca tablicę
    return points;
}

//wywołanie funkcji
console.log(sortArray());
