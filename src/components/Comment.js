import * as React from 'react';
import moment from 'moment';
import users from '../fixtures/users.json';

import '../styles/components/Comment.scss';

const Comment = (props) => {
	
	const authors = users.map(user => user);

	return (
		<React.Fragment>
			{ authors
				.filter(author => author.id === props.authorId)
				.map(author => (
					<div key={ props.id } className="comment-wrapper">
						<img className="profileImageComment" src={ author.profileImageURL } />
						<div className="comment-section">
							<div className="comment-header">
								<h4 className="commentAuthor">{ author.name }</h4>
								<span className="commentAdditionTime">{ (moment(props.timeOfAdd, "YYYY-MM-DD").startOf('day').fromNow()) }</span>
							</div>	
							<p className="comment">
								{ props.content }
							</p>
						</div>
					</div>
		))
	}
		</React.Fragment>
	);
}
export default Comment;