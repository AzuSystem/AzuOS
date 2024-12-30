import webview
import subprocess
import os
import pathlib
# Hardware and Platform Related Imports
import psutil, cpuinfo
import platform
import tkinter as tk
import base64

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


root = tk.Tk()

displayWidth = root.winfo_screenwidth()
displayHeight = root.winfo_screenheight()

print('Starting AzuOS...')

# Instantiate Api class
api = Api()

webview.settings = {
  'ALLOW_FILE_URLS': True,
  'ALLOW_DOWNLOADS': True,
  'OPEN_DEVTOOLS_IN_DEBUG': False
}
webview.create_window('AzuOS', url="index.html", background_color='#000000', js_api=api, fullscreen=True, width=displayWidth, height=displayHeight)

# webview.create_window('AzuOS', url="index.html", background_color='#000000', js_api=api)

webview.start(debug=True)
