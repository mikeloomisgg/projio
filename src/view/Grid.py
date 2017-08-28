from kivy.uix.widget import Widget


class Grid(Widget):
    def __init__(self, **kwargs):
        super(Grid, self).__init__(**kwargs)
        self.register_event_type("on_select")
        self.cols = 0
        self.rows = 0
        self.selected = (0, 0)
        self.selected_range = []
        self.bg_color = "#FFFFFF"
        self.text_color = "#000000"

    def make(self, rows=0, cols=0, template=None):
        for row in range(rows):
            self.add_row()
            for col in range(cols):
                pass

    def reset(self):
        """Delete all rows, cols, contents, styles"""
        pass

    def clear(self):
        """Remove all cell and label values"""
        pass

    def add_rows(self, label=None, num=1, loc=None):
        pass

    def set_row_label(self, row: int, label: str):
        pass

    def get_row_label(self, row: int) -> str:
        pass

    def set_col_label(self, col: int, label: str):
        pass

    def get_col_label(self, col: int) -> str:
        pass

    def delete_row(self, row: int):
        pass

    def hide_row(self, row: int):
        pass

    def set_cell(self, row: int, col: int, value: str):
        pass

    def get_cell(self, row: int, col: int) -> str:
        pass

    def sort(self, col: int):
        pass

    def filter(self, col: int, filter_type):
        pass

    def get_selection(self):
        pass

    def set_selection(self):
        pass

    def set_bg(self, bg_color):
        pass

    def set_cell_bg(self, bg_color):
        pass

    def set_cell_font(self, font, text_color, font_size):
        pass

    def on_select(self):
        pass
