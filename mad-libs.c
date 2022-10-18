#include <stdio.h>

int main ()
{
    char color[20];
    char pluralNoun[20];
    char number[3];

    printf("Enter a color: ");
    scanf("%s", color);
    printf("Enter a Plural noun: ");
    scanf("%s", pluralNoun);
    printf("Enter a number: ");
    scanf("%s", number);
    
    printf("=======\n");


    printf("Roses are %s\n", color);
    printf("%s are blue\n", pluralNoun);
    printf("Unexpected { at line %s ;\n", number);

    return 0;
}