import webview
import subprocess

class Api:
	def get_wifi_networks(self):
		print('not implemented')

print('Starting AzuOS...')

webview.create_window('AzuOS', url="desktop/index.html", background_color='#000000', fullscreen=True)
webview.start(private_mode=False)