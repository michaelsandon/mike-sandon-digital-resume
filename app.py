from flask import Flask, render_template, request
from flask_mail import Mail, Message
from data import *  #Resume, Services, About
from flask_sitemapper import Sitemapper

app = Flask(__name__)
app.config.from_object('config')

app.secret_key = 'my_secrest_key'

mail = Mail()

mail.init_app(app)

sitemapper = Sitemapper()
sitemapper.init_app(app)

@sitemapper.include(lastmod="2023-11-22")
@app.route('/', methods=['GET', 'POST'])
def app_function():
  if request.method == "POST":
    forminformation = request.form

    msg = Message(
      subject='Business enquiry from ' + forminformation['name'],
      recipients=['michael.a.sandon@gmail.com'],
      sender='contactmichaelsandon@gmail.com',
      body=
      "From:%s \n Contact Email:%s \n Contact Phone:%s \r\n Message:%s \r\n" %
      (forminformation['name'], forminformation['email'],
       forminformation['phone'], forminformation['message']))

    mail.send(msg)

  return render_template('index.html',
                         resume=Resume,
                         services=Services,
                         about=About)

@app.route("/sitemap.xml")
def sitemap():
  return sitemapper.generate()

if __name__ == "__main__":
  app.run(host='0.0.0.0', debug=True)
