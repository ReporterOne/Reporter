from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('hello.html')



if __name__ == '__main__':
    app.run(debug=True, port=8443, host='0.0.0.0')
            # ssl_context=('server.crt', 'server.key'),
