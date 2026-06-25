import requests
from flask import Flask, render_template, request

app = Flask(__name__)

API_TEMPLATES = "https://api.memegen.link/templates/"

@app.route("/")
def home():
    response = requests.get(API_TEMPLATES)
    templates = response.json()
    return render_template("index.html", templates = templates)

@app.route("/generate", methods=["POST"])
def generate():
    print(request.form)
    template_id = request.form.get("template_id")
    text1 = request.form.get("text1", "_")
    text2 = request.form.get("text2", "_")

    text1 = text1.strip() or "_"
    text2 = text2.strip() or "_"

    meme_url = f"https://api.memegen.link/images/{template_id}/{text1}/{text2}.jpg"

    response = requests.get(API_TEMPLATES)
    templates = response.json()

    return render_template("index.html", templates=templates, meme_url=meme_url)

if __name__ == "__main__":
    app.run(debug=True)