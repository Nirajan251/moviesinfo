import styled from "styled-components";

export const NavWrapper = styled.div`
background-color:rgb(62, 59, 253);
font-family: 'Poppins', sans-serif;
  form {
    display:flex;
    background-color:white;
    margin-left:40px;
    height:40px;
    padding:0 20px;
    border-radius:100px;
    input{
        border: none;
    }
    input:focus{
      box-shadow:none;
    }
  }
  .nav-link{
      color:black !important;
  }
  .img__nav{
    
    width:200px;
  }
  .h1, h1{
    font-size:2.5rem;
    color:#240303;
    font-weight:900;
    display:flex;
    text-decoration:none;
  }
`;
