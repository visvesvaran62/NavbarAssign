const withButton=(WraperedComponent)=>(props)=>{

      const handleClick = () => {
      alert("Button clicked from HOC ");
      }

    return <WraperedComponent {...props} handleClick={handleClick}/>

}
export default withButton;