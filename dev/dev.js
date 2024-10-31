const editor = new EditorJS({
  tools: {
    image: {
      class: ImageTool,
      inlineToolbar: true,
      config: {
        endpoints: {
          byFile: "http://localhost:8000/admin/posts/upload",
        },
        uploader: {
          uploadByFile: this.uploadFile.bind(this),
        },
      },
    },
  },
});

function uploadFile(file, options = {}) {
  const parentId = "365121e1-7b38-4298-b897-53eb417d909e";

  const formData = new FormData();
  formData.append("image", file);
  formData.append("post_id", parentId);
  if (options.width) {
    formData.append("width", options.width);
  }

  if (options.height) {
    formData.append("height", options.height);
  }

  return fetch("http://localhost:8000/admin/posts/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      if (options.callback) {
        options.callback(result);
      }

      if (result.error) {
        return { success: 0 };
      }

      return {
        success: 1,
        file: {
          url: result.thumb_url,
        },
      };
    });
}
