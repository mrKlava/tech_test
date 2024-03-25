import Result from "./Result.js"

/** Search class 
 * stores the search query and all calculated results 
 * 
 * @param {str} q
 */
export default class Search {
  // will store Result s - 
  results = []

  // regex to get pure word
  regexWord = /\b\w+\b/gi
  // do i need it here ???
  regex = ""

  // search query
  q = ""
  // splitted search query to separate words
  qs = []
  // splitted search query to separate unique words
  qsUniq = []

  /** Constructor
   * sets:
   *    q: str
   *    qs: []:str
   *    qsUniq: []:str
   * 
   * @param {str} q search query 
   */
  constructor(q) {
    this.q = q
    this.qs = q.match(this.regexWord)
    this.qsUniq = Array.from(new Set(this.qs))
  }

  /** Check data
   * for each brand will get Result and will set in results []
   * 
   * sets:
   *    results: []:Result
   *    
   * @param {[]: {name: str, description: str}} data list of all brands
   */
  checkData(data) {
    /* get results for all brands */
    for (let brand of data) {
      const result = new Result(brand)

      result.getResult(this.qsUniq)

      this.results.push(result)
    }
  }

  /** get Results
   * will check all data and set results
   * 
   * @param {{name: str, description: str}} data brand object
   * @returns {[]: {name: str, description: str}} will contain only brands where match score is higher than 0
   */
  getResults(data) {
    this.checkData(data)
    const results = this.results.filter(result => result.matchScore)
                                .map(result => ({name: result.name, description: result.newDescription}))
    return results 
  }
}