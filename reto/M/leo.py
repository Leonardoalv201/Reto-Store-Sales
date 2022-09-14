import xgboost as xgb

_model = None

def train():
  xbg_reg = xgb.XGBRegressor()

  xbg_reg.load_model("model.txt")
  _model = xbg_reg

def predict(test):
  if _model is None:
    return None
  return _model.predict(test)