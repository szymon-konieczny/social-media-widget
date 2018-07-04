import * as React from 'react';
import '../styles/components/Header.scss';

export default class Header extends React.Component {

	state = {
		profileURLDisplayed: false
	}

	toggleProfileURLVisilibity = () => {
		this.setState(prevState => ({
			profileURLDisplayed: !prevState.profileURLDisplayed
		}))
	}

	render() {
		return (
			<div className="header">
				<div 
					className="share-button" 
					onClick={ this.toggleProfileURLVisilibity }
				/>
				{ 
					this.state.profileURLDisplayed && (
						<input type="text" className="profile-URL" defaultValue={ this.props.profileURL } />
					)
				}
				<div className="header-top">
					<img className="profile-image" src={ this.props.profileImageURL } />
					<span className="user-info">
						<p className="user-name">{ this.props.userName }
							<span 
								className="like-button"
								onClick={ this.props.handleAddLikes }
							>
							</span>
						</p>
						<p className="user-location">
							{ this.props.userLocation.city }, { this.props.userLocation.country }
						</p>
					</span>
					
				</div>
				<div className="header-bottom">
					<div className="counters">
						<div className="counter likes">
							<span>{ this.props.likes }</span>
							<p>Likes</p>
						</div>
						<div className="counter following">
							<span>{ this.props.following }</span>
							<p>Following</p>
						</div>
						<div className="counter followers">
							<span>{ this.props.followers }</span>
							<p>Followers</p>
						</div>
					</div>
					<button 
						className="follow-button"
						onClick={ this.props.handleAddFollowers }
					>
						Follow
					</button>
				</div>
			</div>
		);
	}
};