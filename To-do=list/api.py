from flask import render_template,Flask,request,redirect,url_for,jsonify
import mysql.connector as link
app=Flask(__name__)

db=link.connect(user='san',password='12345',host='127.0.0.1',database='testingflask',auth_plugin='mysql_native_password')
cursor=db.cursor(buffered=True)#without the buffer the loading is lazy thereby arising complain  




@app.route('/<val>',methods=["GET",'POST'])
def  function(val):
    cursor.execute("INSERT INTO todolists(name) VALUES('{}')" .format(val))
    db.commit()
    return jsonify({1:'one',2:"two"})


@app.route('/del/<work>',methods=["GET",'POST'])
def dele(work):
    cursor.execute("DELETE FROM todolists WHERE name='{}'".format(work))
    db.commit()
    return jsonify({1:'one',2:"two"})



if __name__=='__main__':
    app.run(debug=True)