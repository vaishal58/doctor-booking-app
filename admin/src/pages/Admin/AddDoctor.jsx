import React from 'react'
import {assets} from '../../assets/assets'
const AddDoctor = () => {
  return (
    <form>
       <p>Add Doctor</p> 
       <div>
        <div>
          <label htmlFor='doc-img'>
            <img src={assets.upload_area} alt=""></img>
          </label>

          <input type='file' id="doc-img" hidden></input>
          <p>Upload doctor <br></br>picture</p>
        </div>

        <div>
          <div>
            <div>
              <p>Doctor name</p>
              <input type="text" placeholder='Name' req/>
            </div>
            <div>
              <p>Doctor Email </p>
              <input type="email" placeholder='Email' req/>
            </div>

            <div>
              <p>Doctor Password</p>
              <input type="password" placeholder='Password' req/>
            </div>

            <div>
              <p>Experience </p>
              <select name="">
                <option value="1 Year">1 year</option>
                <option value="2 Year">2 year</option>
                <option value="3 Year">3 year</option>
                <option value="4 Year">4 year</option>
                <option value="5 Year">5 year</option>
                <option value="6 Year">6 year</option>
                <option value="7 Year">7 year</option>
                <option value="8 Year">8 year</option>
                <option value="9 Year">9 year</option>
                <option value="10 Year">10 year</option>
              </select>
            </div>

            <div>
              <p>Fees</p>
              <input type="number" placeholder='fees' req/>
            </div>
          </div>

          <div>
              <div>
                <p>Specialty</p>
                <select name="" id="">
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>

                </select>
              </div>

              <div>
              <p>Education</p>
              <input type="text" placeholder='Education' req/>
            </div>
          </div>
        </div>
       </div>
    </form>
  )
}

export default AddDoctor
