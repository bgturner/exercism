def is_isogram(string):
    string = string.lower()
    allowed_chars = [" ", "-"]
    existing_chars = []
    for c in string:
        if c in allowed_chars:
            continue
        if c in existing_chars:
            return False
        else:
            existing_chars.append(c)
    return True
