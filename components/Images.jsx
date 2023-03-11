const Images = ({ data }) => {
    console.log(data)
    return data.map(src =>
        <img src={src} alt={"cat"}/>
    )
}
export default Images