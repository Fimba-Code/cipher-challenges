#include <stdio.h>
#include <string.h>
#include <ctype.h>

int indexOfElement(char val, char arr[37]) {
  int i;
  int result;
  for (i = 0; i < strlen(arr); i++) {
    if (arr[i] == tolower(val)) {
      return i;
    }
  }
  return -1;
}

void encrypt(char text[], int steps) {
  if (steps < -35 || steps > 35) {
    printf("Error: out of bound");
    return;
  }
  char alfa_numerical[37] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '\0' };
  int i;
  int tam_text = strlen(text);
  const int alfa_num_size = strlen(alfa_numerical);

  for (i = 0; i < tam_text; i++) {
    char letra = text[i];
    int idx = indexOfElement(letra, alfa_numerical);
    if (letra == ' ' || idx < 0) {
      printf("%c", toupper(letra));
    } else {
      if (strchr(text, letra) != NULL) {
        const int step = idx + steps;
        if (step >= 0) {
          printf("%c", alfa_numerical[step]);
        } else {
          const int newStep = alfa_num_size + step;
          printf("%c", alfa_numerical[newStep]);
        }
      } else {
        printf("%c", toupper(letra));
      }
    }
  }

}

int main(void) {
  encrypt("ABC", -3); // will print 789 for ABC input
  return 0;
}