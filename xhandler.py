from Xlib import display, X
import Xlib
import struct

def fetch_windows():
    # Connect to the X server
    d = display.Display()
    root = d.screen().root

    # List to store window data
    window_data = []

    # Recursive function to get window details
    def get_window_details(window, parent_id):
        try:
            name = window.get_wm_name()
            geometry = window.get_geometry()
            width = geometry.width
            height = geometry.height
            x = geometry.x
            y = geometry.y
            is_child = parent_id != root.id

            if name:  # Only include windows with a name (title)
                window_data.append({
                    "title": name,
                    "id": window.id,
                    "width": width,
                    "height": height,
                    "x": x,
                    "y": y,
                    "isChild": is_child,
                })

            # Recursively check child windows
            children = window.query_tree().children
            for child in children:
                get_window_details(child, window.id)
        except Exception:
            pass  # Handle inaccessible windows gracefully

    # Start from the root window
    get_window_details(root, None)

    # Close the connection
    d.close()

    return window_data