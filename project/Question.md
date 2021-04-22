<h1> Week10-Day03 </h1>

<li> List,Tuple,Dict data növləri arasındakı oxşar və fərqli cəhətlər nələrdir? </li>

Üçü də Pythonun data stukturudur.

#1 Bu 3 data struktur arasında ilk gözə görünən fərq onların sintaksis fərqidir.

<li> List: [] mötərizələr içində </li>
<li> Tuple: () mötərizələr içində </li>
<li> Dict: {} mötərizələr içində </li>

tuturlar məlumatları.

#2 Verilən məlumatların dəyişdirilməsi.

<h6> List bizə məlumatların dəyişdirilməsinə icazə verir </h6>

my_list = ["Subhan", "Ahmedov", "25"] 

my_list[2] = "27"

print(my_list) ===> ['Subhan', 'Ahmedov', '27']

<h6> Tuple məlumatların dəyişdirilməsinə, silinməsində və əlavə edilməsində icazə vermir </h6>

<h6> Dict məlumatların dəyişdirilməsinə icazə vermir </h6>

#3 Hər birinə daxil edilən məlumatın sayısına görə data tipinin təyin olunması.

<h6> List'ə bir və birdən çox məlumat daxil edildiyi halda data tipi yenə List olaraq qalacaq </h6>

a = ["Subhan"]
b = ["Subhan", "Ahmedov"]

print(type(a)) ===> class 'list'
print(type(b)) ===> class 'list'


<h6> Tuple'a çox məlumat əlavə edilincə Tuple, bir məlumat əlavə edilincə isə data tipi 'int' olacaq </h6>

a = (1, 2, 3)
b = (1)

print(type(a)) ===> class 'tuple'
print(type(b)) ===> class 'int'

Not: Verilmiş bir ədəd məlumatdan sonra vergül qoyulsa bu zaman data tipi Tuple olacaqdır.

c = (1,)

print(type(c)) ===> class 'tuple'

<h6> Dict'a çox məlumat əlavə edilincə Tuple, bir məlumat əlavə edilincə isə data tipi 'int' olacaq </h6>