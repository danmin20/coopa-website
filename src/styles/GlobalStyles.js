import { createGlobalStyle } from "styled-components";
import reset from "styled-components";

export default createGlobalStyle`
    ${reset}
    html{
        font-size: 10px;
    }
    body{
        // Todo: font-family setting
        /* font-family: popins, Spoqa Han Sans Neo; */
    }
`;
