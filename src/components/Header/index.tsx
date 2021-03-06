import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications, MdArrowBack } from "react-icons/md";

import RocketseatLogo from "../../assets/rocketseat-logo.svg";
import Avatar from "../../assets/avatar.jpg";

import {
  Container,
  Content,
  LeftContent,
  BackToPreviousPage,
  RightContent,
} from "./styles";

interface HeaderProps {
  goBackLink?: string;
  fixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ goBackLink, fixed }) => {
  return (
    <Container fixed={fixed}>
      <Content>
        <LeftContent>
          <Link to="/">
            <img src={RocketseatLogo} alt="Rocketseat" />
          </Link>

          {goBackLink && (
            <Link to={goBackLink}>
              <BackToPreviousPage>
                <MdArrowBack color="#fff" size={18} />
                <span>Voltar</span>
              </BackToPreviousPage>
            </Link>
          )}
        </LeftContent>

        <RightContent>
          <button type="button">
            <MdNotifications size={24} />
          </button>

          <Link to="/">
            <div>
              <strong>Deusdete Filho</strong>
              <small>deusdetefilho@gmail.com</small>
            </div>

            <img src={Avatar} alt="Deusdete" />
          </Link>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Header;
