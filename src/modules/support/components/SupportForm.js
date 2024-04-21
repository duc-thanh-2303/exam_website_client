import React from 'react'
import './SupportForm.css'

const SupportForm = () => {
  return (
    <div>
      <form id="supportForm" action="/support" method="post" className='supportForm'>
          <input type="text" name="name" id="name" placeholder="Your Name" required/>
          <input type="text" name="email" id="email" placeholder="Email" required/>
          <input type="number" name="phone" id="phone" placeholder="Phone" required/>
          <select name="reason" id="reason" required>
              <option value="score">Completing score</option>
              <option value="login">Account login</option>
              <option value="view">Viewing content</option>
              <option value="other">Other</option>
          </select>
          <textarea name="comment" id="comment" cols="30" rows="10" required placeholder="Message..."></textarea>
          <button type="submit" value="Send"/>
      </form>
    </div>

  )
}

export default SupportForm