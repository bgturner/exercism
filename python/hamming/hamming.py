def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError("Strings must be the same length")
    diffs = i = 0
    while i < len(strand_a):
        if strand_a[i] != strand_b[i]:
            diffs += 1
        i += 1
    return diffs

#
# Some interesting alternatives
#

# https://exercism.io/tracks/python/exercises/hamming/solutions/b430e409a7324af8a37db097f81fd0d0
#
# def distance(strand_a, strand_b):
#     if len(strand_a) != len(strand_b):
#         raise ValueError("strands must be same length!")
#     return sum(map(lambda a, b: a != b, strand_a, strand_b))

# https://exercism.io/tracks/python/exercises/hamming/solutions/341b3bd669024434aed96eeab228f035
# def distance(strand_a: str, strand_b: str):
#     if len(strand_a) != len(strand_b):
#         raise ValueError("Different length")
#     diff_count: int = 0
#     for a, b in zip(strand_a, strand_b):
#         if a != b:
#             diff_count += 1
#     return diff_count
