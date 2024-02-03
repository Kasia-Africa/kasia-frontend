import styled from 'styled-components';

export const PageWrapper = styled.div.attrs(({className})=>({className: `${className || ''}`}))<{ bg?: string, isFullWidth?: boolean}>`
  max-width: ${({ theme , isFullWidth}) => isFullWidth ? '100vw' : theme.width.containerWidth};
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  width: 100%;
  background-color:  ${({ bg }) => bg || '' };
`;
const ViewAllStyle = styled.div`
color: #000;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
text-align: right;
position: relative;
bottom:70px;
`
export const ImageContainer = styled.div`
width: 119.261px;
height: 84.783px;
flex-shrink: 0;
display: flex;
justify-content: center;
margin: auto auto;
`;
export const ViewAllLink = ()=> {
  return <ViewAllStyle>
        View All
  </ViewAllStyle>
}
export const FooterListWrapper = styled.div`
line-height: 1.0;
padding-right: 20px;
width: 300px;
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
`
export const BodyWrapper = styled.main`
  // overflow: hidden;
  // display: flex;
  // flex-direction: column;
`;

export const SectionTitle = styled.h3`
//   border-top: 8px solid #000;
//   padding: 15px 0 20px;
//   width: 100%;
//   font-size: 34px;
//   margin-top: 10px;
//   font-weight: bolder;
//   text-align: center;
//   justify-self: center;
//   line-height: 45px;

//   @media (min-width: 956px) {
//     text-align: right;
//     justify-self: end;
//   }
// `;

export const SectionCaption = styled.p`
  // font-weight: 400;
  // margin: 0;
  // font-size: 16px;
  // padding: 0;
  // color: #565656;
  // white-space: pre-wrap;
  // text-align: center;

  // @media (min-width: 956px) {
  //   font-size: 24px;
  //   margin-left: 40px;
  //   text-align: left;
  // }
`;