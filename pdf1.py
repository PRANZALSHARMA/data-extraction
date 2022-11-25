import platform
from tempfile import TemporaryDirectory
from pathlib import Path
 
import pytesseract
from pdf2image import convert_from_path
from PIL import Image

import easyocr 
import cv2
from matplotlib import pyplot as plt
import numpy as np
import csv
w=["TLX","TLY","TRX","TRY","BLX","BLY","BRX","BRY","VALUE","CONFIDENCE"]
f = open('sample.csv', 'w')
writer = csv.writer(f)
writer.writerow(w)
f.close()
   

if platform.system() == "Windows":
    path_to_poppler_exe = Path(r"C:\poppler-0.68.0_x86\bin")
    out_directory = Path(r"~\Desktop").expanduser()
else:
    out_directory = Path("~").expanduser()    
PDF_file = Path(r"d.pdf")
image_file_list = []
 
text_file = out_directory / Path("out_text.txt")
 
def main():
    ''' Main execution point of the program'''
    with TemporaryDirectory() as tempdir:
        """
        Part #1 : Converting PDF to images
        """
 
        if platform.system() == "Windows":
            pdf_pages = convert_from_path(
                PDF_file, 500, poppler_path=path_to_poppler_exe
            )
        else:
            pdf_pages = convert_from_path(PDF_file, 500)
 
        for page_enumeration, page in enumerate(pdf_pages, start=1):
 
            filename = f"{tempdir}\page_{page_enumeration:03}.jpg"
            page.save(filename, "JPEG")
            image_file_list.append(filename)
            i=0
        for image in image_file_list:
            # print('check')
            im = Image.open(image)
            im_1 = im.convert('RGB')
        
            i+=1
            im_1.save(f'a{i}' +'.jpg')

            # with Image.open(f'a{i}'+'.jpg') as img:
            #     width_img, height_img = img.size
            
        """
        Part #2 - Recognizing text from the images using OCR
        """

        with open(text_file, "a") as output_file:
            for image_file in image_file_list:
                
                '''text = str(((pytesseract.image_to_string(Image.open(image_file)))))'''
                reader = easyocr.Reader(['en'],gpu = False)
                text = reader.readtext(image_file)
                print(text)
                f = open('sample.csv', 'a',newline ='')
                writer = csv.writer(f)
                for txt in text:
                    writer.writerow([txt[0][0][0],txt[0][0][1],txt[0][1][0],txt[0][1][1],txt[0][3][0],txt[0][3][1],txt[0][2][0],txt[0][2][1],txt[1],txt[2]])
                f.close()
                '''for txt in text:
                    output_file.write(txt)'''
     
if __name__ == "__main__":
    main()
