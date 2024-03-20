from flask import Flask, request, jsonify
from data import brands
from helpers import get_data

# create app

app = Flask(__name__)


# routes

''' returns list of all brands '''
@app.route('/brands', methods=["GET"])
def get_all_brands():
    return jsonify(brands), 200


''' returns list of all brands which description is matching the search query '''
@app.route('/brands/search', methods=["POST"])
def get_brands():

	target = request.json["q"]
 
	data = get_data(brands, target)
	
	return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)