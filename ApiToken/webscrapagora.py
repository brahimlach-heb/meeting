from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time as t
import pyperclip
from fastapi import FastAPI


options = Options()
# set headers
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_argument("--disable-infobars")
options.add_argument("--disable-notifications")
options.add_argument("--disable-popup-blocking")
options.add_argument("--disable-extensions")
options.add_argument("--start-maximized")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--disable-gpu")
options.add_argument("--lang=en-US,en;q=0.9")
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36")
options.add_experimental_option("detach", True)
app = FastAPI()
@app.get("/generate_token/{id}")
def gettokenid(id:str):
            driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
            # Open the URL
            driver.get("https://console.agora.io/token/Kmh-w4Sg7")
            email=driver.find_element(By.XPATH,'/html/body/div[1]/section/div[2]/div/div[1]/div[2]/div[1]/input')
            password=driver.find_element(By.XPATH,'/html/body/div[1]/section/div[2]/div/div[1]/div[2]/div[2]/input')
            Login=driver.find_element(By.XPATH,'/html/body/div[1]/section/div[2]/div/div[1]/div[2]/div[3]/button')
            if email.is_displayed and password.is_displayed:
                email.send_keys('aya.morhir.is@gmail.com')
                password.send_keys('Soul-Eater123')
                Login.click()
                t.sleep(10)

            while True:
                generatechannel=driver.find_element(By.XPATH,'/html/body/div[1]/div/div[2]/section/section/main/div/div[2]/div[2]/div/div[3]/div[2]/input')
                if generatechannel.is_displayed:
                    break
                t.sleep(2)
                continue
            generatechannel.send_keys(id)
            t.sleep(2)
            generate=driver.find_element(By.XPATH,'/html/body/div[1]/div/div[2]/section/section/main/div/div[2]/div[2]/div/div[4]/div[2]/button[1]')
            if generate.is_displayed:
                generate.click()
                t.sleep(5)
            while True:
                copytoken=driver.find_element(By.XPATH,'/html/body/div[1]/div/div[2]/section/section/main/div/div[2]/div[2]/div/div[4]/div[2]/div[3]/button[1]')
                if copytoken.is_displayed:
                    copytoken.click()
                    text = pyperclip.paste()
                    print(text)  # This will print whatever text is currently in the clipboard
                    break
            # Initialize the list to store links
            # Close the browser
            driver.quit()
            return text