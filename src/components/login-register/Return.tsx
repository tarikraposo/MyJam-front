import { Link } from "react-router-dom";
import styled from "styled-components";

export function Return() {
    return (
        <BoxReturn>
            <div>
                <Link to={'/home'}><img src="src/assets/login-register/seta.svg" className="link"/></Link>
                <img src="src/assets/login-register/logo.svg" className="logo"/>
            </div>
        </BoxReturn>
    );
}

const BoxReturn = styled.div`
    .link {
        max-width: 24px;
        margin-right: 102px;
    }
    .logo {
        max-width: 191px;
    }
`;