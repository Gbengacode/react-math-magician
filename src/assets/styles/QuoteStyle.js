import styled from 'styled-components';

export default styled.div`
    width: 400px;
    border: 5px solid #fff;
    margin: 100px auto;
    padding: 40px;
    p {
        color: #fff;
        font-size: 20px;
        text-align: center
        
    }
    @media(max-width: 768px) {
        width: 300px;
        border: 5px solid #fff;
        margin: 100px auto;
        padding: 30px;
        p {
            color: #fff;
            font-size: 15px;
            text-align: center
            
        }   
    }

`;
