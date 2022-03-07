const fs = require('fs');

const metadataDirectory = './export/metadata';

// 注意要替换 image 的 CID
const generateRevealedMD = async () => {
  const indexes = [...Array(1000).keys()];

  for (const id of indexes) {
    const oldMetadataFile = await fs.readFileSync(`./export/metadata/${id}`);
    const oldMetadata = JSON.parse(oldMetadataFile);
    const newMetadata = {
      name: `GuoChanLiangXin #${id}`,
      description: oldMetadata['description'],
      image: `ipfs://CID/${id}.png`,
      attributes: oldMetadata['attributes'],
    };

    fs.writeFileSync(`${metadataDirectory}/${id}`, JSON.stringify(newMetadata));
  }
};

generateRevealedMD();
