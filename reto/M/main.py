from flask import Flask, request, jsonify
import leo

app = Flask(_name_)

@app.route("/")
def hello_world():
  args = request.args
  nbr_store_input = args.get('nbr_store_input')
  family_input = args.get('family_input')
  onpromotion_input = args.get('onpromotion_input')
  its_holiday = args.get('its_holiday')
  if leo._model is None:
    return "Model is not trained", 400
  
  pred = leo.predict([[nbr_store_input, family_input, onpromotion_input, its_holiday]])
  return jsonify({"prediction": pred.tolist()})

leo.train()