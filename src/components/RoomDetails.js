import React, { Component } from 'react';
import './RoomDetails.css';

class RoomDetails extends Component {

    render() {
        return (this.props.details !== undefined) ?
             this.renderRoomDetails() : this.renderEmptyDetails();
    }

    renderEmptyDetails(){
        return <div>Loading....</div>;
    }

    renderRoomDetails(){
        const details = this.props.details;
        const URL = "https://challenges.1aim.com/roombooking"

        return(
            <div className={`main ${this.props.className}`}>
                <img className="hidden-xs center-block" 
                                  alt="room-pictures" src={`${URL}/${details.images[0]}`} />
                <article className="text">
                    <p>Location: {details.location}</p>
                    <p>Availability: {details.avail.join(' / ')}</p>
                    <p>Capacity: {details.capacity}</p>
                    <p>Equipment: {details.equipment.join(' / ')}</p>
                </article>
        
                <button type="button" className="to-bookbtn btn btn-success btn-lg btn-block" 
                    data-toggle="modal" data-target="#booking-modal">
                    Click To Book
                </button>
                <div id="booking-modal" className="modal fade" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Information</h4>
                            </div>

                            <div className="modal-body">
                              <RoomForm />
                            </div>
                            <div className="modal-footer">
                             <button type="button" className="btn btn-success" data-dismiss="modal">Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

function RoomForm(props) {

    return (
        <form>
                <div className="form-group">
                    <label htmlFor="inputname" className="control-label">Name</label>
                    <input type="text" className="form-control" id="inputname" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail3" className="control-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                </div>    
                <div className="form-group">
                    <label htmlFor="inputnumber" className="control-label">Mobile Number</label>
                    <input type="Number" className="form-control" id="inputnumber" placeholder="Mobile Number" />
                </div>
            <a href="#" className="add more">Add More>></a>
        </form>
        );
}

export default RoomDetails;
