import webview
import subprocess
import os
import pathlib
from screeninfo import get_monitors

class Api:
	def get_wifi_networks(self):
		print('not implemented')

	def fetch_directory(self, path):
		if path.startswith("~/"):
			result = os.listdir(pathlib.Path.home() / path[2:])
		else:
			result = os.listdir(path)

		# Separate files and folders
		files = []
		folders = []

		for entry in result:
			full_path = pathlib.Path(path).expanduser() / entry  # Get the full path of the entry
			if full_path.is_file():
				files.append(entry)  # Add to files list
			elif full_path.is_dir():
				folders.append(entry)  # Add to folders list

		return files, folders  # Return both lists

	def fetch_file(self, type, path):
		if type=="plain":
			if path.startswith("~/"):
				# Open the file in read mode
				with open(os.path.expanduser(path), 'r') as file:
					return file.read()
			else:
				with open(path, 'r') as file:
					return file.read()

		if type=="path":
			if path.startswith("~/"):
				return 'file://' + os.path.expanduser(path)
			else:
				return 'file://' + path

primaryMonitor = next((m for m in get_monitors() if
m.is_primary), None)

print('Starting AzuOS...')

# Instantiate Api class
api = Api()

webview.settings = {
  'ALLOW_FILE_URLS': True,
  'ALLOW_DOWNLOADS': True,
  'OPEN_DEVTOOLS_IN_DEBUG': False
}
webview.create_window('AzuOS', url="index.html", background_color='#000000', fullscreen=True, js_api=api, width=primaryMonitor.width, height=primaryMonitor.height)

# webview.create_window('AzuOS', url="index.html", background_color='#000000', js_api=api)

webview.start(debug=True)
