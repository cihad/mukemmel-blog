import parseMarkdownWithYaml from 'gray-matter'

const posts = (context => {
  const keys = context.keys();
  const values = keys.map(context);
  const data = keys.map((key, index) => {
    // Dosya adindan slug aliyoruz
    const slug = key
      .replace(/^.*[\\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join(".");

    const value = values[index];
    
    const { content, data } = parseMarkdownWithYaml(value.default);
    const { title, date } = data;

    return {
      details: content,
      title,
      slug,
      date
    };
  });
  return data;
})(require.context("./posts/", true, /\.md$/));

export const getPosts = () => {
  return posts;
};
