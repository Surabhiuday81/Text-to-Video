import React from 'react'

const searchbox = () => {
  return (
    <div className='container-text'>

  
      <div className='searchbox'>
          <form>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">INPUT THE TEXT</label>
      <div className='text-area'>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className='button-text'>
      <button type="button" class="btn btn-primary">SUBMIT</button>
      </div>
    </div>
  </form>
      </div>
    </div>
  )
}

export default searchbox