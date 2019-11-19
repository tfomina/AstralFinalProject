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
        id: "ca329dd5-0d68-46d3-b81a-d2b79803faa4",
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
    likes: []
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
    likes: []
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
    default:
      return state;
  }
};

export default postsReducer;
