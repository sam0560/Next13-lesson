async function getTicketDetails(id){
    const res = await fetch(`http://localhost:4000/tickets/${id}`);

    return res.json();
}

export default async function page({ params }) {
  const ticket = await getTicketDetails(params.id)
  return (
    <main>
        <nav>
            <h2>
                Ticket Detail
            </h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by: {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}
