function wait(ms_time = 0) {
  return new Promise((resolve, reject)=> {
    setTimeout((...args)=> resolve(args), ms_time);
  });
}

export async function fetchEvents() {
  await wait(16);
  return [
    {
      name: 'Event 1',
      description: 'A sample event description.'
    },
    {
      name: 'Event 2',
      description: 'A sample event description.'
    },
    {
      name: 'Event 3',
      description: 'A sample event description.'
    },
    {
      name: 'Event 4',
      description: 'A sample event description.'
    },
        {
      name: 'Event 5',
      description: 'A sample event description.'
    },
    {
      name: 'Event 6',
      description: 'A sample event description.'
    },
    {
      name: 'Event 7',
      description: 'A sample event description.'
    },
    {
      name: 'Event 8',
      description: 'A sample event description.'
    },
        {
      name: 'Event 9',
      description: 'A sample event description.'
    },
    {
      name: 'Event 10',
      description: 'A sample event description.'
    },
    {
      name: 'Event 11',
      description: 'A sample event description.'
    },
    {
      name: 'Event 12',
      description: 'A sample event description.'
    },
        {
      name: 'Event 13',
      description: 'A sample event description.'
    },
    {
      name: 'Event 14',
      description: 'A sample event description.'
    },
    {
      name: 'Event 15',
      description: 'A sample event description.'
    },
    {
      name: 'Event 16',
      description: 'A sample event description.'
    }
  ]
}
