import React from 'react'
import PDFObject from 'pdfobject'
import { Modal } from 'reactstrap'

class PDFModal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      PDFObject.embed('../resume/Randy Calderon-Resume.pdf')
    }
  }
  render() {
    return <Modal isOpen={this.props.isOPen} size="lg" />
  }
}

export default PDFModal
