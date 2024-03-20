import re

''' this function is getting all brands description of which is matching the search query '''
def get_data(brands, target):
  # list with results
  out = []
  
  # loop trough original array and get check the description
  for brand in brands:
    # check description will return updated or original description
    description = handle_description(brand["description"], target)
    
    # if updated is longer than original then we have match and we add the brand to array
    if len(description) != len(brand["description"]):
      out.append({"name": brand["name"], "description": description})
   
  # return array with results
  return out


''' Searches for matches in description and if there is a match than update description '''
def handle_description(string, target):
  # split description to word list
  words = string.split()
  # create temp list to store checked words
  out = []
  
  # loop to all wards and search for a match
  for word in words:
    # if word is matching than surround it with strong tag and to out list
    if re.search(target, word):
      out.append("<strong>" + word + "</strong>")
    else:
      # add original word
      out.append(word)

  # concatenate all words with space and return new description
  return ' '.join(out)