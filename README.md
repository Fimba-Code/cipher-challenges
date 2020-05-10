# cipher-challenges 🔐

### Introduction

In this work it is intended that the devs work with some very simple encryption algorithms.
Encryption is the process of transforming information using an algorithm (called a cipher) in order to
make it impossible for everyone to read except those who know how to decrypt, generally referred to
as the key. The result of this process is encrypted information, also called ciphertext. The messages to be encrypted will have a maximum of 166 characters, the number of characters in a tweet.

> If you are using `C`. Remember that C strings always have an invisible ending character, that is `\0`.

#### Challenge #1 - Substitution cipher<a name="subst"></a>

A substitution cipher is an algorithm that allows encryption by replacing a given character with another.
The way to match one character of the alphabet to another can be set by shifting the alphabet to the right.
For example, a replacement figure * 5 * has the following correspondence:

- `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ` - Alphabet 
- `56789ABCDEFGHIJKLMNOPQRSTUVWXYZ01234` - Cipher Alphabet

- `CADA MALLOC PRECISA DE UM FREE` - Original text
- `HFIF RFQQTH UWJHNXF IJ ZR KWJJ` - Encrypted text

In this simplified version, only the characters `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ` are encrypted. 
In this way, the text must be converted to capital letters and all characters that do not belong to 
the group of encrypted characters must remain unchanged - as is the case with the spaces in the previous example.
If the user specifies a positive number, the shift is made to the right (as in the example). 
If the number is negative, the shift is made to the left.

> The user can enter the text using uppercase or lowercase letters, but the result must always be presented in uppercase.

The parameter `n` entered by the user must be in the range [-35; 35]. 
If the number is out of range, the program should print the following error message: `Error: out of bound` and should wait
for a new user input.

<hr/>

#### Challenge #2 - Transposition cipher <a name="transp"></a>

Unlike the substitution cipher, in a transposition cipher the letters in the message remain the same as in the original message. However, these letters are shown in a different order.

A simple transposition cipher can be done using a matrix. The text is laid out on the matrix form. This matrix is transposed and the ciphertext is extracted from that matrix.

Example:

Original text:

```
"Sou um guardador de rebanhos."
```

Text arranged in a matrix form in a matrix with 4 columns:

```
+---+---+---+---+
| S | o | u |   |
+---+---+---+---+
| u | m |   | g |
+---+---+---+---+
| u | a | r | d |
+---+---+---+---+
| a | d | o | r |
+---+---+---+---+
|   | d | e |   |
+---+---+---+---+
| r | e | b | a |
+---+---+---+---+
| n | h | o | s |
+---+---+---+---+
| . |   |   |   |
+---+---+---+---+
```

Transposed matrix

```
+---+---+---+---+---+---+---+---+
| S | u | u | a |   | r | n | . |
+---+---+---+---+---+---+---+---+
| o | m | a | d | d | e | h |   |
+---+---+---+---+---+---+---+---+
| u |   | r | o | e | b | o |   |
+---+---+---+---+---+---+---+---+
|   | g | d | r |   | a | s |   |
+---+---+---+---+---+---+---+---+
```

Cipher text:
```"Suua rn.omaddeh u roebo  gdr as "```

> The parameter `n` entered by the user must be in the range [2; 50]. If the number is out of range, the program should print the following error message: `Error: out of bound` and should wait for a new user input.

<hr/>

Let's code 🚀
> Please feel free to use your prefered programming language
