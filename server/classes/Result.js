/** Result class
* will be stored in Search class in results [] 
* handles all the logic for founding all matches
*
* @param {{name: str, description: str}} brand object storing information about brand
*/
export default class Result {
  // brand name
  name = null
  // original description of brand
  description = null
  // description with highlight
  newDescription = null

  // words with signs of punctuation
  words = []
  // indexes of matching words
  matches = []
  // sequences of matching words (allows gap with one word)
  matchesGroups = []

  // how accurate is the match: 0 - no match; 1 - there is a match
  matchScore = 0

  /** Constructor
   * sets: 
   *      nam: str
   *      description: str
   *      words: []:str
   * 
   * @param {{name: str, description: str}} brand 
   */
  constructor(brand) {
    this.name = brand.name
    this.description = brand.description
    this.words = brand.description.trim().split(" ")
  }

  /** Handle matches
   * sets:
   *     matches: []:int - indexes of matching words from word []
   *     matchesGroups: []:[]:int  - stores arrays with sequential indexes of match array
   * 
   * @param {[]: str} qs array with searched words
   */
  handleMatches(qs) {

    /* get indexes of matching words for uniq search */
    for (let i = 0; i < this.words.length; i++) {
      for (let q of qs) {
        const regex = new RegExp(`\\b\\w*${q}\\w*\\b`, 'gi')

        if (regex.test(this.words[i]) && !this.matches.includes(i)) this.matches.push(i)
      }
    }

    /* sort out indexes of matching words */  
    this.matches.sort((a, b) => a + b)

    /* get groups of matching words */
    for (let i = 0; i < this.matches.length; i++) {
      if (i === 0) {
        this.matchesGroups.push([this.matches[0]])
      } else if (this.matches[i] !== this.matches[i - 1] + 1 && this.matches[i] !== this.matches[i - 1] + 2) {
        this.matchesGroups.push([this.matches[i]])
      } else {
        const tmp = this.matchesGroups[this.matchesGroups.length - 1]
  
        tmp.push(this.matches[i])
        this.matchesGroups[this.matchesGroups.length - 1] = tmp
      }
    }
  }

  /** Ger Results
   * sets: 
   *    newDescription: str - new description with highlight (in strong tag)\
   *    matchScore: int - ranking how precis is match
   * 
   * @param {*} qs array with searched words
   * @returns {str} new description with highlight (in strong tag)
   */
  getResult(qs) {
    /* get match indexes */
    this.handleMatches(qs)

    /* create tmp array for new description */
    const words = [...this.words]

    /* create new description with highlighted words */ 
    for (let i = 0; i < this.matchesGroups.length; i++) {  
      words[this.matchesGroups[i][0]] = "<strong>" + words[this.matchesGroups[i][0]]
      words[this.matchesGroups[i][this.matchesGroups[i].length - 1]] = words[this.matchesGroups[i][this.matchesGroups[i].length - 1]] + "</strong>"
    }

    // set new description
    this.newDescription = words.join(" ")

    // set match score
    this.matchScore = this.getMatchScore(qs)
    
    return this.newDescription
  }

  /** Get Match Score
   * Calculates score to represent how match is precise
   * 
   * @param {[]:str} qs array of searched words
   * @returns {int} ranking of match
   */
  getMatchScore(qs) {
    if (this.description.length !== this.newDescription.length) {
      return 1

    } else {
      return  0
    }
  }
}