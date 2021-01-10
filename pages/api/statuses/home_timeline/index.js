const timelime = [
  {
    id: 0,
    avatar:
      "https://pixabay.com/get/57e8d1464253a814f6d1867dda3536781536d9e756537041_1920.jpg",
    username: "Santi64",
    message: "Bum",
  },
  {
    id: 1,
    avatar:
      "https://pixabay.com/get/57e8d0434d52af14f6d1867dda3536781536d9e75650704b_1920.jpg",
    username: "Thovim",
    message: "Thanks",
    name: "Haessler",
  },
  {
    id: 2,
    avatar:
      "https://pixabay.com/get/53e6d7464350ae14f6d1867dda3536781536d9e75652794d_1920.jpg",
    username: "Midu",
    message: "Great",
    name: "Miguel",
  },
]
export default function (req, res) {
  res.status(200).json(timelime)
}
