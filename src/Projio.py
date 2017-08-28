from kivy.app import App

from src.view.Layout import Layout


class Projio(App):
    def __init__(self, **kwargs):
        super(Projio, self).__init__(**kwargs)
        self.root = Layout()

    def build(self):
        return self.root


if __name__ == '__main__':
    app = Projio()
    app.run()
