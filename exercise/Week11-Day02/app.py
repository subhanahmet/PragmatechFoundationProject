from flask import Flask, render_template, request


app = Flask(__name__)

fullName = []

@app.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == 'POST':
        ad = request.form['ad']
        surname = request.form['surname']
        adVeSoyad = {
            "ad": ad,
            "soyad": surname
        }
        fullName.append(adVeSoyad)
        return render_template('html/home.html', data = fullName)
    return render_template('html/home.html')
 

if __name__ == '__main__':
    app.run(debug=True)

