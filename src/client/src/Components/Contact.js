import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <form>
                <input type='email' placeholder='Your e-mail'/>
                <textarea type='text' rows='6' cols='100' wrap='hard' placeholder='Your message'></textarea>
                <input type='submit' value='Send message'/>
            </form>
        )
    }
}

export default Contact