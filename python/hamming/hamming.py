def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError("Strings must be the same length")
    diffs = i = 0
    while i < len(strand_a):
        if strand_a[i] != strand_b[i]:
            diffs += 1
        i += 1
    return diffs
