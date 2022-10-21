from operator import mul


def insert_items(lst, entry, elem):
    """Inserts elem into lst after each occurence of entry and then returns lst.
    
    >>> test_lst = [1, 5, 8, 5, 2, 3]
    >>> new_lst = insert_items(test_lst, 5, 7)
    >>> new_lst
    [1, 5, 7, 8, 5, 7, 2, 3]
    >>> large_lst = [1, 4, 8]
    >>> large_lst2 = insert_items(large_lst, 4, 4)
    >>> large_lst2
    [1, 4, 4, 8]
    >>> large_lst3 = insert_items(large_lst2, 4, 6)
    >>> large_lst3
    [1, 4, 6, 4, 6, 8]
    >>> large_lst3 is large_lst
    True
    """
    "*** YOUR CODE HERE ***"
    dic = 0
    tmplist = list(zip(lst, range(len(lst))))
    for i, j in tmplist:
        if i == entry:
            lst.insert(j+1+dic, elem)
            dic += 1
    return lst


def naturals():
    """A generator function that yields the infinite sequence of natural
    numbers, starting at 1.

    >>> m = naturals()
    >>> type(m)
    <class 'generator'>
    >>> [next(m) for _ in range(10)]
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    """
    i = 1
    while True:
        yield i
        i += 1


def scale(it, multiplier):
    """Yield elements of the iterable it multiplied by a number multiplier.

    >>> m = scale([1, 5, 2], 5)
    >>> type(m)
    <class 'generator'>
    >>> list(m)
    [5, 25, 10]

    >>> m = scale(naturals(), 2)
    >>> [next(m) for _ in range(5)]
    [2, 4, 6, 8, 10]
    """
    "*** YOUR CODE HERE ***"
    yield from iter(x * multiplier for x in it)

def hailstone(n):
    """Yields the elements of the hailstone sequence starting at n.
    
    >>> for num in hailstone(10):
    ...     print(num)
    ...
    10
    5
    16
    8
    4
    2
    1
    """
    "*** YOUR CODE HERE ***"
    tmp = n
    # while True: 
    #     yield tmp
    #     if tmp == 1:
    #         break
    #     elif tmp % 2 == 0:
    #         tmp = tmp // 2
    #     else:
    #         tmp = tmp * 3 + 1
    # recursion ver
    yield tmp
    if tmp != 1:
        if tmp % 2 == 0:
            tmp = tmp // 2
        else:
            tmp = tmp * 3 + 1
        # yield from hailstone(tmp)
        for item in hailstone(tmp):
            yield item
