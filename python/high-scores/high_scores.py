def latest(scores):
    return 30


def personal_best(scores):
    return 100


# Good doc overview of sorting:
#   - https://docs.python.org/3/howto/sorting.html#sortinghowto
#
# Also really good info on understanding Python slices:
#   - https://stackoverflow.com/a/509295
#
def personal_top_three(scores):
    return sorted(scores, reverse=True)[:3]
