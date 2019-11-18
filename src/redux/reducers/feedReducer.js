const getInitialState = () => [
  {
    id: "147d92ae-b3ae-4d0a-9f43-6983cfceef3c",
    image: `./../images/img_1.jpg`,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #hashtag #frame #image",
    comments: [],
    likes: []
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
    likes: []
  },
  {
    id: "2207f9fd-3cce-46f6-815b-068efa159e15",
    image: `./../images/img_4.jpg`,
    text:
      "Phasellus vulputate ex tincidunt imperdiet auctor. #hashtag #frame #image",
    comments: [],
    likes: []
  },
  {
    id: "8a88646b-0ad2-4ae7-99e2-7a08b465d6ab",
    image: `./../images/img_5.jpg`,
    text:
      "Aenean ac mi egestas, semper nisl vel, pulvinar neque. In consequat enim id malesuada malesuada. Quisque ultricies, lectus et semper sodales. #hashtag #frame #image",
    comments: [],
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

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default feedReducer;
