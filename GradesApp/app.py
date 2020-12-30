from flask import Flask, render_template, url_for
import pandas

app = Flask(__name__)
data = pandas.read_csv(url_for('static', filename="data.csv"))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/gpa')
def calculator():
    return render_template('calculator.html')

if __name__ == '__main__':
    app.run(debug=True)