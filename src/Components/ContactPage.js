import React from 'react'

class ContactPage extends React.Component {

    render() {
        return (
            <div>

                <input type="text"/> <br/>
                <input type="text"/> <br/>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <input type="submit" />

                <button onClick={() => {
                    this.props.changePage("list")
                }}>Go to list page</button>

            </div>
        )
    }

}

export default ContactPage