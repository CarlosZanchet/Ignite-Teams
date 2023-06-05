import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const navigate = useNavigation()
  const [group, setGroup] = useState('')

  function handleNew() {
    navigate.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title="Nova Turma" 
          subtitle="crie a turma para adicionar as pessoas" 
        />

        <Input 
          placeholder="Nome da Turma" 
          onChangeText={setGroup}
        />

        <Button 
          title="Criar" 
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}