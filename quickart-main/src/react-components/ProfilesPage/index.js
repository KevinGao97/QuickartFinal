import React from 'react';
import { Link ,  withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import userPicture from '../../images/defaultUserPicture.jpg';
import store from '../../store';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { getProfile } from '../../actions/settingsActions';
import './styles.css';

/* Component for the User Profile Page */
class ProfilesPage extends React.Component {
  state = {
    
  }
  isAdmin = ""

  componentWillMount() {
    // let reduxState = store.getState()
    // //let cthis.state = reduxState['loginState']
    // let userID = reduxState['loginState']['id']
    // //console.log(this.state)
    // await this.props.getProfile(userID)
    // //settingsState should be stored here
    // reduxState = store.getState()
    // this.state = reduxState['settingsState']
    // let userType = reduxState['loginState']['user'];
    // this.isAdmin = userType === "admin" 
    this.a()
  }

  async a() {
    let reduxState = store.getState()
    //let cthis.state = reduxState['loginState']
    let userID = reduxState['loginState']['id']
    //console.log(this.state)
    await this.props.getProfile(userID)
    //settingsState should be stored here
    reduxState = store.getState()
    this.state = reduxState['settingsState']
    let userType = reduxState['loginState']['user'];
    this.isAdmin = userType === "admin"
  }

  // async componentDidMount() {
  //   let reduxState = store.getState()
  //   //let cthis.state = reduxState['loginState']
  //   let userID = reduxState['loginState']['id']
  //   //console.log(this.state)
  //   await this.props.getProfile(userID)
  //   //settingsState should be stored here
  //   reduxState = store.getState()
  //   this.state = reduxState['settingsState']
  //   let userType = reduxState['loginState']['user'];
  //   this.isAdmin = userType === "admin" 
  // }
 
  onLoad = async(e) =>  {
    let reduxState = store.getState()
    //let cthis.state = reduxState['loginState']
    let userID = reduxState['loginState']['id']
    //console.log(this.state)
    await this.props.getProfile(userID)
    //settingsState should be stored here
    reduxState = store.getState()
    this.state = reduxState['settingsState']
    let userType = reduxState['loginState']['user'];
    this.isAdmin = userType === "admin"    
  }

  render() {
    // this.onLoad()
    
    const postings = (
      <div className='profile-posts'>
        <div className='profile-post-title'>
          <h2 className='textDefaultColor addSomeMargin'>Posts</h2>
        </div>
        <div className='backgroundWhite'>
          <div>
            <h4>
              <Link className='addSomeMargin' to='/posts'>
                Title
              </Link>
            </h4>
            <h6 className='addSomeMargin'>Date</h6>
            <p className='addSomeMargin'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    );

    const niche = (
      <div>
        <h2 className='textDefaultColor addSomeMargin'>Niche</h2>
        <p className='addSomeMargin'>
          {this.state.niche}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
        </p>
      </div>
    );
    
    const tags = (
      <div className='informationColour'>
        <div className='tagBar'>
          <h2 className='textDefaultColor'> Tags </h2>
          <ul className='tagbaritems'>
            <Button
              size='small'
              variant='outlined'
              href=''
              startIcon={<AddIcon />}
              class='tagOption produce'
            >
              Apples
            </Button>
            <Button
              size='small'
              variant='outlined'
              href=''
              startIcon={<AddIcon />}
              class='tagOption grain'
            >
              Rice
            </Button>
            <Button
              size='small'
              variant='outlined'
              href=''
              startIcon={<AddIcon />}
              class='tagOption meat'
            >
              Cows
            </Button>
          </ul>
        </div>
      </div>
    );
    
    const userReports = (
      <Link to='/userReports' className='btn btnDefault'>
        User Reports
      </Link>
    );

    return (
      <section className='mainBackground-profile'>
        <div className='containerProfile'>
          <div className='profileArea'>
          <div className='buttons smallMargin'>
                <Link to='/editProfile' className='btn btnDefault'>
                  Edit Profile
                </Link>
                {this.isAdmin ? "":userReports}
            </div>

            <div className='profile-top backgroundDefault'>
              <img className='profileImg' src={userPicture} alt='' />
              {/* <h1>Johnson Smith</h1>
              <p>Toronto, ON</p> */}
              <h1>{this.state.name}</h1>
              <p>{this.state.location}</p>
            </div>

            <div className='profile-about backgroundGrey '>
              <h2 className='textDefaultColor addSomeMargin'>Biography</h2>
              <p className='addSomeMargin'>
                {console.log(this.state.biography)}
                {this.state.biography}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
              </p>
              {this.isAdmin ? "" : niche}
              {this.isAdmin ? "" : tags}
            </div>
            {this.isAdmin ? '' : postings}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(connect(null, { getProfile, setAlert})(ProfilesPage));
