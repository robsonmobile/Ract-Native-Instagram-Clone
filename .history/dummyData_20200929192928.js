import faker from "faker";

export let currentUserPostArray = [];

for (var i = 1; i < 17; i++) {
  const post = {
    id: i,
    user: {
      username: "Safak",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image: faker.image.nature(),
      desc: faker.lorem.sentence(),
      date: faker.time.recent(),
    },
    likes: faker.random.number() / 100,
    comments: [
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
    ],
  };
  currentUserPostArray.push(post);
}

export let otherUserPostArray = [];

for (var i = 1; i < 17; i++) {
  const name = faker.name.firstName();
  const pp = faker.image.avatar();

  const post = {
    id: i,
    user: {
      username: name,
      profilePicture: pp,
    },
    content: {
      image: faker.image.nature(),
      desc: faker.lorem.sentence(),
      date: faker.time.recent(),
    },
    likes: faker.random.number() / 100,
    comments: [
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
    ],
  };
  currentUserPostArray.push(post);
}

export let feedPostArray = [];

for (var i = 1; i < 10; i++) {
  const post = {
    id: i,
    user: {
      username: faker.name.firstName(),
      profilePicture: faker.image.avatar(),
    },
    content: {
      image: faker.image.nature(),
      desc: faker.lorem.sentence(),
      date: faker.time.recent(),
    },
    likes: faker.random.number() / 100,
    comments: [
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
      {
        id: faker.random.number(),
        user: {
          username: faker.name.findName(),
          profilePicture: faker.image.avatar(),
        },
        text: faker.lorem.sentence(),
      },
    ],
  };
  array.push(post);
}
