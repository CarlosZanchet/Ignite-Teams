import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const navigation = useNavigation()
  const [groups, setGroups] = useState<string[]>([])

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <Container>
        <Header showBackButton />
        <Highlight title="Título" subtitle='Subtitle group' />

        <FlatList  
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item} 
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={groups.length === 0 && { flex: 1}}
          ListEmptyComponent={() => (
            <ListEmpty message='Que tal cadastrar a primeira turma?' />
          )}
        />

        <Button title='Criar Nova Turma' onPress={handleNewGroup} />
    </Container>
  );
}