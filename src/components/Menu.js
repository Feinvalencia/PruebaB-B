import styled from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    margin: 2rem 0px 2rem 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const A = styled.a `
    display: inline-block;
    
`
const NavLink = styled.ul`
    list-style:none;
    display: flex;
`
const NavItem = styled.li`
    display: inline-block;
    padding: 5px 20px;
    text-decoration: none;
    border-radius: 5px;
    color: #434345;
    &:hover{
        background-color: #434345;
        a{
            color: #fff
        }
    }
`
const NavA = styled.a`
    color: #434345;
    font-size: 1.2rem;
    font-weight: 800;
    text-decoration: none;
`
const Menu = () =>{
    return (
        <Nav>
            <A href="#">
                <img src="./images/logo.jpg" alt="Prueba B&B"/>
            </A>
            <NavLink class="nav-links">
                <NavItem ><NavA href="#">Welcome</NavA></NavItem>
                <NavItem ><NavA href="#">Dropdown</NavA></NavItem>
                <NavItem ><NavA href="#">Left Sidebar</NavA></NavItem>
                <NavItem ><NavA href="#">Right Sidebar</NavA></NavItem>
                <NavItem ><NavA href="#">No SideBar</NavA></NavItem>
            </NavLink>
        </Nav>
    )
}
export default Menu
