console.log(`URBAN EDG3
Python programming notes by Harry
What is Programming ?
Just like we use Hindi or English to Comirunica
with each other, we use a progranming
Language like Python to comulunicate with
the computer Programming is a way to instucd the computer
to perform various tasks
What is Python?
Python is a simple and easy to understand
language whick feels like reading Bimple
english This Pseudo cade nature of bython makeI eosy to leam and undeslandilble l by beginomerfeatures of Py thon
Easy to understand = Less development time
Erce vand open source
High lercd langusge
Portable+ Workes on linux / Wadowrs/Mac.
+ fun to work with
Installation Py thon can be lasily installed from python.org
When you lik on the sownlod button, pythan
can be installed right after you Complerthe Setup
by essecuting the fise for your platform
Just install
it like a game!
lo-a
URBAN
Chapter 1: Modules, Comments 2 pip
Lete write file oue vory fathe pythen propra the below code in it
print (" Hello World") →print is a function (More laker)Execute this filc (.py filc) by fyping pythonn hello·py and you will se Hello World prinited on the Screen
Modules
A module is ra file Containing code wrilten by Somebody else (usually) which can be imporled and used in
Pip
in our programs
Pip is the package manager for python You can use pip to install a module
on your System
Types of modules
pip install flask installs flask madule
There sre two types of madules in Py thon Built in modules Pre inlalled in python 17
22 External modules Need to install using pip.
Some examples of built in modules are os, abc,ek. Some examples of external modules are tensorflow, flask ek.
URBAN
1
計
5
Chapter 1- Practice Set
URBAN EDGE
Write s program to print Twinklk twinkle litte
Stor poem in py than
Use REPL and print the table of 5 using it
Install an enternal module and use it to perform
an aperation of your interest
Write a python program to print the Contents a directory using os modiede. Gearch online for the function which does that.
Label the program written in Problem 4 with Comments.
Chapter 2- Variables and Datatiypes
A variable is the name given to a memory location in a program. for example
a= 30
b = "Harry"
C= 71.22
→ Variables = Cantainer to Store
a value.
→ Keywords = Resereved words in Python Identifiers = class/function /varisle nooe Data Types Primaruily thete are following data types in Python
Floating point numbers
17 Integers
27
37 Strungs
4 Booleans
5 None
个
→
→
→
Py thon is a fantastic langiage that automatically identifies the type of data for us.
a = 71
b= 88.44 Identifies a as classsint>
= Identifies b as class floal >
name = " Harry" → Identifies name as class <stry
Rules for defining a Variable name Also applies to other dentiferr
A variable name can contain alphabets, digels and underscores.
A voriable name can only start with an alphabetand underscore
A Variable name cant start with a digit No while space is allowed to be woed inside
a Variable name.
1z
URBAN
EDGE
Examples of a few vorialle names are= harky, one8, seven, Seven ete.
Operators in Py thon tollawing are Some common operatirs in Python Arithme tic operatoes +- 1 etk.
27 Assignumend operators =, = ek. 3. Comparison operatires → ==, >,2=,4, 1 = ek.
4 Lagical operators =7 and, or, not
typel) function and Typecasting tipe function is used to find the data type of
a guvenuron vansalle in Pythan
a= 31
typela) = Class cint>
b="31"
type (6) =7 dass estr>
A numker Can be conserted into a sting and vice versa (if possible)
There are many functions to convert one data type into another
5tr(31) = "31"
int(" 32") => 32
float (32) = 32.0
o.. and So on
7 Inkeger to Stuing Conversion Sting to nkger Convrersion
7 Inkiger to float Conversion
Here "31" is a sting literal and 31 a nuumeric literal
EDGE
inputl) function This function allows the user to take input from! the Reyboard as a string
a = input (* Enter name.") If a is harry the
uiser entered harry
It is important to note that = If a is "34" user
the output of input is always entered 37
a string ( cven if the numter is entered)
升
2
3
4
5
ク
6
Chapter2- Practice Get.
UR
EDGE
Wite a lython program to add two pumbers
Write a Python progran to find remainder when
a number is idivided by 2
Check the fyfe of the variable assigned using imput () function
use Comparison operators to find out whe ther a givon
Variable a is greater than b or not.
Take a= 34 and b=80
Write a python program to find average of twa numbers entered by the user
Write a python program to cakulate square of
va number entired by the user
1
27
37
Chapter 3-Skings
String is a dats fype in Python
URBAN EDCE
Sting is a segisnce of charactes incloн in quotes
We can primarily, write asting in these thee ways
Ginge quoted strings + a = 'Hary
Double quoted stungs → b= "Harry Triple quoted Strings → c= Haky!
Sking Sicing
A sking in Python can be sliced for getting a
part of the sting
Consider the following "sking
name= "Harry" > length =5 0123 4
(S)()3)2)でり
The inder in a sting starts from 0 4o legth-1) in Pythan. In order to slie a sring, we se te following syntar
st = name [ind stast ind end
first inder ineluded "cast inder is not included
sl fo:3] retwrens "Har" charaders from o to3 sl[1:3] returns "ar"→ charaters from 1 to 3
Negatisre Indices: Negature Indices can also be used as shown in the figure above. -1 corresponds to the (length-1) inded, 2 +o (length -2)
URBAN EDG3
Gliang with skip ralue
IWe slice tan
 provide a skip ralue as sa part of our like this:
Word = "amazing"
word [1:6:2] 'mzn'
Other advanced slicing technigues
word = " amazing"
word [:7] ward [o:7] → 'amajing
word fo: ] word [0: 7] → 'amasirg
Sting functions
Some of the mostly wsed functions to perform operations
on or manipulate stings are:
1= len () funcion → This function returns the length of
the stung
27
len (" Harvry?) returens 5
gkung. endswith ("rry") → This function tells whether
the variable string ends with the sting "roy" or
not. if sting "is "Hary" it retwrns frue
for "rxy" since Harry ends with rry
3, Sting. (ount (c) (ounts the to tal nunber of accurence
of ony character
47 sking. Capitaligel) This funetion capitaliges the furst charaiter of a giren sting
URBAN
6
5. Stering find (word) - This function finds a werl and returns the inder of first occurence of that word in the string!
Stag saplacs/oldwed,rewword)- rewswered)- This The function replaces the with in the entire sking
Escape Sequence Characters Seguence of characters after backslashEsrate Sey characters
Escape sequence character comprises of more than one characters but represents one charaeter when used
within the strings
Examples In, t ck. 즈
ewline Tab single quoke backslash
1
2
3
4
5
Chapter 3 - Practice bet
URBAN EDG3
Write a Python program to display a user cnterel name followed by Good Aftermoon using input i) funetion
Write a program to fill in a letter kemplate givon belaw with name and date
letter = " Dear LINAME.IZ,
You are selected!
<I DATEI>
Write 1a program to sdeted doube spaces in a
String
Replace the double Spaces from Problem 3 with Single spaces.
write a progrom to format the foilbwing leltler wsing
estape seglence charaters
letter = "Dear Harry, ThisPython Course is nice. Tranks!"
EDGE
Chapler 4- Lists and Tuples
Python Lists Dve cantaners to store a set of values of any data type
friends =
List Indexing
['Apple" "Akash" " Rohan", 7, False
booll لا
can store value of Day datatyje
A list can be indeaed just lite va sting
11 = [7,9 "Harry"
11[0] => 7
L1 [1] => 9
1[70] => Error
11[0:2] =7 [7,9] => List slicing
List Methods
Consider the followring list
11 = [ 1,8,7, 2,21,15
17 L1. Sortl): updaty the lit to [1,2,7,8,15,21
27 11 reverse() : upates the list to[1S, 21,2,7,8,1
3= 11. append (8) : adds 8 at the end of the list
4 11. insert (3,8): This will add 8 at 3 inder
URBAN
EDGE
5, 11. pop (2): Will delete element at index 2 and return
its value
62 11. remave (21): Will remove 21 from the list.
Tuples in Python A tuple is an immutable data type in python. Camnot change
a = () Emply tuple
a= (1,) =2 Tuple with only one element needs a Comra
a = ( 1,7,2) =7 Tuple with mare than one clement
Once defined a tuple ekments cant be altered
or manipulated
Tuble me thods
Consider the following tußle a='(1,7,2)
17 a-Count (1): a.Count [1) will return nunber of times 1
occurs in a.
22 a.index (1): a. indea(1) will return the index of first
occurence of 1 in A
Scanned
EDGE
Chapter 5: Dictionary & Sets
Dictionary is a collection of Rey- value pairs
Syntoae: Reys
大
K
Values
a = & " Rey ": "Value"
a [" key"1
" harry": "Code" "marka" : " 100"
" list" : [1,2,91
=> Prints "Value"
a ["lst"] = Prints [1,29]
Properties of a Python Dictionaries It is unordeved
27 It is mutalble
37 It is indexed
47 Camnat Contain dupticate Reys
Dictionary Methodes
Consider the following Aictonary
a= { "name" "Harry"
"from" : "India"
" maxks": [92,98,96]
1= a. ikems(): retuens a list of (Rey, vedlwe) tuples
23 a Reyst): retitens a list containing dictionaruj's keys
3 a.updale&" friend": " San"s) : updates the dictinory with Suppled Rey_ Vade pairs
URBAN
EDGE
4 a get ("mame")? returns the value abe isis retuinedae eg Harry" is rekurned here)
More metrods are available on docs: python.org
Gets in Py thon Sat is a colection of non rejetitive elements
5 = Set ()
5.add (1)
G.add (2)
>No repetition allbued!
or Set={1,2?
If you are a programming beginner without mch Rnowledge of mathematical operations on sets, you cin simply look at sets in python ias idaba tyjes conbairing unique values
Paperties of Sets Sets vare unordered Elementorder doesnt matter
7 Canmt access elements by indes 22 Sets are unindexed.
37 There is no way to change items in sts.
4 Sets Camot Contain duplicate values
Operations on Sets
Consider the following Get :
5= &1,8,2,33
17 Len(s) : Retiins 4, the length of the set
27 5. remve (8) : Usdates theset 5 and removes & from5
URBAN
EDGE
3. 5.pope): Remaves an arbitrary ekment from the sit and returns the "element removed
4. 6. Clear(): Empties the set 5
57 5. Union/E8,113): Returns a new set with all
itkems from both sets.=81,8,2,3,12
62 5. intersection (88,113): Returns a set which contains only
tikems in both sets. 982
R
R2 P2 ANB
Rit R2th3 AUB
Ri +R3 AAВ
Ri = A-B
A ANB B R3 B-A
Id to dt k i tiw
12 wolA id t
A ot an
URBAN EDGE
1
2
3
4
SAA
8 A
A
5
?
6
4
7
8
シ
Chabter 5: Practice Set
Write a program to create a dictianary of Hidi words with Values as theit english translatin.
Provide user with an option to look it up!
Winte va progrom to input eight numbors from the user and display atl the unique nunbers Cona
Can we have A set with 18(int) and "18/5t)
as a values in it ?
What will be the length of following Set 6: 5=Set
S.add (20)
5.add (20.0)
6. add ("20") => length of 5 after these operatione?
5=33
what is the type of 5?
Create on empty dictionary. Allow 4 friends to
enter theix' fovowrite language as 'yalues and use Reys as theis names. Assume that the names Are unique
names of 2 friends are same; what will mes of Bohle
If languages of hwo friends are same: what
will happen to the program in Problen 6?
79
URBAN EDGE
Can you change the values inside a list which is Contained in Set 5
5 = {8,7, 12, "Harry", [I, 213
EDGE
Chapter 6- Conditional Expresiona
Somatimes we want to play pelbis an our phene if the day is Sunday.
Somefimes we order Teccism ontine if the day
is Sunmy!
bareteres we go hiking if owr farents alaw
All these are Aecisions which defends on a Condilion being met
In Python programming foo, we must be able
to execite ind tructions on a condilion (s) being ast
This is what conditionels are for!
If else and elif in Python
If else And elif statements are a multiway deision
taken by our program due to Certain Conditions in our code.
Syntax:
Indenation& if Grondition i)
E brint ("yes")
elf (condition2):
print (" No") else:
Code example:
a22
print ("Maybe"
if(ax9):
ele. print( Ereater")
print (" esser")
=> if londition 1is fue
⇒
7 if Contdion2, is hue
O therwise
URBAN
EDGE
duick Quig : Write a pregram to print yes when
the wige entered by the user is greater than
or egual to 18.
Relafional Operators
Relatesnal oferators are used to evaluate Conditions
inside the if statements. Gome examples of trelational operators are':
= = equals
>ニ → greter than/equal to <=, ek.
Logical operators
In pytton logical operatiors operate on Conditional Statenents Exdmple:
and teme if both operands are frue else false
ot kue if at least one operand is tue else false
not + invents tore to false & false to tue
elif clause
elit in python means felse if] An if statement Car be chained together with a lot of these elif
Statements fallawed by an else statement
if(Conditionl):
# Code
clif (condition 2):
# Code
elif Gondulin3):
olse:
# lade
# Code
= This ladder will stop once a
Condition in an if or elif
is met.
EDGE
Importand notes:
1 There Cam be any nunmter of elif stalements
2. last else is executed only if all the Conditions insile
elifs fail
3
ン
4
Chapter 6-Practice Sct
URBAN
EDGE
1 Writ a program to find greatest of four numbers entered by the user.
2
5
三
6
Write a program to find out whether a student
is pass bro' fail if it regires total 40% and
st least 33), in each subject to pass. Asune
3 Sulyects and take morks as an input from the user
A spam comment is definded as a text containsing
foflowing Reywords:
make a lot of money, buy now, I
now sulycribe this
"click this" Write a propram to deteet these spams.
Write a frogram to find writher a Qien usirname Contains less than 10 characters or not.
Write a program which finde out whuther a given
name is present in a list or not
Write 1a program to calculate the grade of a
student from his marks from the follwing Scheme:
90-100 →Ex
80-90 A
70-80 → B
60-70 → C
50-60 D
<50 F
URBAN
EDGE
王 Write a program to find out whether a
givon post" is talking! aboul + Harsy' on not
Chapter7- Loops in Python
URBAN EDGE
Sometimes we want to repeat a set of stakments in
our program for instance: Print 1 to 1000
Loops make it tasy for a programmer to tell the computer, which set of instuctions to repeat and how!
Types of loape in Python Primarily there are two types of loops in Python
17 while Joof 27 for bop
We will look into these one by one
While loop
The syatad off a while bop looks like this :
While Condition => The blark Reeps exculing until the Condition is true
# Body of the loop
In whule loope, the condition is checked first If
it evaluates to tiue, the Body of the loop is eaecild executed otherue rot
the lop is entired, the process of lonition Check & execution] is Continued until the condition becomes false
Quick Quig: Write a program to print 1 to So
using a while loop
An Example
10
while i <5:
URBAN EDGE
Prints Harry-S times!
print ( "Harry") にし+1
Note: If the condition never becomes false, the
lop Reps getting executed
Quck Quy:
for loop
Wite a program to print the contelof a list wsing while loope
A for loop is uosed to iferate through a sequence brelist, tuple or sting [ikerables]
The byntax of a for loop looks like this:
l= [1, 7,8
for item in l
print (item)
Range function in Python
print 1, 7 and 8
The range funchon in pyton is used to generate
a seguence of numbers.
We Can can also specify the start,stop and skp-sie as followss:
range (stast, Shbp, Sksige) اStep sige is usmally not
with rangels
URBAN EDGE
An Example demonstrating rangel) function
for i in range (0, 7) : print(is
for loop with clse
→ range (7) lan also be used
→ prints o to 6
An optional else wan be used with a for looр if the code is to be executed when the loop exhausts. Example:
l = [ 1,7,8
for item in I
print (ikem)
else
print("Done") This is printed when the loop ertausts!
Outpul: 1
7
8
Done
The break statement
"break is used to come out of the loop when encountured
It inshucts the program to - Exit the loop nos
Example:
for i in range (o,80)
print (i
if i==3:
break
This will print o, 1, 2
and 3
The continue Statement
URBAN
EDGE
'Continue is used too stop the current iteration of the loop and Contnue with the nent oe
It instructs the program to "Skip thus iteratian"
Example: for i in rangel4):
print ("printing")
1==2: = 4
Continue
print ()
if i is 2,the tabanis skipped
pass stakment
pass is a null slakement in python
It instuncts to "Do nothing
Example :
l = [ 1, 7,8]
for item in l
pass Without pass, the programt
Will throw an crror
1
6
2
4
Chapter 7 - Practice Set
URBAN
EDGE
Write a program to print multiplicaion table of a
girven number using fore loop
Wate a program to grel alt the persen name
bi = [" Harry", "Saham", "Sachin", "Rahuel
Allempt problem 1 using while loop:
Write a program to find whether a given number
is prime or not
5 Write a program to find the sum of furst n
natural numbers using while loop
Write a program to calkulate the factorial of
a given Number using for loap
Write a program to pprint the following star pettern
*
** ***** for n=3
Write a program to print the following star battern .
¥
*** for n=3
ID
URBAN EDGE
White a program to print the following star blim**
* for n =3
Write a program to print multiplication table of
n using for loop in reversed order
URBAN
Chaster 8 - Funchons & Rewrsions
EDGE
A function is a group of statements performing
a Specific task
When a program gets bigger in bize and its Complalty grows, it gets diffecull for a programmer to Reep frack on which" piece of lode is doing what!
A function Can be reused by the programmer in Aoiede frogran ay nunle ta
Example and Syrtax of a fupction
The syntar of a funchon looks as follows
def fune1():
print ( Hello")
This functhon can be called any numker of tines. anywhere in the program
Function Call
a
Whenerer we want to call a function, we put the
nane of the funchon followed by parenthess as follows:
fune1) + This is lalled function call
function definition
The part contaiming the eract set of instruchans which
are executed during the function call.
27
URBAN
EDGE
Auick duiy : Wite s progeam to gret a wer
with Good day" using functions
Types of functfons in Python
There sare two fypes of functins in Python:
→ Already present in Python
Built in furctions
User defined functions + Defined by the usce
Examples of built in function includes len),
printt), vangel) ck
The funeIL) function we defined is an example
아
user defined function
funchons with arguments
A function can acaft some values it an work
with. We cam put these valies in the parnthus
A function can ialso return values as shown below:
def gret ( nameto
gr== "Hello "+ name
retwen gr
a= greet
1 a willnow contain Hello Harry
Default Parameter Value he kan have a volue as defanlt argument in a
function
It we specely name ="gManger" in the line, Condung def, this value value is used iten no argunen s passed
URBAN
EDGE
for example:
def greet (rame nam ="stranger"
# func hion body
greet() → Name will be "skange" in function body (defoult) greet L Harty") Name will be "tharry" in funcfion baly(pased)Recursion
Recution is a function which calls itself
It is used to direcly use a mathemalical formula as a function. for exampble
factorial (n) = nx factorial (n-1)
This funetion lan be defined as flluws
def factorial (n) if i==o ou i==1 : +Base (ondition whuch doent call retwen the function any fur ther
else:
return n* tactorial (n-1) → functfion calling itsely
This works as follows:
Factoual (4)
4
Funchon called]
4x Factorial(3)
4x [3*x factorial (2)]
4 x 3 x[2 xfactorial)] 3 X2 ☑ 11] I Furec ion rehuaed]
URBAN
EDGE
The programmer need to be eattemely Careful wtileworking with recursion to ensure that the
junction docsnt Infinitely keep calling itsely
Recursion is sometimes the most direet way to code an alogorithm
URBAN EDGE
Chapter 8 - Practice Set
2 ne o popoay eing fancton to ford preakel 1 Write a
numvers
3
4
5
Wrile a python program using function to coert Celsius to fabrenhit
Howt do you prevent a python print L) funchon to print va neve line at the end
Write a recusive function to calculate the sum ot first n natural numbers.
bython function to print furst n lines of the folbwing
3
* *
** for n=3
*
Write ra python function which conrerts inches to cms
Write a bython function to reemove a given word fram
a list and stup it at the same fime
Wite a ythen fenetion tot Pprint mulhiplecation table of 1 a given
Project 1: Gnake, Waler, Gun Game
URBAN EDGE
We wall have blayed snake, water gun game in our childhood If you haven't, googk the nile of this game and write a Python progtan capalle of planying this fame with the lw
22
Chapter 9- File I/0
URBAN EDGE
The random Acess mumory is volatule and all ite Contents are lost once a program ferminates
In order to persit the dats forevr., We use files
A file is Aata stored in a storage device A Pythonprogram can talk to the filk by reading Conten fro it and wriling content to it
Programmer
Types of files
Comp Program winlten in Pythar
There are 2 types of files:
Tent files (. txt, ic ete)
Write FILE Read
RAM Volatile
HDD = Non Volatile
Binary files (: pg. dot,ek)
Tython has a lot of funchons for riading, uplatingAnd deleting files
Opening a file
Python" has van openic) function fos opening files It Jakes 2 parametere: tre filename and mndle
Open (" this -txt" "r"
Filenane
open is a built- in funchon
mode of opening (read made)
Reading a file in python
URBAN EDGE
f = oben (" this.txt" "") oben the file in t
text = fireadl) Read its Contents
print (text) Print its Contents
f close() + Clase thefile
We son also Specify the number of charscters in
read () function : f.read (2)
Other methads to read the file
I Reads first 2 chorulieWe lon sales use I radeadline) function to read
on fillline cat a
f readlune () → Reads one line from the fhe
Modes of opening a filk
r open for reading
W
→ open for writing
a oben for appending
+ →opеn spen for updating
'rb will opon fer read in binary mode 'ri will bpen for read inin teat mode
Writing files in Python
In brder to writs to a file, we firat open it is write or append mode aftkr which, we use the bython's f·writel) me thad to write to the file!
URBAN EDG3
f = open(" this txt", "W")
I write (" This is nice) (an be called multiple times f. Closec)
With stalement
The best way to open and dose the file automatically is the with Statement
with open (" ths tot")as f
f read )
Dont need to write f clases
as it is dore automatcally
URBA
Chapter 9. Practice Set
1 Wirite a progrom to riad the teat from a guea file 'pocms txt and find out whe ther it Con toines the word twinkle
2113
h
5
و
The gane() function in a program lets a ue blay a game and retuens the scote as an in teger. You need to read a file "Hislore txt which
is either blank or contains the previous Hi-Slore. You need to wrike a program to updale the Hi-sone whenever gamel) breaks the Hi-Score
White a program to generate mulbiblication tables
from 2 to 20 and write it to the dilered files. Place these files in a folder for a 13-
year old.
A file contains a word " Donkey" muliple times. You naed to write a propram which reb rplaces lar this word with ###### by updating the Same file.
Repxat brogram 4 for a list of such woods to be censored.
Wirite a progran to mime wa log file and fint Out whe ther it Contams 'bython"
Write va program to find out the line rumber
Where python is present from Ques &
8
URBAN EDGE
hinte a progsam to make an cpy of a tat fie
Write a progran to fiond out whether n filk is identical & makhes the Conkent of another file
Write a progeam to wipe out the contents of a file wing python
Write a python pregram to rename a file to
" renamed_by pythen.
URBA EDGE
Chapter 10-Obgecl Oniented Pagramming
bolving a broblem by creaning obyechs s one o
most popular approaches in programming Thi
lalled Objed "orienied prograiamting.
This Concept focuses on using reusable code. Implements DRY brimaleClass
A class is sa bleprint for creating objects.
Conburs info to
Creale a valid
Applica tion
Blank
form Filed by an shudent 국 Application
Student
class → object insbantiation ⇒ abed
Contains info to Creale a valid objecl
The syntax of a dass looks like this :
Class Employee:
Object
# mekhods & Variables Clasname is weillen in Pavalle
An Object is van instantiation of a class. When class
is defined, a template (into) is defined. Memory is allocated only affer obgect instantation.
Objects of a sgiren class can invoke the methads available to it wilhout revealing the implemenltation details to the user. → Abstrachion & Encapsulton!
URBAN
Modelling a problom in 00Ps
We idenaly the folbwing in owr problem
Noun → Class Emplayee
Adjechive Altribudes name,age,Salary
Verbo Methods→ getSalargc), inrementl)
Class Attributes
An Attribute that belongs to the class rather than
1a particular object
Example:
Class Employce: Company = "Google" [specificto eoch clans
→ object inslantiation harry = EmployeeL) harly.Company Embloyee.company= "YouTube" + changing lass attribule
Instance Attrubutes
An attribute that belongs to the Instance (object) Assuming the lass from the previous example:
harry name =" Hory" harry- balary = 430 к" Adding instance attubrutes
Note: Instance attrebules take prcference over class atributes
dwring assignoment & rcheival
harry atrubnutes → Is alteubutes present in obyecl ?
@ Is attrubrles present in clans ?
self parameter
URB EDG
silf riefers to the ins tance of tthe class It is ansarsuitly object posed wite A fureton ul
harry get Salary() → here self is harky
L- equixalent to Empbyga get doy iThe function getsalary is defined as:
Class Employee:
Conmpary pany = "Google" def gelSselavry (Self):
Static method
print (" balary is not there")
Sometimes we need a function that docsnt use the Self baraneker we lan define a slatic method like this:
@staticmethod
def greet()
brint [" Hell user")
_ init() Constructor
→ decorator to mark grut
as a static method
init-.l) is a special method which is first run as Sen
as the object is created
- init() methad is also known as constructor
It takes sif argument and can also take furthet arguments
For Example:
Class Embloyee:
def init (self, name): Self.name = name
def get Salary (self)
URBAN EDGE
harry = Employre ("Harrey") Objeet can be instanhaled using constructor like this!
1
2
-
3
노
5
6
Chapter 10 - Practice Set
URBAN EDGE
Create a class programmer for storing infermatone of few programmlas werking at mlcroseft
Write a class calculator capalle of finding square.Cube and squarerast of a runter!
Create a class with a class attribute a ; Greate
an object from it and set a diveclly wting objecl.a =0!! Does this change the class attrubrute?
Add a static method in problem 2 to gret the
user With hello.
Write a class Train which has methods to book
a ticket, get status (noof seats) and get fare
information of trains running under Indiaa Raslways
Can you change the self paramuter inside a class
to "Something else (Say "hary"). Try changing sef
to 'sif or harry and se the effects.
URBAN EDG3
Chapter 11- Inheibnce & more on 00Ps
Inheritance is a way of creating a new class from
an exisirg class
Syntax:
Class Embloyee:
# Code
0.0
→ Base Class
Class Programmer (Employe): Derived or child class
# Code
We can use the methiads and attribude of Employee in Programmer bject Alss! we can overwrite or add new att ributes and
me thods in Progranner class.
Types of Inheritanc
17 Single inheritance
27
3
Multiple inheritance Multilevel inheritance
Single Inheritance Single inheritance occurs when child class inherits only a Single parent class
Base
Derived
Multiple Inheritance Multile inheritance occurs when the child lass imhertsfrom more than one parent dass.
Parent 1 Pacent 2
Child
Multileve Inheritance
When child

a child class becomes a parent for another class
Parent
Child 1
↓
child 2
Suber() method
Super Super

mehad
class

is
in
used the

to access the methads of a derired class
Super(). init( )
Calls Constructor of the base class
Class methods
class
A

class and method
 is a method which is bound to the
@classme not the opijeet of the class. thed decorator is used to create a clars methad
Syntax to create a classmethad:
@Classmethod
def (cls. P.,po) :
00o
@property decorators
Consider the follwing lass
Class Employee
@property
def name (self)
rehuren self enamе
URBAN EDGE
If e = Embloyeel) is an object of class employee,
we (an print (e name) to print the enane ename/ call name() function.
@.getters and @setters
The methad name with eproperty decorator is called getter method
We can defne a functiont@ n+@name.Setter decorator like
below:
@name. Setter
def name (self, Value): Self· ename = Value
Operator ovexlading in Py thon
Operators in python lan be overbaled using dunder methods.
These methods are lalled when a given operator is used on the objects
URBAN EDGE
deeabus in bython con be overbaded using the
following hethods:
p+$2 padd
p,- pz p Sub(4
* pmul(pd
p.l pe + p.. traediv ()
p 1l f → p flordiv (4)
Other dunder/ magic methods in python
Str() used to set what gets disp layed
upon calling Str Lob)
len--() used to set what gets displayed
upon Calling.- Jen 2() oor lenlaby
公
3
4
6
Chapter 11- Pracfice Set
URBAN EDGE
Create a class E2dvector and use it to veeate another Class representing a 3-d vector
Create a class pets from a class Animals and further create class Dog from Pets. Add a
method bark to class Dog
Create a class Employee and add salary and increment properties to it
Write a method Salaryfter Increment me thod with a
@property decorator with a setter which changes the value of increment based on the salary
Write a dlass Comptex to represent comblex numbers, along with overtoaded opexators + and * which adds and mustiplies them
dimension. Write sa

dass yectoer rebrecenting a vector of n Overload the + and * opera tor which
them Calculates the sum and the dot product of
Write sh-.C) methad to print the vector as follows
7 i +8√ +10к
Assune vector of dimension 3 for this problem
URBA
Override thelen- Is methon on Vector of
prabem 5 to display the dimension of the Vector
Project 2 - The Perfecd Guess
URBAN EDGE
tke are ging to write a program that generates a randam
quess it
If the player's guess is higher than the actual nimver, the plogram disflays " Lower rumber please
Similarly if the user's guess is too lout, the
program prints higher number pleacse" Whert the user gueses the correct nunber, the program disblays the nunber of guesses the playeч used to airive at the number
Hint: use the random module
Chapter 12- Advanced Py thon 1
Exception Hondling in Python
URBAN EDGE
There wke many bult-in excephons which are raised in Python when Some thing goes wrong
Exceptions in Python can be handled using a ty Statement The code that handles the exception
is written in the except clause
try
# Code
except Exception as e:
Code which might throw
Exception
print (e)
When the Exception is handed, the code flow contimueswithout program inkerruption.
We can also specify the exceptions to catch like below:
try:#Code
except ZeroDivision Eor
# Code
except Typefmor:
except
# code
# Code → All other exceptions are handled here.
Raising Exceptions WeReyword can

raise custom exceptions using the raise in python
URBAN EDGE
try with else clause
Sometimes we wont to run a picce of lode when try was sucessfil.
try # Some code
except:
# Some Code
else:
#Code This is exccuted only if the try was saccessful
ty with finally Python offers s fnally clause wtich ensures exeastion
of a piece of code "irespective of the exception
try:
# Some code
Cxapt
# Some code
finally
# Some Code + excited regardless of eror!
it --name. =='main in Py thon
--name evaluates to the name of the module in Py thon
from where the program is ran
If the module sbeing run duteclly from the Command the name is set to sting main. Thus this behaviout is used fo check whether the
madule is run duviectly or imported to amother file
Line,
URBAN
EDGE
The global keyword gbbal keyword is used to modily the varialle outide
of the current scepe.
enumerate funcfion in Python
The enumerate function adds counter to an iteralle
and retuins it
for i,item in list1:
print (&s item)
list Comprehensions
Is Prints the items of list 1
with index!
list Comprchension is An elegant way to ceste lists
based on existing liste
list 1 = [ 1,7,12, " 22]
list 2 =[i for ikmin list1 if ikmz8
3
ク
5
Chapter 12- Practice Set
URBAN EDG3
Write a program to open thre files 1.txt,
2.txt and 3 txt. If any of these files are
not present, a message without exiting the prograт must be prinked prormpting the same?
Write a program to print third, fifth rand seventh element from va list using enumerate function
Write a list comprchension to print a list which Contauns the multiplcation table 'of a user entred number.
Write a program to display a/6 where a and b
are inlegers. If 6=o, display Infinite by handling the TeroDivision Evror.
Store the mulbipličaton tables generated in Problem 3
in a file named Tables- txt
Chapter 13- Advanced Py thon 2
Virtual Environment
URBAN EDGE
An environment which is same as the systm
interpictor but is islated from the cther pytan environments on the system
Installation
To use virtual environments, we write
pip install virkualenv → Ins lallthe package
We create a new environment using
Virtualenv myprojectenv censtes a new venv
The next stxp after creating the virtul environmen
is to atuwate it
We can noww use this virtual environment asa
separate python installa tion
pip freeze command pip ferxe rchurns allthe predages intalad in
a given python environment along
4
pip freze>requiteminls tot
The abore command creats a file named regriremnts tht
in the same dicectory containing the outpiel of pip freeze We can edistibrule this file to other users and
they can reereate the same environment using :
pip install-rrequuriments txt
Lambda functions
URBAN EDGE
functions created using an expression using lambda Reyword
Syntax:
lambda arguments: Expresions Can be used as a normal
funetion Example Square = lambda x: X*x
Square(6) returns 36
Sum = lambda a, b, c: atbtC
Sum (1,2, 3) returns 6
bin method (stuings)
Creates a shing from itexable objects
I = [" apple""mango", banane"]
"and,. goin (e)
The above line will returen afle,and, mange, and, bueena.
format method (Stangs) formats the values inside the string into a desired
outpul
template formot (pr, )
arguments
Syntar for format looks uke:
URBAN EDGE
&3 is a good { 3". format ("Harry" "boy") -0
"513 is a good g03. format ("Harry" "top") -@
Output for ①
Harry is a good boy
Outrut for
boy is a good Harry
Mab, Filker & Reduce
Mab applies a function to all the items in an
input list
Syntau: Lan be lambda funchon
map(function, inpul iet)
filte creates a list of items for which the funetion
returns twe.
list (filker (function))Can be a lambda func tion
Reduce abblies a rolling computation to seguential pait of elements
from functols import reduce
val = reduce (function, list!) Lcan be a lambda function
If the function Computes swn of twb nunters and the
URBAN EDGE
list is [ 1, 2,3, 4]
1 2 3 4
3 3 4
6 4
10
=7 Sequntial Computation
6
2
3
4
5
1
Chapter 13- Practice Set
URBAN EDGE
Create two virtual environments, install few pockages
in the first one. How do you Ueeate a simike
environment in the second one ?
Wrik a program to input name, marks and
phone number of a shudent and format it wsing
the format function like below
I"The name of the student is Harry, his marks are72
and phone number is 99999888
A list Contans the multiplication table of 7. Write
a program to convert it to a ventical stuing
of Same nunterst)7
Write o program to filter a list of numbers whick
are dinsiblk by 5
Write a pregramm to find the maximun of the
numbers in a list wsing the redce function
Rum pip fege for the System inkapretor. Take
the Contents and veeate va Similar Virtualen
Explore the Flask module vand create a web server
wing Flask & Py thon
Project 3- Student Library
URBAN
EDGE
Inmblement a Student library System using DoPs whire list
 Students lan borrow a book from the of books
Create ia separate Library and Student dass. Youe program must be menu driven You are free to choose me thads thad and attributer of your chaice to implement this funetionality`)