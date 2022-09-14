import xgboost as xgb
global _model

xbg_reg = xgb.XGBRegressor()

xbg_reg.load_model("model.json")
_model = xbg_reg
print('loaded model', _model)

def predict(test):
  if _model is None:
    return None
  return _model.predict(test)


def model():
  return _model