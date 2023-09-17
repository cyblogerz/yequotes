import './QuoteWrapper.css'

const QuoteWrapper = (props) => {
    const classes = 'quotewrapper ' + props.className
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default QuoteWrapper