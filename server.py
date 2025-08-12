import subprocess
import time
import psutil
import random

# Path to Microsoft Edge executable
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# Website to open
url = "https://www.fiverr.com/skshimulhossen/convert-figma-or-psd-design-into-clean-html-code"

while True:  # Infinite loop
    # Open Microsoft Edge
    proc = subprocess.Popen([EDGE_PATH, url])

    # Wait a random time between 1 and 5 minutes
    delay = random.randint(60, 300)  # 60s to 300s
    print(f"Waiting {delay} seconds before refreshing...")
    time.sleep(delay)

    # Close only the Edge process we started
    proc.terminate()
    try:
        psutil.Process(proc.pid).kill()
    except psutil.NoSuchProcess:
        pass
