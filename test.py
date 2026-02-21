import math

def calc(a, n):
    return 30*(math.radians(10)-math.radians(a))/n*math.tan(math.radians(33))


# print((math.radians(4)+math.radians(5)+math.radians(5))/3)
# print(calc((4+5+5)/3, 10))
# a1 = calc(4,10)
# a2 = calc(5, 10)
# a3 = calc(5, 10)
# k1 = (a1+a2+a3)/3
# print(k1)
# print(30*0.09/80*math.tan(math.radians(33)))

a1 = calc(4,10)
a2 = calc(5, 10)
a3 = calc(5, 10)
k1 = (a1+a2+a3)/3

a1 = calc(7,8)
a2 = calc(6, 8)
a3 = calc(6, 8)
k2 = (a1+a2+a3)/3

a1 = calc(10,5)
a2 = calc(9, 5)
a3 = calc(9, 5)
k3 = (a1+a2+a3)/3
k_a = (k1+k2)/2
k_da = (math.fabs(k1-k_a) + math.fabs(k2-k_a))/2
print(k1)
print(k2)
print(k1-k_a)
print(k2-k_a)
# print(k3-k_a)
print(f"{k_a} ± {k_da}")