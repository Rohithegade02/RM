import styled from 'styled-components';

export const Section = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: #E0E0F8;
    background-image:url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sentinelassam.com%2Fnational-news%2Findian-railways-cancel-over-300-trains-on-18-feb-check-the-train-names-578953&psig=AOvVaw12Fqu8OBP8SeENCW5L7seM&ust=1646197776646000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiCo-KSpPYCFQAAAAAdAAAAABAL");
`
export const Holder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 425px;
    background-color: white;

    @media screen and (max-width: 768px){
        width: 85%;
    }
`

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 0.9fr 1.1fr;
    grid-gap: 5px;
    place-items: center;

    @media screen and (max-width: 768px){
        grid-template-columns: unset;
        grid-gap: unset;
        place-items: center;
    }
`

export const Left = styled.div`
    display: grid;
    place-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Logo = styled.img`
    width: 100%;
    height: 100%;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 100%;
        justify-content: center;
    }
`

export const Ice = styled.img`
    width: 60%;
    display: grid;
   place-items: center;
`

export const Form = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 10px 0px;
    grid-template-rows: 1fr 1fr 1fr;
`