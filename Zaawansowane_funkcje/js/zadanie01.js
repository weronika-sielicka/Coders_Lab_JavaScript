/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Deklaracja funkcji jeden
function jeden() {

    //deklaracja zmienniej1
    var zmienna1 = 1;

    //deklaracja funkcji dwa
    function dwa() {

        //wypisanie zmiennej1- funckja dwa ją widzi, bo jest zdefiniowana
        //w funkcji, która jest rodzicem dla funkcji dwa
        //funkcja wewnętrzna widzi co jest w funkcji zewnętrznej
        console.log(zmienna1);

        //deklaracja zmiennej 2
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa
    dwa();
 //Zmienna 2 jest lokalna w funkcji 2 i widoczna tylko w tej
 //funcji- poza tą funkcją nie zadziała
 //funkcja zewnętrzna nie widzi co jest w funkcji wewnętrznej
    console.log(zmienna2)
}

//wywołanie funckji jeden
jeden()
