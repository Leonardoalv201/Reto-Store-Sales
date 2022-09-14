from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
import leo as leo

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
  args = request.args
  nbr_store_input = args.get('store', type=int)
  family_input = args.get('family', type=int)
  onpromotion_input = args.get('onpromotion', type=int)
  its_holiday = args.get('its_holiday', type=int)
  model = leo.model()
  if model is None:
    return "Model is not trained", 400

  print(nbr_store_input, family_input, onpromotion_input, its_holiday)
  
  pred = leo.predict(pd.DataFrame([[nbr_store_input, family_input, onpromotion_input, its_holiday]], columns=['store_nbr', 'family', 'onpromotion', 'type']))
  return jsonify({"prediction": pred.tolist()})

if __name__ == '__main__':
    app.run(debug=True, port=3001)
# leo.train()