import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Title from '../../components/Title'
import Trash from '../../assets/trash.svg'
import { useNavigate } from 'react-router-dom'
import { AvatarUser, CardUsers, Container, ContainerUsers, TrashIcon } from './styles'


function ListUsers() {
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()

    }, [])

    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`)

        const upadatedUsers = users.filter(user => user.id !== id)
        setUsers(upadatedUsers)
    }


    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>

                        </div>
                        <TrashIcon src={Trash} alt="icone-de-lixo" onClick={() => deleteUser(user.id)} />
                    </CardUsers>

                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    );
}

export default ListUsers;