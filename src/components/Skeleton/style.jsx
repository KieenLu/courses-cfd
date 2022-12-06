import styled from "styled-components";

export const SkeletonStyled  = styled.span`

background: #eee;
display: inline-block;
background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
border-radius: 5px;
background-size: 200% 100%;
width: 100%;
animation: 1.5s shine linear infinite;
&.circle{
border-radius: 100%;

}
@keyframes shine {
   to{
    background-position-x: -200%;
    
   }
    
}
`