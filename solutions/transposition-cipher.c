#include <stdio.h>
#include <string.h>
#define MAX 500

int size(char *name)
{
    int i = 0;
    while (name[i] != '\0')
    {
        i++;
    }
    return i;
}

void transpose(char *string, int column, int size)
{

    char cipher[size], aux;
    int c, r, i = 0;

    int row = size % column == 0 ? size / column : size / column + 1;

    for (c = 0; c < column; c++)
    {
        for (r = 0; r < row; r++)
        {
            aux = (string[column * r + c] && string[column * r + c] != '\0') ? string[column * r + c] : ' ';
            if (aux != '\n')
            {
                cipher[i] = aux;
                i++;
            }
        }
    }
    cipher[i] = '\0';
    puts(cipher);
}

int main()
{
    char phrase[MAX];
    int column;

    scanf("%d %[^\n]s", &column, phrase);

    transpose(phrase, column, size(phrase));

    return 0;
}