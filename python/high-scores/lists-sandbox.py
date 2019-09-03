# # Notes
#
# - https://docs.python.org/3/tutorial/datastructures.html
#
# Lists can be used as a stack, where append and pop are used to work
# with data in a last-in-first-out fashion.
#
# For performance reasons, if you are wanting to implement a queue
# (first-in-first-out), then you are probably wanting to take a look at
# `collections.deque`

# ## List Comprehension
#
# The following are equivelant. The last one being a list complrehension.
# From the above article:
#
# > A list comprehension consists of brackets containing an expression
# > followed by a for clause, then zero or more for or if clauses.

squares = []
for x in range(10):
    squares.append(x**2)
print(str(squares))
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

squares = list(map(lambda x: x**2, range(10)))
print(str(squares))
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

squares = [x**2 for x in range(10)]
print(str(squares))
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# We can also use list comprehension for tuples
combined_list = [(x, y) for x in [1, 2, 3] for y in [3, 1, 4] if x != y]
print(str(combined_list))
# [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
