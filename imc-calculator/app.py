from flask import Flask, request, render_template

app = Flask(__name__)

# Rota principal para exibir o formulário
@app.route('/')
def index():
    return render_template('index.html')

# Rota para calcular o IMC
@app.route('/calcular_imc', methods=['POST'])
def calcular_imc():
    nome = request.form['nome']
    altura = float(request.form['altura'])
    peso = float(request.form['peso'])
    
    # Cálculo do IMC
    imc = peso / (altura * altura)
    
    # Definir categoria de acordo com o IMC
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

    # Exibir resultado do IMC
    resultado = f"{nome}, seu IMC é {imc:.2f} ({categoria})"
    
    return render_template('resultado.html', resultado=resultado)

if __name__ == '__main__':
    app.run(debug=True, port=3000)

