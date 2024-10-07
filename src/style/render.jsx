import { styled} from "styled-components";

export const Render = styled.div`
    display: flex;
    justify-content: space-between;
    width: 544PX;

    .card-skinPreview{
        width: 222px;
        border-radius: 10px;
        background-color: #0F5132;
    }

    .skinPreview{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .usuario{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
`