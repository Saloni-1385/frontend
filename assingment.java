// 1. Sum of Natural Numbers
public static int sumOfNaturalNumbers(int N) {
    int sum = 0;
    for (int i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}

// 2. Multiplication Table
public static void multiplicationTable(int N) {
    for (int i = 1; i <= 10; i++) {
        System.out.println(N + " x " + i + " = " + (N * i));
    }
}

// 3. Factorial of a Number
public static int factorial(int N) {
    int fact = 1;
    for (int i = 1; i <= N; i++) {
        fact *= i;
    }
    return fact;
}

// 4. Count Digits in a Number
public static int countDigits(int num) {
    int count = 0;
    int temp = num;
    while (temp != 0) {
        temp /= 10;
        count++;
    }
    return count;
}

// 5. Sum of Digits
public static int sumOfDigits(int num) {
    int sum = 0;
    int temp = num;
    while (temp != 0) {
        sum += temp % 10;
        temp /= 10;
    }
    return sum;
}

// 6. Palindrome Number
public static boolean isPalindrome(int num) {
    int reversed = 0, temp = num;
    while (temp != 0) {
        reversed = reversed * 10 + (temp % 10);
        temp /= 10;
    }
    return reversed == num;
}

// 7. Fibonacci Series
public static void fibonacciSeries(int N) {
    int a = 0, b = 1;
    System.out.print(a + " ");
    for (int i = 2; i <= N; i++) {
        System.out.print(b + " ");
        int sum = a + b;
        a = b;
        b = sum;
    }
    System.out.println();
}

// 8. Prime Number Check
public static boolean isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

// 9. Armstrong Number
public static boolean isArmstrong(int num) {
    int sum = 0, temp = num;
    while (temp != 0) {
        int digit = temp % 10;
        sum += digit * digit * digit;
        temp /= 10;
    }
    return sum == num;
}

// 10. Strong Number
public static int factorialDigit(int x) {
    int fact = 1;
    for (int i = 1; i <= x; i++) {
        fact *= i;
    }
    return fact;
}

public static boolean isStrongNumber(int num) {
    int sum = 0, temp = num;
    while (temp != 0) {
        int digit = temp % 10;
        sum += factorialDigit(digit);
        temp /= 10;
    }
    return sum == num;
}

// 11. Pythagorean Triplets
public static void pythagoreanTriplets(int limit) {
    for (int a = 1; a < limit; a++) {
        for (int b = a; b < limit; b++) {
            for (int c = b; c < limit; c++) {
                if (a * a + b * b == c * c) {
                    System.out.println(a + ", " + b + ", " + c);
                }
            }
        }
    }
}

