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


def get_line(day):
    gifts = ''
    while day > 0:
        if len(gifts) > 0 and day == 1:
            gifts += " and"
        day -= 1
        gifts += potential_gifts[day]
    return (
        "On the {} day of Christmas my true love gave to me:{}"
        ).format(days[day-1], gifts)


def recite(start_verse, end_verse):
    song = []
    while start_verse <= end_verse:
        song.append(get_line(end_verse))
        end_verse -= 1
    return song[::-1]
