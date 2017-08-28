from kivy import Config
from kivy.graphics import Rectangle
from kivy.graphics.context_instructions import Color
from kivy.uix.button import Button
from kivy.uix.gridlayout import GridLayout

Config.set('graphics', 'width', 800)
Config.set('graphics', 'height', 480)
Config.set('graphics', 'resizable', 0)


class Layout(GridLayout):
    def __init__(self, **kwargs):
        super(Layout, self).__init__(**kwargs)
        self.size_hint = 1, 1
        self.cols = 1
        with self.canvas.before:
            self._bg_color = Color(0, 0, 0, mode="rgba")
            self._bg_rect = Rectangle(pos=self.pos, size=self.size)
        self.bind(size=self._update_window_size)

        self.button = Button(text='Hello World')
        self.add_widget(self.button)

    def _update_window_size(self, root, new_size):
        self._bg_rect.size = new_size
