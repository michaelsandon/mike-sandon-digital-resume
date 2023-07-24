from flask import Flask, render_template
from resume import Resume, Services

app = Flask(__name__)

resume_obj = Resume
services_obj = Services


@app.route('/')
def app_function():
  return render_template('index.html',
                         resume=resume_obj,
                         services=services_obj)


if __name__ == "__main__":
  app.run(host='0.0.0.0', debug=True)
