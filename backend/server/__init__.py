from flask import Flask
from .extensions import db
from flask_login import LoginManager
from server.settings import Config
from flask_cors import CORS
import sqlite3


con = sqlite3.connect("server/db.sqlite3", check_same_thread=False)

login_manager = LoginManager()

def create_app(config_class=Config):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)


    # db.init_app(app)
    # login_manager.init_app(app)
    
    # from server.routes import entertain
    # app.register_blueprint(entertain)
   


    with app.app_context():
        
        db.init_app(app)
        login_manager.init_app(app)

        from server.routes import entertain
        app.register_blueprint(entertain)
    
     
        db.create_all()
        

    return app

