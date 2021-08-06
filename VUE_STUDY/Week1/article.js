const el = (tag) => document.createElement(tag);

const deleteArticle = (_id) => {
  axios.delete(`https://api.t0dd.kr/v0/article/${_id}`);
  let articleDom = document.querySelector("#article");

  setTimeout(() => {
    renderArticle();
  }, 100);
};

const renderArticle = () => {
  axios.get("https://api.t0dd.kr/v0/articles").then((response) => {
    let articleCount = response.data.count;
    axios
      .get(`https://api.t0dd.kr/v0/articles?take=${articleCount}&index=0`)
      .then((res) => {
        let article = res.data.articles;
        let articleDom = document.querySelector("#article");

        articleDom.innerHTML = "";

        article.map((v, i) => {
          let trDom = el("tr");
          let indexDom = el("td");
          let titleDom = el("td");
          let contentDom = el("td");
          let createdAtDom = el("td");
          let likeDom = el("td");
          let authorDom = el("td");
          let deleteDom = el("td");

          indexDom.append(i + 1);
          titleDom.innerHTML = `
            <a href="javascript:void(0)" onclick="editArticle('${v._id}')">${v.title}</a>
          `;

          contentDom.append(v.content);
          createdAtDom.append(v.createdAt);
          likeDom.append(v.like + v.dislike);
          authorDom.append(v.author);
          deleteDom.innerHTML = `
            <button onclick=deleteArticle('${v._id}')>삭제</button>
          `;

          trDom.append(
            indexDom,
            titleDom,
            contentDom,
            createdAtDom,
            likeDom,
            authorDom,
            deleteDom
          );
          articleDom.append(trDom);
        });
      });
  });
};

const editArticle = (id) => {
  axios.get(`https://api.t0dd.kr/v0/article/${id}`).then((response) => {
    let article = response.data;
    document.querySelector("#edit__author").value = article.author;
    document.querySelector("#edit__title").value = article.title;
    document.querySelector("#edit__content").value = article.content;

    document.querySelector("#update").addEventListener("click", () => {
      axios({
        method: "put",
        url: `https://api.t0dd.kr/v0/article/${id}`,
        data: {
          author: document.querySelector("#edit__author").value,
          title: document.querySelector("#edit__title").value,
          content: document.querySelector("#edit__content").value,
        },
      });

      setTimeout(() => {
        renderArticle();
        resetEdits();
      }, 100);
    });
  });
};

const postArticle = () => {
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    let author = document.querySelector("#post__author").value;
    let title = document.querySelector("#post__title").value;
    let content = document.querySelector("#post__content").value;

    axios({
      method: "post",
      url: "https://api.t0dd.kr/v0/article",
      data: {
        author: author,
        title: title,
        content: content,
      },
    });
    setTimeout(() => {
      renderArticle();
      resetInputs();
    }, 100);
  });
};

const resetInputs = () => {
  document.querySelector("#post__author").value = "";
  document.querySelector("#post__title").value = "";
  document.querySelector("#post__content").value = "";
};

const resetEdits = () => {
  document.querySelector("#edit__author").value = "";
  document.querySelector("#edit__title").value = "";
  document.querySelector("#edit__content").value = "";
};

const init = () => {
  renderArticle();
  postArticle();
};

init();
