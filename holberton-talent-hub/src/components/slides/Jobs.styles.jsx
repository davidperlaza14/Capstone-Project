import styled from 'styled-components';

export const SlideWrapper = styled.section`
& {
    background: #1e2326;
    margin: auto;
}

& .job-slide {
  padding: 20px;    
  background-color: #1e2326;
  max-width: 90%;
  margin: auto;
  text-align: center;
}

& .job-container {
  padding: 20px;    
  background-color: #181818;
  max-width: 90%;
  margin: auto;
  text-align: center;
  color: white;
}

& .job-img {
  max-width: 90%;
  box-shadow: 0 3px 8px 8px rgb(255 255 255 / 50%);

}

& h1 {
  align: center;
  color: #8beeee;
}

& .talent-container {
  margin: auto;
  max-width: 90%;
  border: 1px solid black;
  background: #515151;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  /*line-height: 120px;*/
  text-align: center;
  flex-grow: 1;  
}

& .talent-img {
  max-width: 400px;
  box-shadow: 0 3px 13px 10px rgb(9 129 119 / 100%);
  border-radius: 50%;
}
`;

