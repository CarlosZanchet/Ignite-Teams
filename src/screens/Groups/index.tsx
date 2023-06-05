import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupGetAll } from '@storage/group/groupsGetAll';
import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const navigation = useNavigation()
  const [groups, setGroups] = useState<string[]>([])

  function handleNewGroup() {
    navigation.navigate('new')
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  async function fetchGroups() {
    try {
      const data = await groupGetAll()
      setGroups(data)
    } catch (err) {
      console.log(err)
    }
  }

  function handleOpeGroup(group: string) {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
        <Header showBackButton />
        <Highlight title="Turmas" subtitle='jogue com a sua turma' />

        <FlatList  
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item} 
              onPress={() => handleOpeGroup(item)}
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