import {
    useQuery,
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'
  import {get,post} from '../../src/api/UserPost'
import { IUser } from '../../src/interfaces/User'

function PostUser() {
  const queryClient = useQueryClient()

  // Queries
  const query = useQuery({ queryKey: ['users'], queryFn: get })

  // Mutations
  const mutation = useMutation({
    mutationFn: post,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
console.log(mutation)
  return (
    <div>
      
      <ul>
        {query.data?.data.map((users: IUser) => (
          <li key={users.id}>{users.email}</li>
        ))}
      </ul>
      <form>
        Email:<input type='email' name='email'/>
        FirstName:<input type='text' name='firstName'/>
        LastName:<input type='text' name='lastName'/>
      </form>

      
      <button type='submit'
        onClick={() => {
          mutation.mutate({
            first_name: "Pablo",
            last_name: "Fernandez",
            email: "@gmail.com",   
          })
        }}
      >
        Añademe
      </button>


    </div>
  )
}


export default PostUser