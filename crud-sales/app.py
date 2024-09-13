from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

def db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='crud123',
        database='bdcrud',
    )
    return connection

@app.route('/')
def index():
    conn = db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM vendas')
    vendas = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('index.html', vendas=vendas)

@app.route('/create', methods=['POST'])
def create():
    nome_produto = request.form['nome_produto']
    valor = request.form['valor']
    
    conn = db_connection()
    cursor = conn.cursor()
    comando = 'INSERT INTO vendas (nome_produto, valor) VALUES (%s, %s)'
    cursor.execute(comando, (nome_produto, valor))
    conn.commit()
    cursor.close()
    conn.close()
    
    return redirect(url_for('index'))

@app.route('/update', methods=['POST'])
def update():
    nome_produto = request.form['nome_produto']
    novo_valor = request.form['valor']
    
    conn = db_connection()
    cursor = conn.cursor()
    comando = 'UPDATE vendas SET valor = %s WHERE nome_produto = %s'
    cursor.execute(comando, (novo_valor, nome_produto))
    conn.commit()
    cursor.close()
    conn.close()
    
    return redirect(url_for('index'))

@app.route('/delete', methods=['POST'])
def delete():
    nome_produto = request.form['nome_produto']
    
    conn = db_connection()
    cursor = conn.cursor()
    comando = 'DELETE FROM vendas WHERE nome_produto = %s'
    cursor.execute(comando, (nome_produto,))
    conn.commit()
    cursor.close()
    conn.close()
    
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, port=3000)
