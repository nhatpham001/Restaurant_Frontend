
interface props {
    header: string

}
const Banner = (props: props) => {
  return (
    <div>{props.header}</div>
  )
}

export default Banner