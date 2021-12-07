export default interface IEvent {
  name?: string
  category?: string
  date?: string
  hour?: string
  imageUrl?: string
  organizer?: string
  ticketLots?: string
  createdAt: Date
  updatedAt: Date
}
