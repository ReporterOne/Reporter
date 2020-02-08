import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Avatar from '~/components/Avatar/Avatar.jsx';
import Option from '~/components/Menu/MenuOption.jsx';
import dashboardIconUrl from '~/assets/dashboard.svg';
import commanderIconUrl from '~/assets/whistle.svg';
import operatorIconUrl from '~/assets/signature.svg';
import hierarchyIconUrl from '~/assets/hierarchy.svg';
import settingsIconUrl from '~/assets/settings.svg';
import {Container, SVGIcon} from '~/components/common';
import {useSelector} from "react-redux";

const OptionsContainer = styled(Container)`
  align-items: center;
  padding: 25px 0 10px 0;
`;

const Separator = styled.div`
  height: 2px;
  width: 70%;
  background-color: #888888;
  margin: 15px 0;
`;

const Spacer = styled.div`
  flex: 1;
`;

export const Menu = React.memo(({avatar, avatarRef}) => {
  const {icon_path: iconPath} = useSelector((state) => _.find(state.users.all, {id: state.users.me}) ?? {});
  return (
    <OptionsContainer stretched>
      <Avatar appearing={avatar.appearing} manual={avatar.manual} innerRef={avatarRef} kind={parseInt(iconPath?? '0')} status="here" jumping={true}/>
      <Separator />
      <Option selected path="/" id="dashboardButton">
        <SVGIcon src={dashboardIconUrl} size={20} />
      </Option>
      <Option path="/commander" id="commanderButton">
        <SVGIcon src={commanderIconUrl} size={20} />
      </Option>
      <Option path="/operator" id="operatorButton">
        <SVGIcon src={operatorIconUrl} size={20} />
      </Option>
      <Option path="/hierarchy" id="hierarchyButton">
        <SVGIcon src={hierarchyIconUrl} size={20} />
      </Option>
      <Spacer />
      <Separator />
      <Container>
        <Option path="/settings" id="settingsButton">
          <SVGIcon src={settingsIconUrl} size={20} />
        </Option>
      </Container>
    </OptionsContainer>
  );
}, (props, prevProps) => _.isEqual(props, prevProps));


Menu.displayName = 'Menu';

export default Menu;
