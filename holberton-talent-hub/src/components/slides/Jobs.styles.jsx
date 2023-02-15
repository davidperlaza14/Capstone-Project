import styled from 'styled-components';

export const SlideWrapper = styled.section`
& {
    background: #1e2326;
    margin: auto;
    padding: 0 10px;
}


& .job-container {
  padding: 20px;    
  background-color: #1e2326;
  max-width: 100%;
  margin: auto;
  text-align: center;
  color: white;
}


& h1 {
  align: center;
  color: #8beeee;
  padding: 10px;
  font-size: 50px;
}

& .job-container p {
  align: center;
  color: #white;
  font-size: 20px;
  
}

& .talent-container {
  margin: auto;
  max-width: 90%;
  /*border: 1px solid black;*/
  /*background: #515151;*/
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 20px;
  justify-content: space-around;
  text-align: center;
}

& .talents {
  max-width: 400px;
  padding: 20px;
  border: 1px solid black;
  background-color: #e4e4e4;
  color: black;
  font-family: 'Inconsolata';
  font-weight: bold;
  border-radius: 20px;
  line-height: 20px;
  text-align: center;
  flex-grow: 1;  
}

& .talent-img {
  max-width: 400px;
  box-shadow: 0 3px 13px 10px rgb(9 129 119 / 100%);
  border-radius: 50%;
}
`;

