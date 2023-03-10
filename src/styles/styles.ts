import styled from "styled-components";

export const ContainerApp = styled.div`
    display:grid;
    grid-template-columns: max-content max-content;
  
    grid-template-areas: 
    'A B'
    'A C';
    gap: 32px;
    place-content: center;
    height: 100vh;


    /* Player 1 */
    #player-1 {
        grid-area: A;
        padding: 50px 38px;
    }

    #player-1 .wrapper {
        width: 190px;
    }

    #player-1 img {
        width: 190px;
        height: 190px;
        object-fit: cover;

        border-radius: 6px;
    }

    #player-1 .info {
        margin-top: 28px;
    }

    /* Player 2 */
    #player-2 {
        grid-area: B;
        height: fit-content;
    }


    /* Player 3 */
    #player-3 {
        grid-area: C;
    }

    .player {
        background-color: #7C0C24;
        padding: 28px;
        border-radius: 10px;
    }

    .player img {
        width: 84px;
        height: 84px;
        object-fit: cover;

        border-radius: 6px;
    }

    .info-wrapper {
        display: flex;
        align-items: center;;
        gap:28px;
   }

    .info {
        color: #e1e1e6;
    }

    .info h1 {
        font-size: 24px;
        margin-bottom: 9.6px;
    }
    .info p {
        opacity: 0.67;
        font-size: 19px
    }

    .controls {
        display: flex;
        justify-content: space-between;
        color: #e1e1e6;
        margin-top: 28px;
    }

    .horizontal .controls {
        padding-inline: 58px;
    }
   
    .track {
        margin-top: 28px;
        position: relative;
    }

    .track::before {
        content: '';
        height: 6px;
        width: 100%;
        display: block;
        background:  #d9d9d9;
        opacity: 0.3;
        border-radius: 10px;

        position: absolute;
    }

    .track::after {
        content: '';
        height: 6px;
        width: 80%;
        display: block;
        background:  #d9d9d9;
        border-radius: 10px;
    }

    .time {
        font-size:14px;
        color: #c4c4c4;
        opacity: 0.7;
        display: flex;
        justify-content: space-between;
        margin-top: 9.6px;
    }
    

    @media (max-width: 670px) {
        
        display: flex;
        flex-direction: column;
        max-width: 270px;
        margin: auto;
        height: auto;
        padding-block: 60px;

        .horizontal .controls {
            padding-inline: 30px;
        }
    }
`