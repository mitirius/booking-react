
  import React, { Component } from 'react';
  import './DateLabel.css';

  class DateLabel extends Component {

    getDate(date){
      let dd = date.getDate();
      let mm = date.getMonth() + 1; //January is 0!
      const yyyy = date.getFullYear();

      if(dd < 10) {
        dd='0'+ dd
      }

      if(mm < 10) {
        mm='0'+ mm
      }
      return `${dd}/${mm}/${yyyy}`;
    }

    render(){
      return(
        <nav className="navbar navbar-default navbar-fixed-top">
              <div className="datebar">
                <h1 className="date" >
                 <span className="glyphicon glyphicon-menu-left" onClick={this.props.onDecrement}></span>
                  {this.getDate(this.props.date)}
                 <span className="glyphicon glyphicon-menu-right" onClick={this.props.onIncrement}></span>
                </h1>
                 <div className="navbar-header hidden-xs">
                  <form className="form-inline">
                  <a href="#" className="navbar-text">
                    <span className="glyphicon glyphicon-list">Filter</span> 
                  </a>
                <div className="form-group input-group">
                  <label className="sr-only" htmlFor="search">Search</label>
                  <input type="text" className="search-query form-control" id="search" placeholder="Search By Room" />
                </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Available now
                </label>
              </div>
            </form>
          </div>
         </div>
        </nav>//--end of navbar--
      );
    }
  }
  
  export default DateLabel;
