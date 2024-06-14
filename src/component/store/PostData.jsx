// Your custom PostData array
const PostData = [
  {
    userId: 1,
    postId: 101,
    title: "Introduction to Bootstrap",
    date: "2023-06-01",
    content:
      "Bootstrap is a powerful, mobile-first front-end framework for faster and easier web development. It includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels, and many other components, as well as optional JavaScript plugins.",
    likes: 120,
    reactions: { love: 30, like: 60, wow: 20, sad: 5 },
    tags: ["Bootstrap", "CSS", "Framework"],
  },
  {
    userId: 2,
    postId: 102,
    title: "Getting Started with React",
    date: "2023-05-20",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    likes: 150,
    reactions: { love: 40, like: 70, wow: 25, sad: 10 },
    tags: ["React", "JavaScript", "UI"],
  },
  {
    userId: 3,
    postId: 103,
    title: "Understanding CSS Grid",
    date: "2023-04-15",
    content:
      "CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns, and has many features that make building complex layouts straightforward.",
    likes: 90,
    reactions: { love: 20, like: 40, wow: 15, sad: 5 },
    tags: ["CSS", "Grid", "Layout"],
  },
  {
    userId: 4,
    postId: 104,
    title: "Introduction to JavaScript",
    date: "2023-03-10",
    content:
      "JavaScript is a programming language that enables you to create dynamic web content. It is commonly used for client-side scripting, but can also be used for server-side development with Node.js.",
    likes: 200,
    reactions: { love: 50, like: 90, wow: 40, sad: 10 },
    tags: ["JavaScript", "Programming", "Web Development"],
  },
  {
    userId: 5,
    postId: 105,
    title: "The Power of Flexbox",
    date: "2023-02-25",
    content:
      "Flexbox is a one-dimensional layout method for laying out items in rows or columns. It provides an efficient way to distribute space among items in a container, even when their size is unknown or dynamic.",
    likes: 180,
    reactions: { love: 45, like: 80, wow: 30, sad: 10 },
    tags: ["CSS", "Flexbox", "Layout"],
  },
  {
    userId: 6,
    postId: 106,
    title: "Responsive Web Design Basics",
    date: "2023-01-15",
    content:
      "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures a consistent user experience across different devices.",
    likes: 220,
    reactions: { love: 60, like: 100, wow: 45, sad: 15 },
    tags: ["Responsive Design", "Web Design", "UX"],
  },
  {
    userId: 7,
    postId: 107,
    title: "Introduction to HTML5",
    date: "2022-12-20",
    content:
      "HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages. It introduces new elements, attributes, and behaviors, and provides a wider range of multimedia options.",
    likes: 190,
    reactions: { love: 55, like: 85, wow: 35, sad: 10 },
    tags: ["HTML5", "Markup Language", "Web Development"],
  },
  {
    userId: 8,
    postId: 108,
    title: "Working with APIs in JavaScript",
    date: "2022-11-05",
    content:
      "An API (Application Programming Interface) allows different software applications to communicate with each other. In JavaScript, you can use APIs to access data from external sources, such as web servers.",
    likes: 250,
    reactions: { love: 70, like: 110, wow: 50, sad: 20 },
    tags: ["API", "JavaScript", "Web Development"],
  },
  {
    userId: 9,
    postId: 109,
    title: "Introduction to Node.js",
    date: "2022-10-15",
    content:
      "Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It provides an event-driven architecture and non-blocking I/O operations, making it suitable for building scalable and high-performance applications.",
    likes: 280,
    reactions: { love: 80, like: 120, wow: 60, sad: 20 },
    tags: ["Node.js", "JavaScript", "Server-side"],
  },
  {
    userId: 10,
    postId: 110,
    title: "Building RESTful APIs with Express",
    date: "2022-09-30",
    content:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of building APIs by providing a simple and intuitive interface.",
    likes: 230,
    reactions: { love: 65, like: 100, wow: 45, sad: 20 },
    tags: ["Express", "API", "Node.js"],
  },
];

// Fetch data from dummyjson API
fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.posts);
    return data.posts;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

export default PostData;
