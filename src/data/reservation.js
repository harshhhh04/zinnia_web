export const RESERVATION_HEADER = {
  label: 'Reservations',
  heading: 'Reserve Your Experience',
  subheading:
    'Join us for an evening of artistic cuisine, memorable conversations, and exceptional hospitality.',
}

export const RESERVATION_INFO = {
  rating: '4.8',
  reviews: '618+',
  hours: [
    { meal: 'Lunch', time: '12:00 PM – 3:30 PM' },
    { meal: 'Dinner', time: '7:00 PM – 11:30 PM' },
  ],
  notes: [
    'Reservations recommended on weekends.',
    'Private dining and special events available upon request.',
  ],
}

export const GUEST_OPTIONS = Array.from({ length: 12 }, (_, i) => i + 1)

export const TIME_OPTIONS = [
  { label: 'Lunch', times: ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM'] },
  { label: 'Dinner', times: ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM'] },
]
