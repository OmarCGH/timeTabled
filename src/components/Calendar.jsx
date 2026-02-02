import Event from './event'

const Calendar = () => {
  return (
    <div className="Calendar"> 
        <table> 
            <thead>
                <tr>
                    <th>Day /<br></br>Time</th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td className="time">8AM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 

                <tr>
                    <td className="time">9AM</td>
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <td></td>
                </tr> 

                <tr>
                    <td className="time">10AM</td>
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">11AM</td>
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">12PM</td>
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <td></td>
                </tr> 

                <tr>
                    <td className="time">1PM</td>
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Attend Lectures 📚' location="Boca Raton" color ='blue'/>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">2PM</td>
                    <Event event='Play 2XKO 🎮' location="Sunrise" color ='green'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <td></td>
                    <Event event='Play 2XKO 🎮' location="Sunrise" color ='green'/>
                </tr>

                <tr>
                    <td className="time">3PM</td>
                    <Event event='Play 2XKO 🎮' location="Sunrise" color ='green'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <td></td>
                    <Event event='Play 2XKO 🎮' location="Sunrise" color ='green'/>
                </tr>

                <tr>
                    <td className="time">4PM</td>
                    <Event event='Play 2XKO 🎮' location="Sunrise" color ='green'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <td></td>
                    <Event event='Play 2XKO 🎮' location="Sunrise" color ='green'/>
                </tr>

                <tr>
                    <td className="time">5PM</td>
                    <Event event='Play 2XKO 🎮' location="Sunrise" color ='green'/>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <td></td>
                    <Event event='Work at Internship 💵' location='West Palm Beach' color ='red' />
                    <td></td>
                    <Event event='Play 2XKO 🎮' location="Sunrise" color ='green'/>
                </tr>
















            </tbody>    
        </table>
    </div>
    
    )
}

export default Calendar;