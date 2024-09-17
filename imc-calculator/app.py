from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular_imc', methods=['POST'])
def calcular_imc():
    nome = request.form['nome']
    altura = float(request.form['altura'])
    peso = float(request.form['peso'])
    
    imc = peso / (altura * altura)
    
    if imc < 18.5:
        categoria = 'Magreza (Grau 0)'
    elif 18.5 <= imc <= 24.9:
        categoria = 'Normal (Grau 0)'
    elif 25.0 <= imc <= 29.9:
        categoria = 'Sobrepeso (Grau I)'
    elif 30.0 <= imc <= 39.9:
        categoria = 'Obesidade (Grau II)'
    else:
        categoria = 'Obesidade Grave (Grau III)'

    resultado = f"{nome}, seu IMC é {imc:.2f} ({categoria})"
    
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run(debug=True, port=3000)
