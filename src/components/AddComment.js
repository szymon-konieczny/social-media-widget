import * as React from 'react';
import Modal from 'react-modal';
import moment from 'moment';

import '../styles/components/AddComment.scss';

export default class AddComment extends React.Component {
  
  state = {
    modalIsOpen: false,
    authorName: 'Anonymous',
    authorId: 9999,
    timeOfAdd: moment().format('YYYY-MM-DD'),
    content: null
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleSetCommentData = (e) => {
    e.preventDefault();

    const commentConfig = {
      authorId: this.state.authorId,
      timeOfAdd: this.state.timeOfAdd,
      content: this.state.content
    }
    this.props.commentData(commentConfig);
    this.closeModal();
  }

  setContent = (e) => {
    this.setState(({
      content: e.target.value
    }))
  }

	render() {
		return (
			<div className="add-comment-wrapper">
        <h3 
          onClick={this.openModal}
        >
          Add a comment
        </h3>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          className="add-comment-modal"
          contentLabel="Add a comment"
          ariaHideApp={false}
        >
         <button className="close-button" onClick={this.closeModal}></button>
            <form 
              className="add-comment-form"
              onSubmit={ this.handleSetCommentData }
            >
              <label className="input-label">
                <span>Name:</span> 
                <input 
                  className="comment-input" 
                  type="text"
                  value="Anonymous" 
                  required="required"
                  disabled="disabled"
                />
                </label>
              <label className="input-label">
                <span>Comment:</span>
                <textarea 
                  className="comment-input content"
                  placeholder="Write a comment :)"
                  onChange={ this.setContent }
                  required="required"
                >
                </textarea>
              </label>
              <input 
                className="add-comment-button"
                type="submit" 
                value="Add a comment" 
              />
            </form>
         </Modal>
			</div>
		)
	}
}