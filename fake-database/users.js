export class Users {
  static #data = [
    {
      name: "Ahmed Alaa",
      avatar: "https://cdn.fakercloud.com/avatars/stephcoue_128.jpg",
      password: "123",
      userName: "ahmed.alaa",
      id: "1",
    },
    {
      name: "Felix Doyle",
      avatar: "https://cdn.fakercloud.com/avatars/el_fuertisimo_128.jpg",
      password: "123",
      userName: "Nya20",
      id: "2",
    },
    {
      name: "Drew Marvin",
      avatar: "https://cdn.fakercloud.com/avatars/dorphern_128.jpg",
      password: "123",
      userName: "Garnet.Turcotte41",
      id: "3",
    },
  ];
  static getUsers() {
    return new Promise(function (resolve, reject) {
        //[TODO] we need to remove password property from each object before return the list
        if(Users.#data.length){
            resolve(JSON.stringify(Users.#data));
        }else{
            reject("there aren't data!")
        }
       
    });
  }
  static signIn(userName, userPassword) {
    return new Promise(function (resolve, reject) {
      let user = Users.#data.find(
        (user) => user.userName === userName && user.password === userPassword
      );
      if (user) {
        //delete user.password; //before return the user object, the user password property deleted because it's a sensitive information
        resolve(JSON.stringify(user));
      } else {
        reject("sorry, invalid credentials!\nplease try again!");
      }
    });
  }
}
