import { rootFilesAndFolders } from '../../../dars-api';

console.log(rootFilesAndFolders.map(j => j.name));

export default function handler(req, res) {
    res.status(200).json(rootFilesAndFolders);
}
