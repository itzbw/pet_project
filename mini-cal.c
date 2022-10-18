#include<stdio.h>

int main (void)
{
    double num1;
    double num2;
    char operator;

    printf("Enter Number 1:\n");
    scanf("%lf", &num1);

    printf("Enter Operator:\n");
    scanf(" %c", &operator);

    printf("Enter Number 2:\n");
    scanf("%lf", &num2);

    if (operator == '+')
        printf("%lf", num1 + num2);
        else if (operator == '-')
        printf("%lf", num1 - num2);
        else if (operator == '*')
        printf("%lf", num1 * num2);
        else if (operator == '/')
        printf("%lf", num1 / num2);
        else
        printf("invalid operators");

    return (0);
}