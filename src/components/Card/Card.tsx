import {
  Box,
  BoxContainer,
  Input
} from "./style"

import { login } from '../../services/login';
import Button from "../Button";

export const Card = () => {
  return(
    <Box>
        <BoxContainer>
            <h1>Faça o login</h1>
          <Input placeholder="email" type="email"/>
          <Input placeholder="password" type="password"/>
          <Button onClickEvent={login} text={"login"} />
        </BoxContainer>
      </Box>
  )
}