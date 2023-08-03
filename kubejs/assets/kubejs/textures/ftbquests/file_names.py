import os
for filename in os.listdir():
    os.rename(filename, filename.replace(" ", "_").lower())
    os.rename(filename, filename.replace("&", "and"))