from flask import *

app = Flask(__name__)

@app.route('/')
def serve_root():
    return render_template('allen.html')
