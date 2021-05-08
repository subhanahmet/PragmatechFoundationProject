from flask import Flask, render_template, request


app = Flask(__name__)

fullName = [
    {
        "id": 1,
        "name": "Subhan",
        "surname": "Ahmedov"
    },
    {
        "id": 2,
        "name": "Burhan",
        "surname": "Ahmedov"
    }
]

@app.route('/')
def index():
    return render_template("/index.html", users = fullName)

@app.route('/add', methods = ['GET', 'POST'])
def test():
    return render_template('/add.html')
 

if __name__ == '__main__':
    app.run(debug=True)

