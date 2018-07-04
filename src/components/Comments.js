import * as React from 'react';
import moment from 'moment';
import Comment from './Comment';
import AddComment from './AddComment';
import commentsData from '../fixtures/comments.json';

import '../styles/components/Comments.scss';

export default class Comments extends React.Component {

	state = {
		commentsVisible: true,
		comments: [...commentsData]
	};

	toggleCommentsVisibility = () => {
		this.setState(prevState => ({
			commentsVisible: !prevState.commentsVisible
		}));
	};

	handleAddComment = (commentConfig) => {
		const newComment = {
			...commentConfig, 
			id: this.state.comments.length + 1 
		}

		this.setState(prevState => ({
			comments: [...prevState.comments, newComment]
		}));
	};

	render() {
		return (
			<div className="comments-wrapper">
				<p 
					onClick={ this.toggleCommentsVisibility } 
					className="comments-visibility-toggle-button"
				>
					{ this.state.commentsVisible 
						? <span>Hide comments</span> 
						: <span>Show comments</span> } ({ this.state.comments.length })
				</p>
				{ this.state.commentsVisible && (
						<React.Fragment>
							<div className="comments">
								{ 
									this.state.comments
										.sort((a, b) => {
											let dateA = moment(a.timeOfAdd || '10000-01-01');
											let dateB = moment(b.timeOfAdd || '10000-01-01');
											return dateA - dateB;
										})
										.map(comment => 
											<Comment 
												key={ comment.id } 
												id={ comment.id }
												authorId={ comment.authorId }
												content={ comment.content } 
												timeOfAdd={ comment.timeOfAdd }
											/>
										)
								}
							</div>		
						</React.Fragment>
				) }
				<AddComment
					commentData={ this.handleAddComment }
				/>
			</div>
		);
	};
};