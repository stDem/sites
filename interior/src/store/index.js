import { createStore } from "vuex";
export default createStore({
  state: {
        sliderText: [{ id: 1, title: 'Bedroom Lighting Tips to Make Your Bedroom Feel Extra Cosy', text: 'The perfect lighting for the bedroom is essential to ensure warmth and comfort in the room. In addition, different light sources can enhance the decor and bring much more practicality to everyday life. There is a wide variety of lighting options; that can help you create the perfect ambience in your room. There are countless ways to use light to your advantage and brighten up your room smartly and stylishly—whether direct lighting through ceiling light fixtures, indirect lighting, or lampshades on top of the nightstand or bedside wall lights.' }],
      
  },
  getters: {},
//   mutations: {
//     setData(state, data) {
//       state.sliderText = data;
//     },
//   },
//   actions: {
    // getData(context) {
    //   setTimeout(() => {
    //     const dataFromServer = [
    //       {
    //         id: 1,
    //         title: "Minimal Look Bedrooms",
    //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laborum unde reprehenderit eligendi accusamus nisi? Perspiciatis quisquam at fugiat accusamus possimus optio cupiditate dolore nesciunt aspernatur excepturi. Esse culpa quibusdam quidem, maxime, doloribus suscipit pariatur illum aperiam voluptatibus voluptate mollitia rerum. Nulla at earum nemo ab iste debitis unde omnis?",
    //       },
    //     ];
    //     context.commit("setData", dataFromServer);
    //   }, 1000);
    // },
//   },
  modules: {},
});
