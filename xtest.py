from Xlib import display
import Xlib
import struct

# Connect to the X server
d = display.Display()

# Get the root window (top-level window)
root = d.screen().root

# List to store window information (window ID, title, resolution)
windows_info = []

# Function to fetch window details (title, resolution, and icon)
def fetch_window_details(window_id):
    window = d.create_resource_object('window', window_id)
    
    # Get window title
    try:
        window_title = window.get_wm_name()
    except Xlib.error.XError:
        window_title = None
    
    # Get window size (width and height)
    try:
        geometry = window.get_geometry()
        width = geometry.width
        height = geometry.height
    except Xlib.error.XError:
        width, height = None, None
    
    # Get window icon (if available)
    icon = None
    try:
        # Fetch the _NET_WM_ICON property
        icon_property = window.get_full_property(0x0096, 0)  # _NET_WM_ICON property (Atom 0x0096)
        if icon_property:
            icon_data = icon_property.value
            icon = []
            # The icon data is a list of integers that represent the width, height, and pixel values
            for i in range(0, len(icon_data), 4):
                # Unpack the data: Each icon element is a 4-byte integer (in ARGB format)
                width = struct.unpack('>H', icon_data[i:i+2])[0]
                height = struct.unpack('>H', icon_data[i+2:i+4])[0]
                icon.append((width, height))
    except Xlib.error.XError:
        icon = None

    if window_title:
        windows_info.append({
            'window_id': window_id,
            'title': window_title,
            'width': width,
            'height': height,
            'icon': icon
        })
    
    # List all child windows (recursively)
    try:
        children = window.query_tree().children
        for child in children:
            fetch_window_details(child.id)
    except Xlib.error.XError:
        pass  # Ignore windows that don't have children or other errors

# Start with the root window and fetch all windows recursively
fetch_window_details(root.id)

# Print window details
for window in windows_info:
    print(f"Window ID: {window['window_id']} - Title: {window['title']}")
    print(f"Resolution: {window['width']}x{window['height']}")
    print(f"Icon: {window['icon']}")
    print("-" * 40)

# Close the connection
d.close()
