


const constructFromPrePost = (pre, post) => {
  const { length } = pre;
  if (length === 0) return null;
  const root = new TreeNode(pre[0]);

  const index = post.indexOf(pre[1]);

  const lPost = post.slice(0, index + 1);
  const lPre = pre.slice(1, index + 2);
  root.left = constructFromPrePost(lPre, lPost);

  const rPost = post.slice(index + 1, length - 1);
  const rPre = pre.slice(index + 2, length);
  root.right = constructFromPrePost(rPre, rPost);

  return root;
};