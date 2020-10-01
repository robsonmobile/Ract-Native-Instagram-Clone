export const currentUserPostArray = [
  {
    id: 1,
    user: {
      username: "Safak",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://wplook.com/wp-content/uploads/2018/03/instagram-photo-size-square-1080.jpg",
      desc: "good morning",
      date: Date.now(),
    },
    likes: 123,
    comments: [
      {
        id: 1,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 2,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 3,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 2,
    user: {
      username: "Safak",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/4132436/pexels-photo-4132436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "hello my friends. Its a rainy day!",
      date: Date.now(),
    },
    likes: 13,
    comments: [
      {
        id: 4,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 5,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 6,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 3,
    user: {
      username: "Safak",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/3961581/pexels-photo-3961581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Such a beautiful view...",
      date: Date.now(),
    },
    likes: 23,
    comments: [
      {
        id: 7,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 8,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 9,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 4,
    user: {
      username: "Safak",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/4132436/pexels-photo-4132436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Hi!",
      date: Date.now(),
    },
    likes: 61,
    comments: [
      {
        id: 10,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 11,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 12,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 5,
    user: {
      username: "Safak",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/3961581/pexels-photo-3961581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "what a wonderful world...",
      date: Date.now(),
    },
    likes: 17,
    comments: [
      {
        id: 13,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 14,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 15,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
];

export const otherUserPostArray = [
  {
    id: 1,
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://wplook.com/wp-content/uploads/2018/03/instagram-photo-size-square-1080.jpg",
      desc: "good morning",
      date: Date.now(),
    },
    likes: 123,
    comments: [
      {
        id: 1,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 2,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 3,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 2,
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/4132436/pexels-photo-4132436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "hello my friends. Its a rainy day!",
      date: Date.now(),
    },
    likes: 13,
    comments: [
      {
        id: 4,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 5,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 6,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 3,
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/3961581/pexels-photo-3961581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Such a beautiful view...",
      date: Date.now(),
    },
    likes: 23,
    comments: [
      {
        id: 7,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 8,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 9,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 4,
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/4132436/pexels-photo-4132436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Hi!",
      date: Date.now(),
    },
    likes: 61,
    comments: [
      {
        id: 10,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 11,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 12,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 5,
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/3961581/pexels-photo-3961581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "what a wonderful world...",
      date: Date.now(),
    },
    likes: 17,
    comments: [
      {
        id: 13,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 14,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 15,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
];

export const feedPostArray = [
  {
    id: 1,
    user: {
      username: "Anna",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://cdn.vox-cdn.com/thumbor/s6cI4NEU9hgaUFjXfyVPMmMc044=/cdn.vox-cdn.com/uploads/chorus_asset/file/3847870/11376655_479893395513491_201556343_n.0.jpg",
      desc: "good morning",
      date: Date.now().getTime()-(7*24*3600000),
    },
    likes: 123,
    comments: [
      {
        id: 1,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 2,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 3,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 2,
    user: {
      username: "John",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/4132436/pexels-photo-4132436.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "hello my friends. Its a rainy day!",
      date: Date.now(),
    },
    likes: 13,
    comments: [
      {
        id: 4,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 5,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 6,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 3,
    user: {
      username: "Garry",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://images.pexels.com/photos/3961581/pexels-photo-3961581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Such a beautiful view...",
      date: Date.now(),
    },
    likes: 23,
    comments: [
      {
        id: 7,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 8,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 9,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 4,
    user: {
      username: "Helena",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image:
        "https://cdn.vox-cdn.com/thumbor/ij3w3ZbVR5-vqsDk9W4_wZCbLrI=/cdn.vox-cdn.com/uploads/chorus_asset/file/3847972/11379249_1467686426858468_402561493_n.0.jpg",
      desc: "Hi!",
      date: Date.now(),
    },
    likes: 61,
    comments: [
      {
        id: 10,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 11,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 12,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 5,
    user: {
      username: "Edd",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image: "https://wallpapercave.com/wp/wp3788129.jpg",
      desc: "what a wonderful world...",
      date: Date.now(),
    },
    likes: 17,
    comments: [
      {
        id: 13,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 14,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 15,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 6,
    user: {
      username: "jane",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image: "https://wallpapercave.com/wp/wp3788202.jpg",
      desc: "what a wonderful world...",
      date: Date.now(),
    },
    likes: 17,
    comments: [
      {
        id: 14,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 15,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 16,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 7,
    user: {
      username: "harry",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image: "https://wallpapercave.com/wp/wp3788206.jpg",
      desc: "what a wonderful world...",
      date: Date.now(),
    },
    likes: 17,
    comments: [
      {
        id: 18,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 19,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 20,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 8,
    user: {
      username: "marry",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image: "https://wallpapercave.com/wp/wp3788220.jpg",
      desc: "what a wonderful world...",
      date: Date.now(),
    },
    likes: 17,
    comments: [
      {
        id: 21,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 22,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 23,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
  {
    id: 9,
    user: {
      username: "jim",
      profilePicture:
        "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    content: {
      image: "https://wallpapercave.com/wp/wp3788233.jpg",
      desc: "what a wonderful world...",
      date: Date.now(),
    },
    likes: 17,
    comments: [
      {
        id: 24,
        user: {
          username: "Anna",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Nice pic bro :)",
        parent: null,
      },
      {
        id: 25,
        user: {
          username: "John",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "Cool",
        parent: null,
      },
      {
        id: 26,
        user: {
          username: "Alex",
          profilePicture:
            "https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        text: "No its not!",
        parent: 2,
      },
    ],
  },
];
