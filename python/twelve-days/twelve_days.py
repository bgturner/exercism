days = ["first", "second", "third", "fourth", "fifth", "sixth",
        "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"]

potential_gifts = [
    " a Partridge in a Pear Tree.",
    " two Turtle Doves,",
    " three French Hens,",
    " four Calling Birds,",
    " five Gold Rings,",
    " six Geese-a-Laying,",
    " seven Swans-a-Swimming,",
    " eight Maids-a-Milking,",
    " nine Ladies Dancing,",
    " ten Lords-a-Leaping,",
    " eleven Pipers Piping,",
    " twelve Drummers Drumming,",
    ]


def get_line(start_verse, end_verse):
    day = days[end_verse - 1]
    gifts = ''
    while end_verse > 0:
        if len(gifts) > 0 and end_verse == 1:
            gifts += " and"
        end_verse -= 1
        gifts += potential_gifts[end_verse]
    return (
        "On the {} day of Christmas my true love gave to me:{}"
        ).format(day, gifts)


def recite(start_verse, end_verse):
    song = []
    while start_verse <= end_verse:
        song.append(get_line(start_verse, end_verse))
        end_verse -= 1
    return song[::-1]
