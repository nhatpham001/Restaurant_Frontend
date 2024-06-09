
interface myprops{
    text: string
}
const Alert = ({text}: myprops) => {
  return (
    <div className="alert alert-primary">
      text
    </div>
  )
}

export default Alert
