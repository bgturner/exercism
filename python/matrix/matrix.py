class Matrix(object):
    def __init__(self, matrix_string):
        self.matrix = []
        rows = matrix_string.split('\n')
        for x in rows:
            self.matrix.append(list(map(int, x.split())))

    def row(self, index):
        index -= 1
        return(self.matrix[index])

    def column(self, index):
        index -= 1
        column_nums = []
        for x in self.matrix:
            column_nums.append(x[index])
        return column_nums
