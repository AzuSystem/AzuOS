import webview
import subprocess
import os
import pathlib
import json

# Hardware and Platform Related Imports
import psutil
import cpuinfo
import platform
import tkinter as tk # For Screen Resolution Detection
import base64

# Xorg Stuff
# from PIL import Image
# from Xlib import display, X
# import Xlib
# from io import BytesIO
# import xhandler

# # Example usage
# window_id = 517  # Example window ID (replace with actual window ID)
# base64_image = capture_window(window_id)

# if base64_image:
#     print("Base64 Image Captured:")
#     print(base64_image)
# else:
#     print("Failed to capture the window.")

subprocess.run(
	'xpra start :100 --bind-tcp=0.0.0.0:14500 --html=on',
	shell=True,
	capture_output=True,
	text=True
)

class Api:
	def collect_platform_info(self):
		platform_info = {
					"system": platform.system(),
					"node": platform.node(),
					"release": platform.release(),
					"version": platform.version(),
					"machine": platform.machine(),
					"processor": platform.processor(),
					"architecture": platform.architecture(),
					"python_version": platform.python_version(),
					"python_implementation": platform.python_implementation(),
					"python_build": platform.python_build(),
					"python_compiler": platform.python_compiler(),
					"uname": platform.uname()._asdict()
			}
		try:
			platform_info["platform"] = platform.platform()
		except Exception as e:
			platform_info["platform"] = f"Error: {str(e)}"

		return platform_info

	def memory_data(self):
		return {
			"memoryTotal": round(psutil.virtual_memory().total / (1024**3), 2),
			"memoryTotalRaw": psutil.virtual_memory().total,
			"memoryAvailable": round(psutil.virtual_memory().available / (1024**3), 2),
			"memoryAvailableRaw": psutil.virtual_memory().available,
			"memoryUsed": round(psutil.virtual_memory().used / (1024**3), 2),
			"memoryUsedRaw": psutil.virtual_memory().used,
			"memoryFree": round(psutil.virtual_memory().free / (1024 ** 3), 2),
			"memoryFreeRaw": psutil.virtual_memory().free
		}

	def cpu_data(self):
		return cpuinfo.get_cpu_info()

	def drive_data(self):
		drives = []
		for partition in psutil.disk_partitions():
			try:
				usage = psutil.disk_usage(partition.mountpoint)
				drives.append({
					"device": partition.device,
					"mountpoint": partition.mountpoint,
					"totalSpace": round(usage.total / (1024**3), 2),
					"usedSpace": round(usage.used / (1024**3), 2),
					"freeSpace": round(usage.free / (1024**3), 2),
					"totalSpaceRaw": usage.total / (1024**3),
					"usedSpaceRaw": usage.used / (1024**3),
					"freeSpaceRaw": usage.free / (1024**3),
				})
			except PermissionError:
				pass

		return drives

	def resolve_full_path(self, path):
		return str(pathlib.Path(path).expanduser())
	
	def convert_image_to_data_url(self, image_path):
		with open(image_path, "rb") as image_file:
			encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
		return f"data:image/png;base64,{encoded_string}"

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
			
	def save_file(self, path, content):
		if type == "plain":
			if path.startswith("~/"):
				# Open the file in write mode
				with open(os.path.expanduser(path), 'w') as file:
					file.write(content)
			else:
				with open(path, 'w') as file:
					file.write(content)

	# def fetch_windows(self, name, includeChildren=False):
	# 	window_data = xhandler.fetch_windows()

	# 	filtered_window_data = [window for window in window_data if not window['isChild']]

	# 	if includeChildren==True:
	# 		for window in window_data:
	# 			if name=='title':
	# 				return window['title']
	# 			elif name=='width':
	# 				return window['width']
	# 			elif name=='height':
	# 				return window['height']
	# 			elif name=='x':
	# 				return window['x']
	# 			elif name=='y':
	# 				return window['y']
	# 			elif name=='isChild':
	# 				return window['isChild']
	# 		    # print(f"Title: {window['title']}, Width: {window['width']}, Height: {window['height']}, X: {window['x']}, Y: {window['y']}")
	# 	else:
	# 		for window in filtered_window_data:
	# 			if name=='title':
	# 				return window['title']
	# 			elif name=='width':
	# 				return window['width']
	# 			elif name=='height':
	# 				return window['height']
	# 			elif name=='x':
	# 				return window['x']
	# 			elif name=='y':
	# 				return window['y']
	def fetch_windows(self):
		# Fetch the list of windows
		window_data = xhandler.fetch_windows()

		# Initialize an empty list to store the results
		result = []

		# Iterate through each window in the list
		for window in window_data:
			# Append each window's data to the result list
			result.append({
				"title": window['title'],
				"width": window['width'],
				"height": window['height'],
				"id": window['id'],
				"x": window['x'],
				"y": window['y'],
				"ischild": window['isChild']
			})

		# Return the processed list
		return result

	def exec_command(self, command):
			try:
				result = subprocess.run(
					command,
					shell=True,
					capture_output=True,
					text=True
				)
				return result.stdout.strip(), result.stderr.strip()

			except Exception as e:
				return "", f"Unexpected error: {e}"			

	def xpra_running(self):
		try:
			result = subprocess.run(["xpra", "list"], capture_output=True, text=True, check=True)
			return ':100' in result.stdout  # Check if display is in output
		except subprocess.CalledProcessError:
			return False  # If `xpra list` fails, assume Xpra is not running

	def exec_xpra(self, command):
		# if not self.xpra_running:
		# 		try:
					result = subprocess.run(
						'xpra start :100 --start=' + command,
						shell=True,
						capture_output=True,
						text=True
					)
					return result.stdout.strip(), result.stderr.strip()
				# except Exception as e:
				# 	return "", f"Unexpected error: {e}"




root = tk.Tk()

displayWidth = root.winfo_screenwidth()
displayHeight = root.winfo_screenheight()

print('Starting AzuOS...')

# Instantiate Api class
api = Api()

api.exec_xpra('dolphin')

print(api.exec_xpra('firefox'))
# api.exec_command('firefox')

webview.settings = {
	'ALLOW_FILE_URLS': True,
	'ALLOW_DOWNLOADS': True,
	'OPEN_DEVTOOLS_IN_DEBUG': False
}
webview.create_window('AzuOS', url="index.html", background_color='#000000', js_api=api, fullscreen=True, width=displayWidth, height=displayHeight)

# webview.create_window('AzuOS', url="index.html", background_color='#000000', js_api=api)

webview.start(gui='qt', debug=True)
