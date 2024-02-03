import styled from "styled-components"

const PaginationContainer = styled.div`
   margin: 0 auto;
   display: flex;
   gap: 10px;
   max-width: 420px;
   margin-top: 35px;
`
const PaginationNumber = styled.span `
  border: 1px solid black;
  padding: 9px;
  box-sizing: border-box;
`;
export const Pagination:React.FC = ()=> {
    return (
     <PaginationContainer>
        <PaginationNumber>1</PaginationNumber>
        <PaginationNumber>2</PaginationNumber>
        <PaginationNumber>3</PaginationNumber>
        <PaginationNumber>4</PaginationNumber>
        <h3 className="relative top-3">NEXT<span className="ml-5 relative">{'>'}</span></h3>
     </PaginationContainer>
    )
}