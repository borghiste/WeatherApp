import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html, body {box-sizing:border-box;
    margin: 0;
    padding: 0;
 background-color:${(props)=>props.theme.primary};

 color:white; 
  }

  body {
    color:white;
    font-family: 'Arial', sans-serif;


 
    h2{
      font-size:${(props)=> props.theme.s3};
      line-height: 39px;
    }

    h3{
      font-size:${(props)=> props.theme.s1};
      line-height:0.2;
    }

    p{
      font-size:${(props)=> props.theme.default};
      
    }
    a{text-decoration:none;
    color:white;}
  }

.big-text {font-size:${(props) => props.theme.s6};
margin:0;

}



`

export default GlobalStyles;