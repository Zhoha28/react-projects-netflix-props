import netflix from './netflix.png'
function Header(){
  return(
    <>
    <div class="HeaderLogo">
    <a href="https://netflix.com"><img src={netflix} height="150"/></a>
    </div>
    </>
  )
}

export default Header;