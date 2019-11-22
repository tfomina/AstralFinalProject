import { APP_ACTIONS } from "./../constants";

const getInitialState = () => [
  {
    id: "147d92ae-b3ae-4d0a-9f43-6983cfceef3c",
    image: `./../images/img_1.jpg`,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #hashtag #frame #image",
    comments: [
      {
        id: "b8b61e47-aed9-4551-b15e-44d14a416127",
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd",
        text: "Phasellus efficitur vestibulum nisl in bibendum."
      },
      {
        id: "6a54ee15-7efb-431a-80ae-1cd76f5de860",
        userId: "e566d47f-502f-4f2c-b1b6-2f19d5f372a3",
        text:
          "Nam suscipit libero vel enim faucibus auctor. Morbi faucibus tincidunt ligula quis congue. Duis quis nisi metus. Donec rutrum turpis mauris, vel vestibulum velit varius sed. Nullam eu quam mollis, consectetur tellus vel, aliquet dolor. Sed quam leo, vulputate vel ligula a, venenatis consequat turpis. Fusce non dictum tellus. Proin ornare faucibus velit, id faucibus eros."
      },
      {
        id: "ca329dd5-0d68-46d3-b81a-d2b79803faa4",
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd",
        text: "Cras non lacinia est."
      }
    ],
    likes: [
      {
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd"
      },
      {
        userId: "e566d47f-502f-4f2c-b1b6-2f19d5f372a3"
      }
    ]
  },
  {
    id: "efbe32d1-7358-4ddc-b607-9ce84484da88",
    image: `./../images/img_2.jpg`,
    text: "Duis laoreet vitae purus in viverra. #hashtag #frame #image",
    comments: [],
    likes: []
  },
  {
    id: "2bffa061-4977-4dd0-8ec8-e9099d5d3457",
    image: `./../images/img_3.jpg`,
    text:
      "Phasellus efficitur vestibulum nisl in bibendum. #hashtag #frame #image",
    comments: [],
    likes: [
      {
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd"
      },
      {
        userId: "e566d47f-502f-4f2c-b1b6-2f19d5f372a3"
      }
    ]
  },
  {
    id: "2207f9fd-3cce-46f6-815b-068efa159e15",
    image: `./../images/img_4.jpg`,
    text:
      "Phasellus vulputate ex tincidunt imperdiet auctor. #hashtag #frame #image",
    comments: [
      {
        id: "b9f8375a-034b-4ded-842b-4c0f2fc94987",
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd",
        text: "Phasellus efficitur vestibulum nisl in bibendum."
      },
      {
        id: "3e612913-879d-4c76-abb5-fbe55d5d97e5",
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd",
        text: "Cras non lacinia est."
      }
    ],
    likes: [
      {
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd"
      }
    ]
  },
  {
    id: "8a88646b-0ad2-4ae7-99e2-7a08b465d6ab",
    image: `./../images/img_5.jpg`,
    text:
      "Aenean ac mi egestas, semper nisl vel, pulvinar neque. In consequat enim id malesuada malesuada. Quisque ultricies, lectus et semper sodales. #hashtag #frame #image",
    comments: [
      {
        id: "c94e4015-8c09-4290-ad24-8b06ea528fd5",
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd",
        text: "Phasellus efficitur vestibulum nisl in bibendum."
      },
      {
        id: "6819869c-797b-4671-9978-4e59c7af12f9",
        userId: "9f15cdc6-a40d-4579-a125-432285a2fbfd",
        text: "Cras non lacinia est."
      }
    ],
    likes: [
      {
        userId: "e566d47f-502f-4f2c-b1b6-2f19d5f372a3"
      }
    ]
  },
  {
    id: "49f9a4ef-fb8c-4339-9051-5e0381082682",
    image: `./../images/img_6.jpg`,
    text: "Cras non lacinia est. #hashtag #frame #image",
    comments: [],
    likes: []
  },
  {
    id: "1a470f6b-89ed-4f92-bfad-b91a7fff2cab",
    image: `./../images/img_7.jpg`,
    text:
      "Aenean ac mi egestas, semper nisl vel, pulvinar neque. In consequat enim id malesuada malesuada. Quisque ultricies, lectus et semper sodales, eros neque posuere nunc, sit amet finibus eros massa at sem. #hashtag #frame #image",
    comments: [],
    likes: [
      {
        userId: "e566d47f-502f-4f2c-b1b6-2f19d5f372a3"
      }
    ]
  },
  {
    id: "a022e54e-8289-4960-9da0-7d9b48a73b36",
    image: `./../images/img_8.jpg`,
    text:
      "Curabitur dictum massa venenatis luctus molestie. Donec tempor lectus sit amet feugiat commodo. Cras aliquam posuere neque. #hashtag #frame #image",
    comments: [],
    likes: []
  },
  {
    id: "ad019837-b9dc-42b9-9ea9-d5fc3d92c919",
    image: `./../images/img_9.jpg`,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #hashtag #frame #image",
    comments: [],
    likes: []
  },
  {
    id: "a5d81fed-59b7-446c-a9f6-c35037b0bfdf",
    image: `./../images/img_1.jpg`,
    text: "Cras non lacinia est. #hashtag #frame #image",
    comments: [],
    likes: []
  }
];
const initialState = getInitialState();

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTIONS.ADD_COMMENT: {
      const { postId, comment } = action.payload;
      return state.map(s =>
        s.id === postId ? { ...s, comments: [...s.comments, comment] } : s
      );
    }

    case APP_ACTIONS.DELETE_COMMENT: {
      const { id, postId, userId } = action.payload;
      const comments = state.find(s => s.id === postId).comments;
      const comment = comments.findIndex(c => c.userId === userId);
      if (comment == -1) return state;

      return state.map(s =>
        s.id === postId
          ? { ...s, comments: s.comments.filter(c => c.id !== id) }
          : s
      );
    }

    case APP_ACTIONS.TOGGLE_LIKE: {
      const { postId, currentUserId } = action.payload;

      return state.map(s =>
        s.id === postId
          ? {
              ...s,
              likes:
                s.likes.findIndex(l => l.userId === currentUserId) == -1
                  ? [...s.likes, { userId: currentUserId }]
                  : s.likes.filter(l => l.userId !== currentUserId)
            }
          : s
      );
    }

    default:
      return state;
  }
};

export default postsReducer;
