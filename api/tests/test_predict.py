import json
from  analyzer import model

__name__ = "sentiment-web-interface.tests"

def test_model():
    with open('samples/text.json') as json_file:
        content = json.load(json_file)
    txt = content["text"]
    try : 
        scores  = model.predict(txt)

    except Exception as e:
        print(e.message)
    assert scores , e.message